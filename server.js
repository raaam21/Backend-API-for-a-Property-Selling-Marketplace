const express = require("express");
const connectDb = require("./config/dbConnection.js");
const {addProperty,getProperty, deleteProperty,updateProperty} = require("./controllers/propControllers.js")
const pModel = require("./models/propertyModel.js");
const {mongoose } = require("mongoose");
const expressAsyncHandler = require("express-async-handler");


const app = express();
const port = 5000;
connectDb();

app.use(express.json());

app.post('/add',addProperty);

app.get('/',getProperty);

app.delete('/:id',deleteProperty);

app.patch('/:id',updateProperty);



app.listen(port,()=>{
    console.log('Server Up!');
})