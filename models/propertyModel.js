import mongoose from "mongoose";

const propertyModel = mongoose.Schema({
    pId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    location:{
        type:String,
        required:[true,"Add "]
    },
    noRooms:{
        type:Number,
        required:[true,"Add No of Rooms"]
    },
    cost:{
        type:Number,
        required:[true,"Add Cost"]
    },
    owner:{
        type:String,
        required:[true,"Add Owner"]
    },
    pStatus:{
        type:Boolean,
        required:[true,"Add Status"]
    },
},{
    timestamps : true,
});

module.exports = mongoose.model("Property",propertyModel)