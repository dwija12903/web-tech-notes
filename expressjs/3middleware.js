const express = require('express');
const path = require('path');

const members = require('./members.js');
members.hello();
const app = express();

//middleware fucntion
//whenever request is made,middleware function is called
const logger = (req,res,next) => {
    console.log('LOgged');
    console.log(`host: ${req.hostname}`);
    next();
}

//Initialize middleware 
app.use(logger);