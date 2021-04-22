const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
const {check, validationResult} = require("express-validator")

//signUp router
router.post("/ncustomer",
[
    check('password' , "Password is required").not().isEmpty(),
    check('username', "username is required").not().isEmpty()
],
    function(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({
                success:false,
                errors:errors.array()
            });
        }
        else{
            const customer = new Customer({
                credentials:{username:req.body.username,
                password:req.body.password}
            })
            Customer.create(customer).then(function(c){
                console.log(c)
                res.json("successfull");
            }).catch(err=>{
                console.log(err)
                res.send("fail")
            })
        }
        
    }
)

//signIn router
router.post('/fcustomer', function(req, res, next){

    Customer.findOne({
                        credentials:{username:req.body.username,
                        password:req.body.password}
                    })
                    .then(function(c){
                            console.log(c);
                            if(c!==null){
                                console.log("Successfull");
                                res.send(c)
                            }
                            else{
                                res.send('fail')
                            }
                        }).catch(err=>{
                                res.send('error')
                        })
})

//add details of the customer
router.put('/addDetails', 
    [
    check('fname' , "first Name is required").not().isEmpty(),
    check('lname' , "last name is required").not().isEmpty(),
    check('fname' , "first Name should be letters").isString(),
    check('lname' , "last name is required").isString(),
    check('dob' , "Date of birth is required").not().isEmpty(),
    check('dob' , "Date of birth should be a date").isDate(),
    check('email' , "email is required").not().isEmpty(),
    check('email' , "Email should be in correct format").isEmail(),
    check('phoneNumber', "Phone number is required").not().isEmpty(),
    check('phoneNumber' , "Phone Number should be in correct format").isMobilePhone(),
    ],
    function(req, res, next){

    var k = {$set: 
            {
                name:{
                    fName: req.body.fname,
                    lName: req.body.lname
                },
                dob: req.body.dob,
                email: req.body.email,
                gender: req.body.gender,
                bloodGroup:req.body.bloodGroup,
                phoneNumber:req.body.phoneNumber
            }
        }
 
     Customer.findOneAndUpdate({
                                    credentials:{username:req.body.username,
                                    password:req.body.password
                                }
                            }, k ).then(function(c){
                                    console.log(req.body);
                                    res.json(c);
                            }).catch(err=>{
                                console.log(err)
                                res.send('fail' + err);
                            });
   })

   //add sugar level
   router.put('/addsugarLevel', 
   [
    check('level' , "sugarLevel is required").not().isEmpty(),
    check('level' , "sugarLevel should be numeric").isNumeric(),
    ],
    function(req, res, next){
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({
                success:false,
                errors:errors.array()
            });
        }
        else
    {

    var k = {$push: 
            {
                sugarLevel:[{
                    level:req.body.level
                }]
            }
        }
 
     Customer.findOneAndUpdate({
                                    credentials:{username:req.body.username,
                                    password:req.body.password
                                }
                            }, k ).then(function(c){
                                    console.log(c);
                                    res.json(c);
                            }).catch(err=>{
                                console.log(err)
                                res.send('fail' + err);
                            });
   }})


   //get workout schedules
router.post('/getschedules', function(req, res, next){

    Customer.findOne({
                        credentials:{username:req.body.username,
                        password:req.body.password}
                    })
                    .then(function(c){
                           // console.log(c);
                            if(c!==null){
                                console.log("Successfull");
                                res.json(c._id);
                            }
                            else{
                                res.send('fail')
                            }
                        }).catch(err=>{
                                res.send('error')
                        })
})



module.exports = router