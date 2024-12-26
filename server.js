const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'https://psrvlog-frondend.vercel.app/';
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());

app.use(express.json());

const uri = 'mongodb+srv://hasswije5:hasswije5@cluster0.yf0ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async()=>{
    try {
        
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        

    } catch (error) {
        console.log('MongoDB error: ',error);
        
    }
};

connect();


const server = app.listen(port,host,()=>{
    console.log(`Node server is listnening to ${server.address().port}`)
});

app.use('/api',router);