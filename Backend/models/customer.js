const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    credentials:{
        password:{
            type:String,
            required:true,
            unique:true
        },
        username:{
            type:String,
            required:true,
            unique:true
        }
    },
    register:{
        dietianID:{
            type:String
        },
        trainerID:{
            type:String
        }
    },
    name:{
        fName:{
            type:String
        },
        lName:{
            type:String
        }
    },
    dob:{
        type:Date
    },
    email:{
        type:String
    },
    gender:{
        type:String,
        enum:['Male', 'Female']
    },
    bloodGroup:{
        type:String
    },
    sugarLevel:[
        {
            checkedDate:{type: Date, default: Date.now },
            level:{type: Number,min:0}
        }
    ],
    phoneNumber:{
        type:String
    },
    weight:[
        {
            checkedDate:{type: Date, default: Date.now },
            amount:{type: Number, min:0}
        }
    ],
    height:{
        type:Number
    },
    cardDetails:{
        cardNumber:{type:String},
        expiryDate:{type:String},
        nameOnCard:{type:String},
        code:{type:Number, max:999,min:0}
    },
    profilePhotoLink:{type:String},
    bloodPressure:[
        {
            checkedDate:{type: Date, default: Date.now },
            level:{type: Number,min:0}
        }
    ],
    healthReports:[
        {
            issuedDate:{type: Date,default: Date.now },
            link:{type: String},
            description:{type: String}
        }
    ],
    rating:{
        totalRating:{type:Number},
        totalRated:{type:Number}
    }
    

    
})

module.exports = mongoose.model('Customer', customerSchema)