const asyncHandler = require("express-async-handler");
const pModel = require("../models/propertyModel.js");

// @desc Add new Properties
// @route Post /add
// @access private

const addProperty = asyncHandler(async(req,res)=>{
    console.log('Adding property');

    const {cost,owner,pStatus,noRooms,location} = req.body;
    if (!cost || !owner || !pStatus || !noRooms || !location){
        res.status(400);
        throw new Error('All Fields Req.');
    }

    const propModel = await pModel.create({
        cost,
        owner,
        pStatus,
        noRooms,
        location
    });

    console.log(propModel);
    res.status(200).json({propModel});
});



const getProperty = asyncHandler(async(req,res)=>{
    console.log('All property');
    const properties = await pModel.find();
    res.status(200).json({properties});
})

const deleteProperty = asyncHandler(async(req,res)=>{
    
    const property = await pModel.findById(req.params.id);
    // console.log(property);
    if (!property){
        res.status(400).json({"message":"Property Not Found!"});
    }else{
    await pModel.deleteOne({_id:req.params.id});
    res.status(200).json({"message":"Contact Deleted!"});
    } 
});


module.exports = {addProperty,getProperty,deleteProperty};