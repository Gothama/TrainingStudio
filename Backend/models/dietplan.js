const mongoose = require('mongoose')

const DietPlanSchema = new mongoose.Schema({
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
    forDate:{
        type:Date,
        required:true
    },
    Remarks:{
        type:String
    },
    breakfast: [
		{
            foodname:{type:String },
			unit:{type:String},
			quantity:{type:String},
            calories:{type:String},
            weight:{type:String}
		}
	],
    lunch: [
		{
			foodname:{type:String },
			unit:{type:String},
			quantity:{type:String},
            calories:{type:String},
            weight:{type:String}
		}
	],
    dinner: [
		{
            foodname:{type:String },
			unit:{type:String},
			quantity:{type:String},
            calories:{type:String},
            weight:{type:String}
		}
	],
    additional: [
		{
			foodname:{type:String },
			imageURL:{type:String},
			description:{type:String}
		}
	],
    price:{
        amount:{type:Number},
        paid:{type:Boolean},
        paymentID:{type: mongoose.Schema.ObjectId, ref: 'Payments'}
    }
    
})

module.exports = mongoose.model('DietPlan', DietPlanSchema)