const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number
    },
    role:{
        type:Boolean,
        // True -> Buyer , False-> Sellere
        required:true

    }
},{
    timestamps:true
});

module.exports = mongoose.model('User',userModel);