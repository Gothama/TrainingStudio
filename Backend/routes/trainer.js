const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')
const {check, validationResult} = require("express-validator")

//signUp router
router.post("/ntrainer",
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
            const trainer = new Trainer({
                credentials:{username:req.body.username,
                password:req.body.password}
            })
            Trainer.create(trainer).then(function(c){
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
router.post('/ftrainer', function(req, res, next){

    Trainer.findOne({
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

//add details of the trainer
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
    check('fee', "Fee is required").not().isEmpty(),
    check('fee', "Fee should be in a currency").isNumeric()
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
                profilePhotoLink:req.body.profilePhotoLink,
                phoneNumber:req.body.phoneNumber,
                fee:req.body.fee
            }
        }
 
     Trainer.findOneAndUpdate({
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

   //add qualifications of the trainer
   router.put('/addQualification', 
   [
    check('issuedDate' , "Issued Date is required").not().isEmpty(),
    check('issuedDate' , "Issued Date should be a date").isDate(),
    check('qualificationID' , "qualificationID is required").not().isEmpty(),
    check("linkTo", "linkTo should be a link").isURL(),
    check("title", "title is required").not().isEmpty(),
    check("issuedBy", "Issued By is required").not().isEmpty(),
    check("description", "description is required").not().isEmpty(),
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
                qualifications:[{
                    issuedDate:req.body.issuedDate,
                    qualificationID:req.body.qualificationID,
                    linkTo:req.body.linkTo,
                    title:req.body.title,
                    issuedBy:req.body.issuedBy,
                    description:req.body.description,
                }]
            }
        }

     Trainer.findOneAndUpdate({
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

   

module.exports = router