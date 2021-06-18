const express = require('express')
const router = express.Router()
const DietPlan = require('../models/dietplan')
const {check, validationResult} = require("express-validator")
const auth = require("../middleware/auth")

router.post("/ndietplan", auth,
    function (req, res) {

            const dietplan = new Post({
                trainerID: req.user,
                customerID: req.body.customerID,
                forDate: req.body.forDate
            })

            DietPlan.create(dietplan).then(function (d) {
                console.log(d)
                res.json("successfull");
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
            if(req.body.type==="B"){
                k = {
                    $push:
                    {
                        breakfast : [{
                            food: req.body.food,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            calories: req.body.calories,
                            weight: req.body.weight
                        }]
                    }
                }
            }
            else if(req.body.type==="L"){
                k = {
                    $push:
                    {
                        lunch : [{
                            food: req.body.food,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            calories: req.body.calories,
                            weight: req.body.weight
                        }]
                    }
                }
            }
            else if(req.body.type==="D"){
                k = {
                    $push:
                    {
                        dinner : [{
                            food: req.body.food,
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
                    res.json({"success" : true});
                }).catch(err => {
                    console.log(err)
                    res.send('fail' + err);
                });
        }
    })


//delete a food in the diet plan
router.post("/deletefood", auth, function (req, res, next) {
    var d;
    if(req.body.type==="B"){
        d = { $pull: { breakfast: { _id: req.body.id } } }
    }
    else if(req.body.type==="L"){
        d = { $pull: { lunch: { _id: req.body.id } } }
    }
    else if(req.body.type==="D"){
        d = { $pull: { dinner: { _id: req.body.id } } }
    }

    DietPlan.update({ _id: req.user }, { d }).then(function (c) {
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


module.exports = router