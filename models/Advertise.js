const mongoose = require("mongoose");

const Advertise = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    response: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sell'
    },
    status: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Advertise', Advertise)