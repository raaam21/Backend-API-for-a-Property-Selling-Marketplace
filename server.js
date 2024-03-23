
const express = require("express");
const pModel = require("./models/propertyModel.js");
const connectDb = require("./config/dbConnection.js");
const asyncHandler = require("express-async-handler");


const app = express();
const port = 5000;
connectDb();

app.use(express.json());

app.post('/add',asyncHandler(async(req,res)=>{
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
}));

app.get('/',(req,res)=>{
    console.log('All property');
    res.json({message : "Hi"});
    res.status(200);
});

app.patch('/update',(req,res)=>{
    console.log('Updating property');
    res.status(200);
});

app.delete('/del',(req,res)=>{
    console.log('Deleting property');
    res.status(200);
});

app.listen(port,()=>{
    console.log('Server Up!');
})