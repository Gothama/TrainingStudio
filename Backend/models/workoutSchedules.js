const mongoose = require('mongoose')

const workoutScheduleSchema = new mongoose.Schema({
    trainerID:{
        type: mongoose.Schema.ObjectId, ref: 'Trainer'
    },
    customerID:{
        type: mongoose.Schema.ObjectId, ref: 'Customer'
    },
    addedDate:{
        type:Date,
        default:Date.now()
    },
    startdate:{
        type:Date,
        required:true
    },
    enddate:{
        type:Date,
        required:true
    },
    Remarks:{
        type:String
    },
    workoutschedule: [
		{
            exercisename:{type:String },
			reps:{type:Number},
			sets:{type:Number},
            method:{type:String},
            musclegroup:{type:String},
            completed:{type:String, default:"false"},
            day:{type:String},
            videoURL:{type:String}
		}
	],

    
    price:{
        amount:{type:Number},
        paid:{type:Boolean},
        paymentID:{type: mongoose.Schema.ObjectId, ref: 'Payments'}
    }
    
})

module.exports = mongoose.model('WorkoutScheduleSchema', workoutScheduleSchema)