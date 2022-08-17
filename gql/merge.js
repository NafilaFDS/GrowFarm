//--------------------models------------
const User = require("../models/User");
const Advertise = require("../models/Advertise");
const Sell = require("../models/Sell");
// const Event = require("../../models/event");

//-----------population functions ----------------
const user = async userId => {
    try {
        console.log("userId", userId);
        return await User.findById(userId);
    } catch (err) {
        throw err
    }
}
const transformAd = async (ad, type, id) => {
    //console.log('AD, id', ad, id)
    try {
        const u = await User.findById(ad.buyer);
        let s
        if (type === 2) {
            const sells = await Sell.find({
                $and: [
                    {
                        "buyer": id
                    },
                    {
                        "advertise": ad._id
                    }
                ]
            })
            s = sells.map(sell => {
                return transformSale(sell);
            })
        } else {
            const sells = await Sell.find({ advertise: { $in: ad._id } })
            s = sells.map(sell => {
                return transformSale(sell);
            })
        }
        //console.log("u", u)
        return {
            ...ad._doc,
            buyer: u,
            response: s
        };
    } catch (err) {
        throw err
    }
}
const transformSale = async (sale) => {
    try {
        const u = await User.findById(sale.farmer);
        const a = await Advertise.findById(sale.advertise);
        //console.log("u", u)
        return {
            ...sale._doc,
            farmer: u,
            advertise: a
        };
    } catch (err) {
        throw err
    }
}
exports.transformAd = transformAd;
exports.transformSale = transformSale;
// exports.transformBooking = transformBooking;
