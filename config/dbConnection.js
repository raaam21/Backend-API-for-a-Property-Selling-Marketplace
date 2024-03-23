
const mongoose = require("mongoose");
const CONNECTION_STRING = 'mongodb+srv://yoursram18:xYBNAhtNBmjMIbQZ@cluster0.vi9bia2.mongodb.net/'
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(CONNECTION_STRING);
        console.log(
            "DB connected:",
            connect.connection.host,
            connect.connection.name,
            );
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;