const jwt = require('jsonwebtoken');
const config = "supersecret";

module.exports = function(req, res,next)
{
    const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
    //get token from the header
    //const token = req.header("token");
    console.log(token)
    //check if there is no token
    if(token == null){
        return res.json({msg:"no Token , Authorization denied"});
    }
    try{
        const decoded = jwt.verify(token , "supersecret");
        console.log(decoded.user.id)
        req.user = decoded.user.id;
        
        next();
    }
    catch(err){
        res.status(401).json({msg:"Token is not valid"});
    }
}