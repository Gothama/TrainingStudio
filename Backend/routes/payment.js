const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const customer = require('../models/customer');
const Payments = require('../models/payments');


//get all the payments paid by customers by admin
router.get("/allPayments", function (req, res) {
    Payments.find().then(function (p) {
        res.json(p);
    }).catch(err => {
        res.json("Error")
    })
})

//get all the payments i paid by the customer
router.get("/myallpaidPayments", auth, function (req, res) {
    Payments.find({payerID:req.user}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//get all the payments recieved - Trainer
router.get("/myallreceivedPayments", auth, function (req, res) {
    Payments.find({receiverID:req.user}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

/*
//total payments done in
router.get("/notrainers", function (req, res) {
    Trainer.count({type:"Trainer"}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//quantity of customers
router.get("/nocustomers", function (req, res) {
    customer.count({}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//delete a customers
router.post('/cdelete/:id', auth, function (req, res, next) {
    customer.findOneAndDelete({ _id: req.params.id }).then(function (c) {
        res.send("okay");
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });

})

//delete a trainer/dietician
router.post('/tdelete/:id', auth, function (req, res, next) {
    Trainer.findOneAndDelete({ _id: req.params.id }).then(function (c) {
        res.send("okay");
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });

})


router.get("/date", function (req, res) {
    
    customer.count({registered:{
        $gte:  new Date("2001-01-25").toISOString(),
        $lt: new Date("2030-01-25").toISOString()
    }}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json({"Error" : err})
    })
})


router.get("/rdate", function (req, res) {
    
    customer.aggregate([{
        $group:{
            _id: {$year: "$registered"},
            count:{$sum:1}
        }
     }]).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json({"Error" : err})
    })
})

*/

module.exports = router