const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxLength:30
    },
    lastname:{
        type:String,
        required:true,
        maxLength:30
    },
    username:{
        type:String,
        maxLength:15,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    role:{
        type:String,
        default:0
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }

})

const User = mongoose.model('User',userSchema);
module.exports=User;