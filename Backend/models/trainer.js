const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema({
    credentials:{
        password:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        }
    }
})

module.exports = mongoose.model('Trainer', trainerSchema)