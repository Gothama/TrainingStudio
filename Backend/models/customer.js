const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    credentials: {
        password: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        }
    },

    rdietianID: {
        type: mongoose.Schema.ObjectId, ref: 'Trainer'
    },
    rtrainerID: {
        type: mongoose.Schema.ObjectId, ref: 'Trainer'
    }
    ,
    name: {
        fName: {
            type: String,
            default: null
        },
        lName: {
            type: String,
            default: null
        }
    },
    dob: {
        type: Date
    },
    email: {
        type: String
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    bloodGroup: {
        type: String
    },
    sugarLevel: [
        {
            checkedDate: { type: Date, default: Date.now },
            level: { type: Number, min: 0 }
        }
    ],
    phoneNumber: {
        type: String,
        default: null
    },
    weight: [
        {
            checkedDate: { type: Date, default: Date.now },
            amount: { type: Number, min: 0 }
        }
    ],
    height: {
        type: Number
    },
    cardDetails: {
        cardNumber: { type: String },
        expiryDate: { type: String },
        nameOnCard: { type: String },
        code: { type: Number, max: 999, min: 0 }
    },
    bloodPressure: [
        {
            checkedDate: { type: Date, default: Date.now },
            level: { type: Number, min: 0 }
        }
    ],
    healthReports: [
        {
            issuedDate: { type: Date, default: Date.now },
            link: { type: String },
            description: { type: String },
            addeddate: { type: Date, default: Date.now }
        }
    ],
    rating: {
        totalRating: { type: Number },
        totalRated: { type: Number }
    },
    profilephotolink: {
        type: String,
        default: "https://res.cloudinary.com/dbecgupu0/image/upload/v1619377477/profile_ybple8.jpg"
    },

    resetToken: String,
    expireToken: Date,
    registered: { type: Date, default: Date.now }


})

module.exports = mongoose.model('Customer', customerSchema)