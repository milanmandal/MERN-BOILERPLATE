const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    text:{
        type:String,
        required:true,
    },
    category1:[{
        data1:{
            type:String
        },
        data2:{
            type:String
        }

    }],
    category2:{
        type:Array[String] =[{
            data:{
                type:String,
            }
        }]
    }
})

module.exports = mongoose.model('Goal',goalSchema);