//to set file path as static 
const express = require('express');
const path = require('path');
const app = express();

//Static is a builtin middleware 
var logger = express.static(path.join(__dirname,'public'));
app.use(logger);

//way2
app.use(express.static(path.join(__dirname,'public')));
//It sets '/' root to the all file path specified in the public

app.listen(3000, function(){    
    console.log("Server is running on port 3000");
});