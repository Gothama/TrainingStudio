const express = require('express')
const router = express.Router()
const WorkoutSchedule = require('../models/workoutSchedules')
const {check, validationResult} = require("express-validator")
const auth = require("../middleware/auth");
const payments = require('../models/payments');
const workoutSchedules = require('../models/workoutSchedules');

router.post("/nworkoutplan", auth,
    function (req, res) {

        const workoutplan = new WorkoutSchedule({
            trainerID: req.user,
            customerID: req.body.customerID,
            startdate: req.body.startdate,
            enddate: req.body.enddate

        })

        WorkoutSchedule.create(workoutplan).then(function (d) {
            console.log(d._id)
            res.json({ status: "successfull", id: d._id });
        }).catch(err => {
            console.log(err)
            res.send("fail")
        })
    }
)

//add workoutschedules by the trainer
router.put('/addWorkouts', auth,
    function (req, res, next) {
        console.log(req.body.videoURl)
            var k = {
                $push:
                {
                    workoutschedule: [{
                        exercisename: req.body.exercisename,
                        reps: req.body.reps,
                        sets: req.body.sets,
                     //method: req.body.method,
                       // musclegroup: req.body.musclegroup,
                        day: req.body.day,
                        videoURL:req.body.videoURL
                    }]
                }
            }

            WorkoutSchedule.findByIdAndUpdate({ _id: req.body.workoutplanID }
                , k).then(function (c) {
                    console.log(c);
                    res.json({"success" : true});
                }).catch(err => {
                    console.log(err)
                    res.send('fail' + err);
                });
        
    })

//get all the workout plans of a certain customer by the trainer
router.post("/getallworkplans", auth, function (req, res, next) {
    WorkoutSchedule.find({ trainerID: req.user, customerID: req.body.id }).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})

//get all the workout plans of a certain customer by that customer
router.post("/getallworkplansbycustomer", auth, function (req, res, next) {
    WorkoutSchedule.find({ customerID: req.user }).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})

//get all workouts of the workout plan
router.post("/getallworkouts", auth, function (req, res, next) {
    WorkoutSchedule.findOne({ _id: req.body.workoutplanID } ).then(function (c) {
        res.json(c)

    }).catch(err => {
        res.json("error")
    })
})

//add payment details for a specific workout plan by the trainer
router.post("/addpaymentdetails", auth, function (req, res, next) {
    // console.log(req.body.dietplanID + " " + req.body.amount + " " + req.body.paid)
     var d = {  $set: { price: { amount: req.body.amount, paid: req.body.paid } } }
 
     WorkoutSchedule.findByIdAndUpdate({ _id: req.body.workoutplanID },  d ).then(function (c) {
         console.log(c)
         res.json(c)
     }).catch(err => {
         res.json({ "k": err })
     })
 })

 //get all payment details for a specific plan
router.post("/getallpaymentdetails", auth, function (req, res, next) {


    WorkoutSchedule.findOne({ _id: req.body.workoutplanID }).then(function (c) {
        res.json(c)

    }).catch(err => {
        res.json("error")
    })
})

//get all the workout plans of a certain customer by that customer
router.post("/getallworkoutplansbycustomer", auth, function (req, res, next) {
    WorkoutSchedule.find({ customerID: req.user }).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})


//make a payment for a specific diet plan by the customer
router.post("/makepaymentsforworkoutplan", auth, function (req, res, next) {
    console.log("Payments")
    const payment = new payments({
        payerID: req.user,
        receiverID: req.body.eid ,
        paymentdate: req.body.paymentdate ,
        paymentamount: req.body.paymentamount,
        reason: "Workout plan payment"
    })
    payments.create(payment).then(function (c) {
       // var d = { $pull: { price: { paymentID:c._id, paid: true } } }
       WorkoutSchedule.findByIdAndUpdate({ _id: req.body.workoutplanID},{ $set: { price: { paymentID:c._id, paid: true } } }).then(function(k){
            console.log(k)
        }).catch(err => {
            console.log(err)
            res.send("fail")
        })

    }).catch(err => {
        console.log(err)
        res.send("fail")
    })

})

module.exports = router