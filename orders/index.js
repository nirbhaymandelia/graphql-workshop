const express = require('express');
const cors = require('cors');
require('dotenv').config();
const orderRoutes = require('./routes');
const mongoose = require('mongoose');

const port = process.env.ORDER_SERVICE_PORT || 3333;
const url = process.env.ORDER_DB_URL || 'mongodb://localhost:27017/workshop-order-db';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(err){
        console.error('---Error connecting to order db');
    }else{
        console.log('---Successfully connected to order db');
    }
})
const app = express();
app.use(cors());

app.use(express.json());

app.use('/', orderRoutes);

app.listen(port, () => {
    console.log(`Order service is listening on port ${port}`);
});
