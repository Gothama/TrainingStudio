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

module.exports = router