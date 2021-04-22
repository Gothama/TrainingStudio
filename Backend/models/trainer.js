const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema({
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
    name:{
        fName:{
            type:String
        },
        lName:{
            type:String
        }
    },
    email:{
        type:String
    },
    gender:{
        type:String,
        enum:['Male', 'Female']
    },
    phoneNumber:{
        type:String
    },
    cardDetails:{
        cardNumber:{type:String},
        expiryDate:{type:String},
        nameOnCard:{type:String},
        code:{type:Number, max:999,min:0}
    },
    profilePhotoLink:{type:String},
    qualifications:[
        {
                    issuedDate:{type:Date},
                    qualificationID:{type:String},
                    linkTo:{type:String},
                    title:{type:String},
                    issuedBy:{type:String},
                    description:{type:String},
        }
    ],
    fee:{type:Number, min:0}
        

})

module.exports = mongoose.model('Trainer', trainerSchema)