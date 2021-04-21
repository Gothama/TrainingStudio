const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Customer', customerSchema)