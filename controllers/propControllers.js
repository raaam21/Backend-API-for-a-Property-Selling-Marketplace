const asyncHandler = require("express-async-handler");
const pModel = require("../models/propertyModel.js");
const { default: mongoose } = require("mongoose");

// @desc Add new Properties
// @route Post /add
// @access private

const addProperty = asyncHandler(async(req,res)=>{
    console.log('Adding property');

    const {cost,pStatus,noRooms,location} = req.body;
    if (!cost || !pStatus || !noRooms || !location){
        res.status(400);
        throw new Error('All Fields Req.');
    }

    
    // const owner_ID = mongoose.Types.ObjectId.createFromHexString(req.user.user._id);
    // console.log(typeof(owner_ID));
    // console.log(req.user.user);
    const propModel = await pModel.create({
        cost,
        pStatus,
        noRooms,
        ownerID:mongoose.Types.ObjectId.createFromHexString(req.user.user._id),
        location,
    });

    console.log(propModel);
    res.status(200).json({propModel});
});

// @desc Get all Properties of Mine
// @route Get /
// @access private

const getAllProperty = asyncHandler(async(req,res)=>{
    console.log('All property');
    const properties = await pModel.find({ownerID:req.user.user._id});
    res.status(200).json({properties});
});



// @desc Delete Properties
// @route Delete /:id
// @access private

const deleteProperty = asyncHandler(async(req,res)=>{
    
    const property = await pModel.findById(req.params.id);
    console.log(property);
    if (!property){
        res.status(400).json({"message":"Property Not Found!"});
    }
    if(property.ownerID != req.user.user._id){
        res.status(500).json({"message":"Unauthorized access"});
    }
    else{
    await pModel.deleteOne({_id:req.params.id});
    res.status(200).json({"message":"Property Deleted!"});
    res.status(200);
    } 
});


// @desc Update Properties
// @route Patch /:id
// @access private

const updateProperty = asyncHandler(async(req,res)=>{
    console.log('Updating property');
    const property = await pModel.findById(req.params.id);
    console.log(property);
    if(property.ownerID != req.user.user._id){
        res.status(500);
        throw new Error("Unauthorized Access");
    };

    const updatedProperty = await pModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedProperty);
});

// @desc Get Search Properties
// @route Get /search
// @access private

const searchProperty = asyncHandler(async(req,res)=>{
    const {location,noRooms,minPrice,maxPrice} = req.query;
    var mnP=0;
    var mxP=Infinity;
    const filtersApplied = {};

    if (location){
        filtersApplied.location={$regex : location , $options :'i'};
    }

    if (noRooms){
        filtersApplied.noRooms={$gte: parseFloat(noRooms)};
    }

    if (minPrice !== undefined && !isNaN(minPrice)) {
        mnP = parseFloat(minPrice);
    }
    if (maxPrice !== undefined && !isNaN(maxPrice)){
        mxP=parseFloat(maxPrice);
    }

    filtersApplied.cost = {$gte: mnP, $lte:mxP};

    const property = await pModel.find(filtersApplied);
    console.log('Search');
    res.status(200).json({property});
});



module.exports = {searchProperty,addProperty,getAllProperty,deleteProperty,updateProperty};
