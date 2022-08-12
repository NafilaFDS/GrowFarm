const { gql, ApolloError } = require("apollo-server-express");
const User = require("../models/User");
const Advertise = require("../models/Advertise");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const process = require('process');
const { transformBooking, transformAd } = require("./merge");

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
        advertiseList: async () => {
            try {
                return await Advertise.find();
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
        uploadFile: async (_, { file }) => {
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
            console.log("context", context);
            if (!context.isAuth) {
                throw new Error("Unauthenticated!");
            }
            const { name, image, location, quantity } = args.advertise;

            const saveAdvertise = new Advertise({
                name: name,
                image: image,
                location: location,
                quantity: quantity,
                buyer: "62e3e2673fdc346047f8eacf"
            });
            try {
                let postAd
                const saveAd = await saveAdvertise.save();
                postAd = transformAd(saveAdvertise);
                const usr = await User.findById("62e3e2673fdc346047f8eacf");
                if (!usr) {
                    throw new Error("User not found.")
                }
                return postAd
            } catch (err) {
                throw err;
            }
        }
    }
}
module.exports = resolvers