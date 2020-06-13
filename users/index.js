const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes');
const mongoose = require('mongoose');

const port = process.env.USER_SERVICE_PORT || 3000;
const url = process.env.USER_DB_URL || 'mongodb://localhost:27017/workshop-user-db';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(err){
        console.error('---Error connecting to user db');
    }else{
        console.log('---Successfully connected to user db');
    }
})
const app = express();
app.use(cors());

app.use(express.json());

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`User service is listening on port ${port}`);
});
