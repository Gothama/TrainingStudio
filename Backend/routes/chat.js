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

router.post("/addmessage" , function(req,res){
    var k = {
        $push:
        {
            messages:[
                {
                             message:req.body.message,
                            author:req.body.author   
                }
            ]
        }
    }

    chat.findByIdAndUpdate({ _id: req.body.room }
        , k).then(function (c) {
            console.log(c);
            res.json({"success" : true});
        }).catch(err => {
            console.log(err)
            res.send('fail' + err);
        });
})

router.post("/getmessages", function (req, res) {
    chat.findById({ _id: req.body.room }).then(function (c) {
        console.log(c.messages);
        if (c !== null) {
            if (c.messages.isLength != 1) {
                res.json({ "D": c.messages, "K": "Successfull" })
            }
            else {
                res.json({ "k": "Unsuccessfull" })
            }
        }
        else {
            res.json({ "k": "No messages" })
        }
    }).catch(err => {
        res.json({ "k": "Error" })
    })
})



module.exports = router