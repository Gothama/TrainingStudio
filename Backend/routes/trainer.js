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

module.exports = router