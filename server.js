import express from 'express';
// import propertyModel from './models';
import connectDb from './config/dbConnection.js';

const app = express();
const port = 5000;
connectDb();


app.post('/add',(req,res)=>{
    console.log('Adding property');

    const {cost,owner,pStatus,noRooms} = req.body;
    if (!cost || !owner || !pStatus || !noRooms){
        res.status(400);

        throw new Error('All Fields Req.');
    }

    res.status(200);


});

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