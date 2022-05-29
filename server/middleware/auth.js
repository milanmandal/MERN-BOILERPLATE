const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const auth =  (req,res,next)=>{
    
    const token = req.header("authorization");
    jwt.verify(token,process.env.SECRET_KEY, function(err, decode){
        User.findOne({"_id":decode,"token":token}, function(err,user){
            if(err) throw err;
            if(!user){
                res.json({
                    isAuth:false,
                    error:true
                });
            } 
            else{
                req.token = token;
                req.user = user
                next();
            }
        }) 
    })
}

module.exports = auth;