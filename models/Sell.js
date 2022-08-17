const mongoose = require("mongoose");

const Sell = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    advertise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advertise'
    },
    paymentStatus: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Sell', Sell)