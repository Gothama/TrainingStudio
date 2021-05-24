const express = require('express')
const router = express.Router()
const Trainer = require('../models/trainer')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const customer = require('../models/customer');
const crypto = require('crypto')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        pass: 'KeLaNiYa',
        user: 'studentdataschool@gmail.com' // naturally, replace both with your real credentials or an application-specific password
    }
});


router.get("/reset-password", function (req, res) {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        customer.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    Trainer.findOne({ email: req.body.email }).then(user => {
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
    })
})





module.exports = router