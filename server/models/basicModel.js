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
    category:[{
        data1:{
            type:String
        },
        data2:{
            type:String
        }
    }]
})

module.exports = mongoose.model('Goal',goalSchema);