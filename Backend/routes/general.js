const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const customer = require('../models/customer');
const crypto = require('crypto')
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        pass: 'KeLaNiYa',
        user: 'studentdataschool@gmail.com' // naturally, replace both with your real credentials or an application-specific password
    }
});


router.post("/reset-password", function (req, res) {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        console.log(req.body.email)
        customer.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    Trainer.findOne({ email: req.body.email }).then(user => {
                        if(!user){
                            return res.json("Invalid Password")
                        }
                        user.resetToken = token
                        user.expireToken = Date.now() + 3600000
                        user.save().then((result) => {
                            const mailOptions = {
                                from: 'studentdataschool@gmail.com',
                                to: 'albertlinconnr@gmail.com',
                                subject: 'Reset Password',
                                text: "Your Reset password token is: " + token
                            };

                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                    res.json({ "status": "Unsuccessfull" })
                                } else {
                                    console.log('Email sent: ' + info.response);
                                    res.json({ 'Email sent: ': info.response, "status": "Okay", "token": token })
                                }
                            })

                        })

                    })
                }
                
                user.resetToken = token
                user.expireToken = Date.now() + 3600000
                user.save().then((result) => {
                    if(!result){
                        res.json("unsuccessfull")
                    }
                    
                    const mailOptions = {
                        from: 'studentdataschool@gmail.com',
                        to: 'albertlinconnr@gmail.com',
                        subject: 'Reset Password',
                        html:`
                        <p>You requested for password reset</p>
                        <h5>click in this <a href="http://localhost:3000/newpassword/${token}">link</a> to reset password</h5>
                        `
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                            res.json({ "status": "Unsuccessfull" })
                        } else {
                            console.log('Email sent: ' + info.response);
                            res.json({ 'Email sent: ': info.response, "status": "Okay", "token": token })
                        }
                    })
                
    
                })

            })
    })
})

router.post('/new-password',(req,res)=>{
    const newPassword = req.body.password
    const sentToken = req.body.token
    customer.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){



            return res.json({error:"Try again session expired"})
        }

           user.credentials.password = newPassword
           user.resetToken = undefined
           user.expireToken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"Okay"})
           })
    
    }).catch(err=>{
        console.log(err)
    })
})

//get the details of a customer
router.post('/customerdetails' ,function(req,res){
    customer.findById({_id:req.body.id}).then(function (c) {
        res.json(c)
}).catch(err => {
    console.log(err)
    res.json(err)
})
 })



module.exports = router