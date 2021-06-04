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
            type:String,
            default:null
        },
        lName:{
            type:String,
            default:null
        }
    },
    email:{
        type:String,
        default:null
    },
    gender:{
        type:String,
        enum:['Male', 'Female'],deafult:"Male"
    },
    phoneNumber:{
        type:String,
        default:null
    },
    cardDetails:{
        cardNumber:{type:String,default:null},
        expiryDate:{type:String,default:null},
        nameOnCard:{type:String,default:null},
        code:{type:Number, max:999,min:0,default:null}
    },
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
    fee:{type:Number, min:0, default:null},
    profilephotolink:{
        type:String,
        default:"https://res.cloudinary.com/dbecgupu0/image/upload/v1619377477/profile_ybple8.jpg"
    },
    posterphotoLink:{
        type:String,
        default:"https://res.cloudinary.com/dbecgupu0/image/upload/v1620164857/poster_hheyjb.png"
    },
    rating:{
        type:Number,
        default:0
    },

    resetToken:String,
    expireToken:Date,
    type:{
        type:String,
        enum:["Dietician", "Trainer"]
    },
    registered:{type: Date,default: Date.now }
    

        

})

module.exports = mongoose.model('Trainer', trainerSchema)