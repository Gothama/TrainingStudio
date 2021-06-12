const express = require('express')
const Trainer = require('../models/trainer')
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
const customer = require('../models/customer');

const getCustomer =(req, res)=>{
    customer.find({_id:req.body.id}).then(function (c) {
            res.json(c)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
}

exports.getCustomer = getCustomer