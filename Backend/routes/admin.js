const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const customer = require('../models/customer');



router.get("/alltrainers", function (req, res) {
    Trainer.find({type:"Trainer"}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})


router.get("/allcustomers", function (req, res) {
    customer.find({}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

router.get("/allDtrainers", function (req, res) {
    Trainer.find({type:"Dietician"}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//quantity of dieticians
router.get("/nodieticians", function (req, res) {
    Trainer.count({type:"Dietician"}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//quantity of dieticians
router.get("/notrainers", function (req, res) {
    Trainer.count({type:"Trainers"}).then(function (t) {
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



module.exports = router