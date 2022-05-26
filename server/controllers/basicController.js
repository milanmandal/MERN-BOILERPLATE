const Data = require('../models/basicModel');

const getData = (req,res)=>{
    Data.findOne({user:req.body.user},function(err,data){
        if(err){
            res.status(400)
            .json({
                message:"Error",
                getSuccess:false,
                data:null
            });
        }
        else{
            res.status(200)
            .json({
                getSuccess:true,
                message:"Data retrieved successfully",
                data:data
            });
        }
    })
}

const pushData = (req,res)=>{
    Data.findOne({user:req.body.user},function(err,data){
        if(err){
            res.status(400)
            .json({
                message:"Error" +err,
                pushSuccess:false,
            });
        }
        else{
            const data = new Data(req.body);
            data.save()
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
    Data.findOneAndUpdate({_id:req.body._id},req.body,function(err,data){
        if(err){
            res.status(400)
            .json({
                message:"Error"+err,
                updateSuccess:false,
                data:null
            });
        }
        else{
            res.status(200)
            .json({
                updateSuccess:true,
                message:"Data updated successfully",
                data:data
            });
        }
    })
}

const deleteData = (req,res)=>{
    Data.findById(req.body._id,function(err,data){
        if(err || !data){
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

            if(req.user._id.toString() !== data.user.toString())
            {
                res.status(400)
                .json({
                    message:"User not authorized",
                    deleteSuccess:false,
                });
            }

            data.remove();
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
