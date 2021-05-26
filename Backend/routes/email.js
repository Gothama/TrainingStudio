const nodemailer = require('nodemailer');
const express = require('express')
const router = express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    pass: 'KeLaNiYa',
    user: 'studentdataschool@gmail.com' // naturally, replace both with your real credentials or an application-specific password
  }
});


router.post("/contact", function (req, res) {
  const mailOptions = {
    from: 'studentdataschool@gmail.com',
    to: 'albertlinconnr@gmail.com',
    subject: 'Contact',
    text: 'Question : ' + req.body.question + " Subject: " + req.body.subject + " Response Email: " + req.body.remail + " Name: " + req.body.name
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ "status": "Unsuccessfull" })
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ 'Email sent: ': info.response, "status": "Okay" })
    }
  })
})


router.post("/accountupdated", function (req, res) {
  const mailOptions = {
    from: 'studentdataschool@gmail.com',
    to: 'albertlinconnr@gmail.com',
    subject: 'Account Details Updated',
    text: "Your Personal Details of your Account is updated Successfully"
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ "status": "Unsuccessfull" })
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ 'Email sent: ': info.response, "status": "Okay" })
    }
  })
})


module.exports = router