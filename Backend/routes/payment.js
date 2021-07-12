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

//get all the payments done by a particular customer
router.post("/allrPcustomer", auth, function (req, res) {
    Payments.find({receiverID:req.user , payerID:req.body.payerID}).then(function (t) {
        console.log(t)
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})



//get all recent payments
router.get("/paymentsrecent", function (req, res) {
    
    Payments.find({paymentdate:{
        $gte:  new Date("2001-01-25").toISOString(),
        $lt: new Date("2030-01-25").toISOString()
    }}).then(function (p) {
        res.json(p);
    }).catch(err => {
        res.json({"Error" : err})
    })
})


//add new payment
router.post("/npayment", auth,
    function (req, res) {

            const payment = new Payments({
                payerID: req.user,
                receiverID: req.body.receiverID ,
                paymentdate: req.body.paymentdate ,
                paymentamount: req.body.paymentamount,
                reason: req.body.reason
            })
            Payments.create(payment).then(function (c) {
                console.log(c)
                res.json("successfull");
            }).catch(err => {
                console.log(err)
                res.send("fail")
            })
    }
)

//get all the payments done by a customer admin router
router.post("/paymentsofcustomer", function (req, res) {
    Payments.find({payerID:req.body.payerID}).populate("receiverID").then(function (t) {
        console.log(t)
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//get all the payments received by a trainer admin router
router.post("/paymentsoftrainer", function (req, res) {
    Payments.find({receiverID:req.body.receiverID}).populate("payerID").then(function (t) {
        console.log(t)
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})


module.exports = router