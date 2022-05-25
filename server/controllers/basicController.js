const Goal = require('../models/goal');
const User = require('../models/userModel');

const getData = (req,res)=>{
    Goal.findOne({user:req.body.user},function(err,goal){
        if(err){
            res.status(400)
            .json({
                message:"Error",
                getSuccess:false,
                goal:null
            });
        }
        else{
            res.status(200)
            .json({
                getSuccess:true,
                message:"Data retrieved successfully",
                goal:goal
            });
        }
    })
}

const pushData = (req,res)=>{
    Goal.findOne({user:req.body.user},function(err,goal){
        if(err){
            res.status(400)
            .json({
                message:"Error" +err,
                pushSuccess:false,
            });
        }
        else{
            const goal = new Goal(req.body);
            goal.save()
            .then(()=>{
                res.status(200)
                .json({
                    pushSuccess:true,
                    message:"Data pushed successfully"
                });
            })
            .catch(err=>{
                res.status(400)
                .json({
                    pushSuccess:false,
                    message:"Error"+err
                });
            })
        }
    })
}

const updateData = (req,res)=>{
    Goal.findOneAndUpdate({_id:req.body._id},req.body,function(err,goal){
        if(err){
            res.status(400)
            .json({
                message:"Error"+err,
                updateSuccess:false,
                goal:null
            });
        }
        else{
            res.status(200)
            .json({
                updateSuccess:true,
                message:"Data updated successfully",
                goal:goal
            });
        }
    })
}

const deleteData = (req,res)=>{
    Goal.findById(req.body._id,function(err,goal){
        if(err || !goal){
            res.status(400)
            .json({
                message:"Error"+err,
                deleteSuccess:false,
            });
        }
        else{
            if(!req.user)
            {
                res.status(400)
                .json({
                    message:"User not found",
                    deleteSuccess:false,
                });
            }

            if(req.user._id.toString() !== goal.user.toString())
            {
                res.status(400)
                .json({
                    message:"User not authorized",
                    deleteSuccess:false,
                });
            }

            goal.remove();
            res.status(200)
            .json({
                deleteSuccess:true,
                message:"Data deleted successfully"
            });
        }
    })
}


mosule.exports = {
    getData,
    pushData,
    updateData,
    deleteData
}
