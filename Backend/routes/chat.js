const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth");
const chat = require('../models/chat');


router.post("/chatroomidc", auth , function (req, res) {
    console.log(req.user);
    chat.findOne({customerID:req.user}).then(function (c) {
        console.log(c);
        res.json(c._id);
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });
})

router.post("/chatroomidt", auth , function (req, res) {
    console.log(req.user);
    chat.findOne({expertID:req.user, customerID:req.body.customerID}).then(function (c) {
        console.log(c);
        res.send(c._id);
    }).catch(err => {
        console.log(err)
        res.send('fail' + err);
    });
})




module.exports = router