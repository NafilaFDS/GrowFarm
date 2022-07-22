const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('user', User)