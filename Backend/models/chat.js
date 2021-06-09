const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
   expertID:{
      type: mongoose.Schema.ObjectId, ref: 'Trainer'
   },
    customerID:{
    type: mongoose.Schema.ObjectId, ref: 'Customer'
    },
    messages:[
        {
                    message:{type:String},
                    date:{type:Date, default: Date.now },
                    author:{type:String,enum: ['Customer', 'Dietician']}   
        }
    ]

})

module.exports = mongoose.model('Chat', chatSchema)