const express = require("express");
const connectDb = require("./config/dbConnection.js");
const dotenv=require('dotenv').config();

const app = express();
const port = 5000;
connectDb();

app.use(express.json());

app.use('/api/properties',require("./routes/propRouter.js"));

app.use('/api/user',require("./routes/userRouter.js"));

app.listen(port,()=>{
    console.log('Server Up!');
})