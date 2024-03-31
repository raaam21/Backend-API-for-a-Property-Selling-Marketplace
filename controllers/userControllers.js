const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const pModel = require("../models/propertyModel");



const allUser = asyncHandler(async(req,res)=>{
    const users = await User.find();
    res.status(200).json(users);
});


const buyProperty = asyncHandler(async(req,res)=>{
    const {buyerId}= req.body;
    const propertyId = req.params.id;

    const property = await pModel.findById(propertyId);

    if(!property){
        res.status(400);
        throw new Error("Property Does not Exist !");
    }
    if(!property.buyer){
        res.status(400);
        throw new Error("User is not registered as Buyer!");
    }


    if(!property.buyer){
        res.status(400);
        throw new Error("User is not registered as Buyer!");
    }


    if(property.ownerID != req.user.user._id){
        res.status(400);
        throw new Error("Unauthorized Attempt!");
    }

    if(property.ownerID == buyerId){
        res.status(400);
        throw new Error("Invalid Transaction");
    }

    const updatedProp = await pModel.findByIdAndUpdate(
        req.params.id,
        {ownerID:req.body.buyerId},
        {new:true}
    );
    
    res.status(200).json(updatedProp);
});


module.exports = {buyProperty,allUser};





