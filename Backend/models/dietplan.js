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
            weight:{type:String},
            completed:{type:String, default:"false"}
		}
	],
    lunch: [
		{
			foodname:{type:String },
			unit:{type:String},
			quantity:{type:String},
            calories:{type:String},
            weight:{type:String},
            completed:{type:Boolean, default:false}
		}
	],
    dinner: [
		{
            foodname:{type:String },
			unit:{type:String},
			quantity:{type:String},
            calories:{type:String},
            weight:{type:String},
            completed:{type:Boolean, default:false}
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
        paymentID:{type: String, default:"notpaid"}
    }
    
})

module.exports = mongoose.model('DietPlan', DietPlanSchema)