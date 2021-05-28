const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
   expertID:{
      type: mongoose.Schema.ObjectId, ref: 'Trainer'
   },
    customerID:{
    type: mongoose.Schema.ObjectId, ref: 'Customer'
    },
    messager:{
        type:String
    },
    messages:{
        type:String
    }
})

module.exports = mongoose.model('Chat', chatSchema)