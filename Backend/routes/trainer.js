const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const customer = require('../models/customer');
const f = require('../functions/functions');

//signUp router
router.post("/ntrainer",
    [
        check('password', "Password is required").not().isEmpty(),
        check('username', "username is required").not().isEmpty()
    ],
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                success: false,
                errors: errors.array()
            });
        }
        else {
            const trainer = new Trainer({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                },
                type: req.body.type
            })
            
            Trainer.findOne({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                }
            }).then(function (t){
                if(t!==null){
                    res.json({"status" : "Already"})
                }
                else{
                    customer.findOne({
                        credentials: {
                            username: req.body.username,
                            password: req.body.password
                        }}
                    ).then(function (c){
                        if(c!==null){
                            res.json({"status" : "Already"})
                        }
                        else{
                            Trainer.create(trainer).then(function (c) {
                                console.log(c._id)
                                console.log(c.type)
                                const user = { id: c._id }
                                jwt.sign(
                                    { user },
                                    "supersecret",
                                    { expiresIn: 360000000 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({ "token": token, "status": "Successfull" , "type" : c.type.toString()});
                                    }
                
                                );
                            }).catch(err => {
                                console.log(err)
                                res.send("fail")
                            })
                        }
                    })
                }
            })



        }

    }
)

//signIn router
router.post('/ftrainer', function (req, res, next) {

    Trainer.findOne({
        credentials: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(function (c) {
            console.log(c);
            if (c !== null) {
                console.log("Successfull");
                const user = { id: c._id }
                jwt.sign(
                    { user },
                    "supersecret",
                    { expiresIn: 360000000 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ "token": token, "statuss": "Successfull", "type" : c.type.toString()});
                    }

                );
            }
            else {
                res.json({ "statuss": "fail" })
            }
        }).catch(err => {
            res.send('error')
        })
})

//add details of the trainer
router.put('/addDetails',
    [
        check('fName', "first Name is required").not().isEmpty(),
        check('lName', "last name is required").not().isEmpty(),
        check('fName', "first Name should be letters").isString(),
        check('fName', "first Name should be letters").isLength({ min: 3 }),
        check('lName', "last name is required").isString(),
        check('dob', "Date of birth is required").not().isEmpty(),
        check('dob', "Date of birth should be a date").isDate(),
        check('email', "email is required").not().isEmpty(),
        check('email', "Email should be in correct format").isEmail(),
        check('phoneNumber', "Phone number is required").not().isEmpty(),
        check('phoneNumber', "Phone Number should be in correct format").isMobilePhone(),
        check('fee', "Fee is required").not().isEmpty(),
        check('fee', "Fee should be in a currency").isNumeric()
    ], auth,
    function (req, res, next) {

        var k = {
            $set:
            {
                name: {
                    fName: req.body.fName,
                    lName: req.body.lName
                },
                dob: req.body.dob,
                email: req.body.email,
                gender: req.body.gender,
                profilePhotoLink: req.body.profilePhotoLink,
                phoneNumber: req.body.phoneNumber,
                fee: req.body.fee,
                profilephotolink: req.body.profilephotolink,
                posterphotoLink: req.body.posterphotoLink,
                cardDetails:{
                    cardNumber:req.body.cardNumber,
                    expiryDate:req.body.expiryDate,
                    nameOnCard:req.body.nameOnCard,
                    code:req.body.code
                }
            }
        }

        Trainer.findByIdAndUpdate({
            _id:
                req.user

        }
            , k).then(function (c) {
                console.log(req.body);
                res.json(c);
            }).catch(err => {
                console.log(err)
                res.send('fail' + err);
            });
    })

//add qualifications of the trainer
router.put('/addQualification',
    [
        check('issuedDate', "Issued Date is required").not().isEmpty(),
        check('qualificationID', "qualificationID is required").not().isEmpty(),
        check("linkTo", "linkTo should be a link").isURL(),
        check("title", "title is required").not().isEmpty(),
        check("issuedBy", "Issued By is required").not().isEmpty(),
        check("description", "description is required").not().isEmpty(),
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

            var k = {
                $push:
                {
                    qualifications: [{
                        issuedDate: req.body.issuedDate,
                        qualificationID: req.body.qualificationID,
                        linkTo: req.body.linkTo,
                        title: req.body.title,
                        issuedBy: req.body.issuedBy,
                        description: req.body.description,

                    }]
                }
            }

            Trainer.findByIdAndUpdate({ _id: req.user }
                , k).then(function (c) {
                    console.log(c);
                    res.json({"success" : true});
                }).catch(err => {
                    console.log(err)
                    res.send('fail' + err);
                });
        }
    })

//get all qualifications

router.post("/getqualification", auth, function (req, res, next) {
    Trainer.findById({ _id: req.user }).then(function (c) {
        console.log(c.qualifications);
        if (c !== null) {
            if (c.qualifications.isLength != 1) {
                res.json({ "D": c.qualifications, "K": "Successfull" })
            }
            else {
                res.json({ "k": "Unsuccessfull" })
            }
        }
        else {
            res.json({ "k": "No user" })
        }
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})

//delete a qualification

router.post("/deletequalification", auth, function (req, res, next) {
    var d = { $pull: { qualifications: { _id: req.body.id } } }
    Trainer.update({ _id: req.user }, { $pull: { qualifications: { _id: req.body.id } } }).then(function (c) {
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


//get All details of a trainer
router.post('/fdetail', auth, function (req, res, next) {

    Trainer.findById({
        _id: req.user
            
    })
        .then(function (c) {
            console.log(c);
            if (c !== null) {
                console.log("Successfull");
                res.json(c);
            }
            else {
                res.json({ "statuss": "fail" })
            }
        }).catch(err => {
            res.send('error')
        })
})

//get All details of a trainer
router.post('/ffdetail', function (req, res, next) {

    Trainer.findById({
        _id: req.body.id
            
    })
        .then(function (c) {
            console.log(c);
            if (c !== null) {
                console.log("Successfull");
                res.json(c);
            }
            else {
                res.json({ "statuss": "fail" })
            }
        }).catch(err => {
            res.send('error')
        })
})

//get all the trainers registered with the platform
router.get("/alltrainers", function (req, res) {
    Trainer.find({type:"Trainer"}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

//get all the dieticians registered with the platform
router.get("/allDtrainers", function (req, res) {
    Trainer.find({type:"Dietician"}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    })
})

router.post("/allMyCustomers", auth , function (req, res) {
    console.log(req.user);
    if(req.body.type==="Trainer"){
           customer.find({rtrainerID: req.user} , {credentials:{username:0 , password:0}, healthReports:0}).then(function (t) {
        res.json(t);
    }).catch(err => {
        res.json("Error")
    }) 
    }
    else{
        customer.find({rdietianID: req.user},{credentials:0}).then(function (t) {
            res.json(t);
        }).catch(err => {
            res.json("Error")
        }) 
    }

})

//unregister a customer
router.post('/unregister', auth, function (req, res, next) {
    console.log(req.body.cid + req.body.type)

    if (req.body.type === "Dietician") {
        var k = {
            $set:
            {rdietianID: undefined}
        }

        customer.findByIdAndUpdate({
            _id:req.body.cid
        }, k).then(function (c) {
            console.log(c);
            res.json("deleted");
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });
    }
    else {
        var k = {
            $set:
            {rtrainerID: null}
        }

        customer.findByIdAndUpdate({
            _id:req.body.cid
        }, k).then(function (c) {
            console.log(c);
            res.json("deleted");
            
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });

    }
})



module.exports = router