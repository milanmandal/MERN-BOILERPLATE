const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const authenticate = (req,res)=>{
    res.status(200)
    .json({
        isAuth:true,
        _id:req.user._id,
        username:req.user.username,
        firstname:req.user.firstname,
        lastname:req.user.lastname,
        email:req.user.email,
        role:req.user.role
    })
}

const register = (req,res)=>{
    const user = new User(req.body);
    //check username exist
    User.findOne({username:user.username},function(err,doc){
        if(doc){
            res.json({
                message:"Username already exists",
                registerSuccess:false
            });
        }
        else{
            //check email exist
            User.findOne({email:user.email},function(err,doc){
                if(doc){
                    res.json({
                        message:"Email already exists",
                        registerSuccess:false
                    });
                }
                else{
                    //hash password
                    bcrypt.genSalt(10,(err,salt)=>{
                        bcrypt.hash(user.password,salt,(err,hash)=>{
                            if(err) throw err;
                            user.password = hash;

                            //save user
                            user.save()
                            .then(()=>{
                                res.status(200)
                                .json({
                                    registerSuccess:true,
                                    message:"User registered successfully"
                                });
                            })
                            .catch(err=>{
                                res.status(400)
                                .json({
                                    registerSuccess:false,
                                    message:"Error"+err
                                });
                            })
                        })
                    })
                }
            })
        }
    })
}

const login = (req,res)=>{
    const {username,password} = req.body;
     //find the user
     User.findOne({username:username},function(err,user){
        if(!user)
        {
            res.json({
                message:"User not found",
                loginSuccess:false
            });
        }
        else{
            //compare password
            bcrypt.compare(password,user.password, function(err,isMatch){
                if(err) throw err;
                if(isMatch)
                {
                    //generate token
                    var token = jwt.sign(user._id.toHexString(),process.env.SECRET_KEY);
                    user.token = token;
                    user.save()
                    .then(
                        //store in cookie
                        res.cookie("user_auth",user.token).status(200)
                        .json({
                            message:"Login Successful",
                            loginSuccess:true,
                            token:token
                        })
                    )
                    .catch(err=>{
                        res.status(400)
                        .json({
                            loginSuccess:false,
                            message:"Error"+err
                        });
                    })
                }
                else{
                    res.json({
                        loginSuccess:false,
                        message:"Wrong password"
                    });
                }
            })
        }
    })
}

const logout = (req,res)=>{
    User.findOneAndUpdate({_id:req.user._id},{token:""},function(err,doc){
        if(err){
            res.json({
                logoutSuccess:false,
                message:"Error"+err
            });
        }
        res.clearCookie("user_auth").status(200)
        .send({
            logoutSuccess:true,
            message:"Logout Successful"
        })
    })
}

module.exports = {
    authenticate,
    register,
    login,
    logout
}

