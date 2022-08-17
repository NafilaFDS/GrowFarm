const { gql, ApolloError } = require("apollo-server-express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const process = require('process');
const { transformSale, transformAd } = require("./merge");

//API
const User = require("../models/User");
const Advertise = require("../models/Advertise");
const Sell = require("../models/Sell");

const randomString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const resolvers = {
    Query: {
        hello: () => "Hello world!",
        farmersList: async () => {
            try {
                return await User.find({ userType: { $in: 2 } });
            } catch (error) {
                throw error
            }
        },
        buyersList: async () => {
            try {
                return await User.find({ userType: { $in: 3 } });
            } catch (error) {
                throw error
            }
        },
        advertiseApproval: async (_, args, context) => {
            try {
                const advertises = await Advertise.find();
                return advertises.map(advertise => {
                    return transformAd(advertise, context.userType, context.userId);
                });
            } catch (error) {
                throw error
            }
        },
        cropAdvertise: async (_, args, context) => {
            try {
                const advertises = await Advertise.find({ status: { $in: "Approved" } });
                return advertises.map(advertise => {
                    return transformAd(advertise, context.userType, context.userId);
                });
            } catch (error) {
                throw error
            }
        },
        myProfile: async (__, args, context) => {
            try {
                return await User.findById(context.userId);
            } catch (error) {
                throw error
            }
        },
        myAdvertise: async (__, args, context) => {
            try {
                return await Advertise.find({ buyer: { $in: context.userId } });
            } catch (error) {
                throw error
            }
        },
        myResponse: async (__, { advId }, context) => {
            try {
                return await Sell.find({
                    $and: [
                        {
                            "buyer": context.userId
                        },
                        {
                            "advertise": advId
                        }
                    ]
                })
            } catch (error) {
                throw error
            }
        },
        sellHistory: async (__, { advId }, context) => {
            try {
                const sells = await Sell.find({ advertise: { $in: advId } });
                return sells.map(sell => {
                    return transformSale(sell);
                })
            } catch (error) {
                throw error
            }
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            try {
                const { name, mobile, email, address, password, userType } = args.user;
                const dupliUser = await User.findOne({ mobile: mobile });
                if (dupliUser) {
                    throw new ApolloError("User already exists", "BAD_USER_INPUT")
                }
                const hashedPassword = await bcrypt.hash(password, 12);
                const user = new User({
                    name, mobile, email, password: hashedPassword, address, userType
                })
                await user.save();
                return { ...user._doc, password: null };
            } catch (error) {
                throw new ApolloError(error, "INTERNAL_SERVER_ERROR")
            }
        },
        login: async (_, args) => {
            try {
                const { mobile, password } = args
                const user = await User.findOne({ mobile: mobile })
                if (!user) {
                    throw new Error("User does not exist!");
                }
                const isEqal = await bcrypt.compare(password, user.password);
                if (!isEqal) {
                    throw new Error("Password is incorrect!");
                }
                const token = await jwt.sign(
                    { userId: user.id, userType: user.userType },
                    'somesupersecretkey',
                    { expiresIn: '100h' }
                )
                return {
                    me: { ...user._doc, password: null },
                    token: token,
                    tokenExpiration: 100
                }
            } catch (error) {
                throw error;
            }
        },
        uploadFile: async (_, { file }, context) => {
            if (!context.isAuth) {
                throw new Error("Unauthenticated!");
            }
            const x = await file.file;
            const { createReadStream, filename } = x;
            const stream = createReadStream();
            //console.log("stream", stream)
            const { ext } = path.parse(filename);
            const randomName = randomString(12) + ext
            console.log("__dirname", process.cwd());
            const pathName = path.join(process.cwd(), `/public/images/${randomName}`);
            await stream.pipe(fs.createWriteStream(pathName))
            return {
                url: `http://localhost:4000/images/${randomName}`
            }
        },
        postAdvertise: async (_, args, context) => {
            //console.log("context", context);
            if (!context.isAuth) {
                throw new Error("Unauthenticated!");
            }
            const { name, image, location, quantity } = args.advertise;

            const saveAdvertise = new Advertise({
                name: name,
                image: image,
                location: location,
                quantity: quantity,
                buyer: context.userId,
                status: "Pending"
            });
            try {
                let postAd
                const saveAd = await saveAdvertise.save();
                postAd = transformAd(saveAdvertise, context.userType, context.userId);
                const usr = await User.findById(context.userId);
                if (!usr) {
                    throw new Error("User not found.")
                }
                return postAd
            } catch (err) {
                throw err;
            }
        },
        deleteUser: async (parent, { id }, context) => {
            // if (!context.isAuth) {
            //     throw new Error("Unauthenticated!");
            // }
            await Advertise.find({ buyer: id }).then((advertises) => {
                advertises.forEach(advertise => {
                    advertise.remove();
                })
            })
            await User.findByIdAndRemove(id)
            return {
                status: 1,
                message: "Deleted Successfully!"
            }
        },
        editUser: async (parent, { name, mobile, email, address }, context) => {
            // if (!context.isAuth) {
            //     throw new Error("Unauthenticated!");
            // }
            await User.findByIdAndUpdate(
                context.userId,
                {
                    $set: {
                        name, mobile, email, address
                    }
                }
            )
            return User.findById(context.userId)
        },
        updateAdvStatus: async (parent, { id, status }, context) => {
            await Advertise.findByIdAndUpdate(
                id,
                {
                    $set: {
                        status
                    }
                }
            )
            return { message: "Successfull!" }
        },
        createSale: async (_, { advId, quantity, price }, context) => {
            const saveSale = new Sell({
                advertise: advId,
                quantity: quantity,
                price: price,
                farmer: context.userId,
                paymentStatus: "Unpaid"
            });
            try {
                let postSale
                await saveSale.save();
                postSale = transformSale(saveSale);
                return postSale
            } catch (err) {
                throw err;
            }
        },
        updateSale: async (_, { saleId }, context) => {
            try {
                await Sell.findByIdAndUpdate(
                    saleId,
                    {
                        $set: {
                            paymentStatus: "Paid"
                        }
                    }
                )
                return { message: "Payment Successfull!" }
            } catch (err) {
                throw err;
            }
        },
        makePayment: async (_, args, context) => {
            try {
                const { totalAmount, productName, cusName, cusEmail, cusAdd1, cusPhone, advId } = args.payment;
                return {
                    url: `http://localhost:4000/ssl-request/?totalAmount=${totalAmount}&productName=${productName}&cusName=${cusName}&cusEmail=${cusEmail}&cusAdd1=${cusAdd1}&cusPhone=${cusPhone}&advId=${advId}`
                }
            } catch (err) {
                throw err;
            }
        },
        delWhAdv: async () => {
            return Advertise.remove()
        }
    }
}
module.exports = resolvers