//--------------------models------------
const User = require("../models/User");
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

// const events = async eventIds => {
//     try {
//         const events = await Event.find({ _id: { $in: eventIds } });
//         return events.map(event => {
//             return transformEvent(event);
//         })
//     } catch (err) {
//         throw err;
//     }
// }

// const singleEvent = async eventId => {
//     try {
//         const event = await Event.findById(eventId);
//         return transformEvent(event);

//     } catch (err) {
//         throw err
//     }
// }
const transformAd = async (ad) => {
    //console.log('AD', ad)
    try {
        const u = await User.findById("62e3e2673fdc346047f8eacf");
        //console.log("u", u)
        return {
            ...ad._doc,
            buyer: u
        };
    } catch (err) {
        throw err
    }
}
// const transformBooking = (booking) => {
//     return {
//         ...booking._doc,
//         user: user.bind(this, booking._doc.user),
//         event: singleEvent.bind(this, booking._doc.event),
//         createdAt: dateToString(booking._doc.createdAt),
//         updatedAt: dateToString(booking._doc.updatedAt)
//     };
// }
exports.transformAd = transformAd;
// exports.transformBooking = transformBooking;
