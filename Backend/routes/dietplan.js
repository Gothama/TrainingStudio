const express = require('express')
const router = express.Router()
const DietPlan = require('../models/dietplan')
const { check, validationResult } = require("express-validator")
const auth = require("../middleware/auth")

router.post("/ndietplan", auth,
    function (req, res) {

        const dietplan = new DietPlan({
            trainerID: req.user,
            customerID: req.body.customerID,
            forDate: req.body.forDate
        })

        DietPlan.create(dietplan).then(function (d) {
            console.log(d._id)
            res.json({ status: "successfull", id: d._id });
        }).catch(err => {
            console.log(err)
            res.send("fail")
        })


    }
)



//add foods for the diet plans
router.put('/addFoods',
    [
        check('food', "food Name is required").not().isEmpty(),
        check('unit', "unit is required").not().isEmpty(),
        check("quantity", "quantity is required").not().isEmpty(),
        check("calories", "calories is required").not().isEmpty(),
        check("weight", "weight By is required").not().isEmpty(),
        check("type", "type is required").not().isEmpty(),
    ], auth,
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                success: false,
                errors: errors.array()
            });
        }
        else {
            var k;
            if (req.body.type === "B") {
                k = {
                    $push:
                    {
                        breakfast: [{
                            foodname: req.body.food,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            calories: req.body.calories,
                            weight: req.body.weight
                        }]
                    }
                }
            }
            else if (req.body.type === "L") {
                k = {
                    $push:
                    {
                        lunch: [{
                            foodname: req.body.food,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            calories: req.body.calories,
                            weight: req.body.weight
                        }]
                    }
                }
            }
            else if (req.body.type === "D") {
                k = {
                    $push:
                    {
                        dinner: [{
                            foodname: req.body.food,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            calories: req.body.calories,
                            weight: req.body.weight
                        }]
                    }
                }
            }



            DietPlan.findByIdAndUpdate({ _id: req.body.dietplanID }
                , k).then(function (d) {
                    console.log(d);
                    res.json({ "success": true });
                }).catch(err => {
                    console.log(err)
                    res.send('fail' + err);
                });
        }
    })


//delete a food in the diet plan
router.post("/deletefood", auth, function (req, res, next) {
    var d;
    if (req.body.type === "B") {
        d = { $pull: { breakfast: { _id: req.body.id } } }
    }
    else if (req.body.type === "L") {
        d = { $pull: { lunch: { _id: req.body.id } } }
    }
    else if (req.body.type === "D") {
        d = { $pull: { dinner: { _id: req.body.id } } }
    }

    DietPlan.update({ _id: req.body.dietplanID }, { d }).then(function (c) {
        console.log(c)
        if (c !== null) {
            console.log(c)
            console.log("successfull")
            res.send(c)
        }
        else {
            res.send("unsuccessfull")
        }
    }).catch(err => {
        res.json("error")
    })
})


//get all the diet plans of a certain customer by the trainer
router.post("/getalldietplans", auth, function (req, res, next) {
    DietPlan.find({ trainerID: req.user, customerID: req.body.id }).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})

//get all the diet plans dates of a certain customer
router.post("/getalldietplandates", auth, function (req, res, next) {
    DietPlan.find({ trainerID: req.user, customerID: req.body.id }, { forDate: 1, _id: 0 }).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})


//delete a plan
router.post('/delete/:id', auth, function (req, res, next) {

    DietPlan.findByIdAndDelete({ _id: req.params.id }).then(function (plan) {
        res.send("Successfull");
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });

})

//get all foods of the diet plan
router.post("/getallfood", auth, function (req, res, next) {


    DietPlan.find({ _id: req.body.dietplanID }).then(function (c) {
        res.json(c)

    }).catch(err => {
        res.json("error")
    })
})

//get all the diet plans of a certain customer by that customer
router.post("/getalldietplansbycustomer", auth, function (req, res, next) {
    DietPlan.find({ customerID: req.user }).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})

//add payment details for a specific diet plan by the trainer
router.post("/addpaymentdetails", auth, function (req, res, next) {
   // console.log(req.body.dietplanID + " " + req.body.amount + " " + req.body.paid)
    var d = {  $set: { price: { amount: req.body.amount, paid: req.body.paid } } }

    DietPlan.findByIdAndUpdate({ _id: req.body.dietplanID },  d ).then(function (c) {
        console.log(c)
        res.json(c)
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})


//make a payment for a specific diet plan by the customer
router.post("/makepaymentsfordietplan", auth, function (req, res, next) {
    const payment = new Payments({
        payerID: req.user,
        receiverID: req.body.receiverID ,
        paymentdate: req.body.paymentdate ,
        paymentamount: req.body.paymentamount,
        reason: "Diet plan payment"
    })
    Payments.create(payment).then(function (c) {
        var d = { $pull: { price: { paymentID:c._id, paid: true } } }
        DietPlan.update({customerID: req.user, _id: req.body.dietplanID},{d} ).then(function(k){
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

//get all payment details for a specific plan
router.post("/getallpaymentdetails", auth, function (req, res, next) {


    DietPlan.findOne({ _id: req.body.dietplanID }).then(function (c) {
        res.json(c)

    }).catch(err => {
        res.json("error")
    })
})


module.exports = router