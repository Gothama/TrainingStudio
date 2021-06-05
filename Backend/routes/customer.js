const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const Trainer = require('../models/trainer');
const chat = require('../models/chat');
const payments = require('../models/payments');

//signUp router
router.post("/ncustomer",
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
            const customer = new Customer({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                }
            })

            Customer.findOne({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                }
            }).then(function (c) {
                if (c !== null) {
                    res.json({ "status": "Already" });
                }
                else {

                    Trainer.findOne({
                        credentials: {
                            username: req.body.username,
                            password: req.body.password
                        }
                    }).then(function (t) {
                        if (t !== null) {
                            res.json({ "status": "Already" });
                        }
                        else {
                            Customer.create(customer).then(function (c) {
                                console.log(c._id)
                                const user = { id: c._id }
                                jwt.sign(
                                    { user },
                                    "supersecret",
                                    { expiresIn: 360000000 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({ "token": token, "status": "Successfull" });
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
router.post('/fcustomer', function (req, res, next) {

    Customer.findOne({
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
                        res.json({ "token": token, "statuss": "Successfull" });
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


//add qualifications of the trainer
router.put('/addhealthreports',
    [
        check('issuedDate', "Issued Date is required").not().isEmpty(),
        check("link", "link should be a link").isURL(),
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
                    healthReports: [{
                        issuedDate: req.body.issuedDate,
                        link: req.body.link,
                        description: req.body.description,
                        addeddate: req.body.addeddate

                    }]
                }
            }

            Customer.findByIdAndUpdate({ _id: req.user }
                , k).then(function (c) {
                    console.log(c);
                    res.json({"r" : c , "k":"Successfull"});
                }).catch(err => {
                    console.log(err)
                    res.send('fail' + err);
                });
        }
    })



//add details of the customer
router.put('/addDetails',
    [
        check('fname', "first Name is required").not().isEmpty(),
        check('lname', "last name is required").not().isEmpty(),
        check('fname', "first Name should be letters").isString(),
        check('lname', "last name is required").isString(),
        check('dob', "Date of birth is required").not().isEmpty(),
        check('email', "email is required").not().isEmpty(),
        check('email', "Email should be in correct format").isEmail(),
        check('phoneNumber', "Phone number is required").not().isEmpty(),
        check('phoneNumber', "Phone Number should be in correct format").isMobilePhone(),
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
                bloodGroup: req.body.bloodGroup,
                phoneNumber: req.body.phoneNumber,
                profilephotolink: req.body.profilephotolink
            }
        }

        Customer.findByIdAndUpdate({
            _id:
                req.user

        }, k).then(function (c) {
            console.log(req.body);
            res.json(c);
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });
    })

//add sugar level
router.put('/addsugarLevel',
    [
        check('level', "sugarLevel is required").not().isEmpty(),
        check('level', "sugarLevel should be numeric").isNumeric(),
    ],
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
                    sugarLevel: [{
                        level: req.body.level
                    }]
                }
            }

            Customer.findOneAndUpdate({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                }
            }, k).then(function (c) {
                console.log(c);
                res.json(c);
            }).catch(err => {
                console.log(err)
                res.send('fail' + err);
            });
        }
    })

//add weight
router.put('/addweight',
    [
        check('amount', "amount is required").not().isEmpty(),
        check('amount', "amount should be numeric").isNumeric(),
    ],
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
                    weight: [{
                        amount: req.body.amount
                    }]
                }
            }

            Customer.findOneAndUpdate({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                }
            }, k).then(function (c) {
                console.log(c);
                res.json(c);
            }).catch(err => {
                console.log(err)
                res.send('fail' + err);
            });
        }
    })


//add pressure
router.put('/addpressure',
    [
        check('level', "level is required").not().isEmpty(),
        check('level', "level should be numeric").isNumeric(),
    ],
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
                    bloodPressure: [{
                        level: req.body.level
                    }]
                }
            }

            Customer.findOneAndUpdate({
                credentials: {
                    username: req.body.username,
                    password: req.body.password
                }
            }, k).then(function (c) {
                console.log(c);
                res.json(c);
            }).catch(err => {
                console.log(err)
                res.send('fail' + err);
            });
        }
    })

//get workout schedules
router.post('/getschedules', function (req, res, next) {

    Customer.findOne({
        credentials: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(function (c) {
            // console.log(c);
            if (c !== null) {
                console.log("Successfull");
                res.json(c._id);
            }
            else {
                res.send('fail')
            }
        }).catch(err => {
            res.send('error')
        })
})

//get All details of a customer
router.post('/fdetail', auth, function (req, res, next) {

    Customer.findById({
        _id:
            req.user
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


//get all the health reports of a customer
router.post("/gethealthreports", auth, function (req, res, next) {
    Customer.findById({ _id: req.user }).then(function (c) {
        console.log(c.healthReports);
        if (c !== null) {
            if (c.healthReports.isLength != 1) {

                res.json({ "D": c.healthReports, "K": "Successfull" })
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


//delete report
router.post("/delete", auth, function (req, res, next) {

    console.log(req.body.id)
    Customer.update({ _id: req.user }, { $pull: { healthReports: { _id: req.body.id } } }).then(function (c) {
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
        res.json("Error: " + err)
    })
})


//register with an expert
router.post('/register', auth, function (req, res, next) {
    console.log(req.body.eid + req.body.type)

    
    payments.create({
        payerID:req.user,
        receiverID:req.body.eid,
        paymentamount:req.body.fee,
        reason:"Register"
    }).then(function(p){
        console.log("Payment Recorded")
    }).catch(err=>{
        console.log(err)
        res.send("Payment Not recorded")
    })

    chat.create({
        customerID:req.user,
        expertID:req.body.eid
    }).then(function (c) {
        console.log(c._id + " Chat room Created")
    }).catch(err => {
        console.log(err)
        res.send("fail on creating chat room")
    })

    if (req.body.type === "Dietician") {
        var k = {
            $set:
            {
                    rdietianID: req.body.eid
            }
        }

        Customer.findByIdAndUpdate({
            _id:req.user
        }, k).then(function (c) {
            console.log(c);
            res.json("successfull");
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });
    }
    else {
        var k = {
            $set:
            {

                    rtrainerID: req.body.eid
     
            }
        }

        Customer.findByIdAndUpdate({
            _id:req.user
        }, k).then(function (c) {
            console.log(c);
            res.json("successfull");
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });

    }
})

router.post('/unregister', auth, function (req, res, next) {
    console.log(req.body.eid + req.body.type)

    if (req.body.type === "Dietician") {
        var k = {
            $set:
            {rdietianID: undefined}
        }

        Customer.findByIdAndUpdate({
            _id:req.user
        }, k).then(function (c) {
            console.log(c);
            res.json("successfull");
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

        Customer.findByIdAndUpdate({
            _id:req.user
        }, k).then(function (c) {
            console.log(c);
            res.json("successfull");
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });

    }
})

module.exports = router