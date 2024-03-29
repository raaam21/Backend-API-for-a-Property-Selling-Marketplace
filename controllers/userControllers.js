const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Property = require("../models/propertyModel");

const allUser = asyncHandler(async(req,res)=>{
    const users = await User.find();
    res.status(200).json(users);
});


const buyProperty = asyncHandler(async(req,res)=>{
    const {sellerId,propertyId}= req.body;
    const buyerId =  req.user.user._id;
    if(buyerId == sellerId){
        res.status(400)
        throw new Error("Invalid Transaction");
    }

    if(!propertyId || !sellerId){
        res.status(400);
        throw new Error("Not Enough Details!");
    }

    const property = await Property.find(propertyId);
    if(!property){
        res.status(400).json({message:"Property Does not Exist!"});
    }

    if(property.ownerID.toString() !== sellerId){
        res.status(400);
        throw new Error("Unauthorized Attempt");
    } 

    console.log(property);
    const updatedProperty = await pModel.findByIdAndUpdate(
        req.params.id,
        buyerId,
        {new:true}
    );
    console.log(updatedProperty);

});


module.exports = {buyProperty,allUser};





