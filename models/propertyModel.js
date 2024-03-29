
const mongoose = require("mongoose");

const propertyModel = mongoose.Schema({
    location:{
        type:String,
        required:[true,"Add loc"]
    },
    noRooms:{
        type:Number,
        required:[true,"Add No of Rooms"]
    },
    cost:{
        type:Number,
        required:[true,"Add Cost"]
    },
    ownerID:{
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },
    pStatus:{
        type:Boolean,
        // true -> Available , False -> Sold Out
        required:[true,"Add Status"]
    },
},{
    timestamps : true,
});

module.exports = mongoose.model('pModel',propertyModel);