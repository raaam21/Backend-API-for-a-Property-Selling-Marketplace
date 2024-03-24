const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async(req,res)=>{
    const {username,password,email,phoneNo,role} = req.body;

    if (!username || !password || !email || !role){
        res.status(400);
        throw new Error('All Fields Required');
    }

    const user = await User.findOne({email});

    if(user){
        res.status(400);
        throw new Error('Email Already Registered');
    }

    const hashedPass = await bcrypt.hash(password,10);
    const newUser = await User.create({
        name:username,
        password:hashedPass,
        email,
        phoneNo,
        role
    });
    res.status(200).json(newUser);
});


const loginUser =  asyncHandler(async(req,res)=>{
    const{email,password} = req.body;

    const user = await User.findOne({email});

    if (user && bcrypt.compare(password,user.password)){
        res.status(200).json({message:"Login Done"});
    }else{
        res.status(400);
        throw new Error('Wrong Credentials');
    }
});


const allUser = asyncHandler(async(req,res)=>{
    const users = await User.find();
    res.status(200).json(users);
});

module.exports = {registerUser,allUser,loginUser};