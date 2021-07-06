const express = require('express')
const router = express.Router()
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post("/send", function (req, res, next) {
client.messages
  .create({
     body: req.body.message,
     from: '+17204106418',
     to: '+94715631088'
   })
  .then(function(message ){
      res.send(message)
  }).catch(err=>{
    res.send('fail' + err);
  });

})
  





module.exports = router