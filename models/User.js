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
    password: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', User)