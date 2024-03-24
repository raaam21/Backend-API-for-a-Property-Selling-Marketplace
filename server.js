const express = require("express");
const connectDb = require("./config/dbConnection.js");

const app = express();
const port = 5000;
connectDb();

app.use(express.json());

app.use('/api/properties',require("./routes/router.js"));

app.listen(port,()=>{
    console.log('Server Up!');
})