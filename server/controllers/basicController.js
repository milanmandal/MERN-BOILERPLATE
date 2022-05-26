const Data = require('../models/basicModel');

const getData = (req,res)=>{
    Data.find({user:req.user._id},function(err,data){
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

            //check if user exists
            if(!req.user)
            {
                res.status(400)
                .json({
                    message:"User not found",
                    deleteSuccess:false,
                });
            }

            //check if user is the owner of the data
            if(req.user._id.toString() !== data.user.toString())
            {
                res.status(400)
                .json({
                    message:"User not authorized",
                    deleteSuccess:false,
                });
            }

            //delete data
            data.remove();
            res.status(200)
            .json({
                deleteSuccess:true,
                message:"Data deleted successfully"
            });
        }
    })
}


module.exports = {
    getData,
    pushData,
    updateData,
    deleteData
}
