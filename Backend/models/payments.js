const mongoose = require('mongoose')

const paymentsSchema = new mongoose.Schema({
    payerID: {
        type: mongoose.Schema.ObjectId, ref: 'Customer'
    },
    receiverID: {
        type: mongoose.Schema.ObjectId, ref: 'Trainer'
    },
    paymentdate: {
        type: Date, default: Date.now
    },
    paymentamount: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Payments', paymentsSchema)