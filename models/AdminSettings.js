const mongoose = require("mongoose");

const AdminSettings = new mongoose.Schema({
    commissionAmount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('AdminSettings', AdminSettings)