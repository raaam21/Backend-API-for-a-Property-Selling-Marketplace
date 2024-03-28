const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const tokenValidate = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("bearer")){
        token = authHeader.split(" ")[1];

        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded_user)=>{
            if(err){
                res.status(400);
                throw new Error("User Not Authorized");
            }

            req.user = decoded_user;
            next();
        });
        
    }
});

module.exports = {tokenValidate};