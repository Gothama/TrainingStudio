const mongoose = require('mongoose')

const workoutScheduleSchema = new mongoose.Schema({
    trainerID:{
        type:String,
        required:true
    },
    customerID:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        default:Date.now()
    },
    expiryDate:{
        type:Date,
        required:true
    },
    noOfweeks:{
        type:Number,
        required:true
    },
    Remarks:{
        type:String
    },
    feedback:{
        type:String
    },
    exercises: [
		{
			day:{
                type:String,
                enum:['Monday', 'Tuesday','wednesday','Thursday', 'Friday','Saturday','Sunday']
            },
			exercise:{type:String },
			imageURL:{type:String},
			videoURL:{type:String},
			description:{type:String}
		}
	]



    

    
})

module.exports = mongoose.model('WorkoutScheduleSchema', workoutScheduleSchema)