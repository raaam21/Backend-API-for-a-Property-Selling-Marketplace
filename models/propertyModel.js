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

module.exports = mongoose.model('pModel',propertyModel);