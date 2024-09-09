const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req,res){
    res.send("<h1>Welcome Dwija</h1>");
});

app.get('/htmlfile', (req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

port = process.env.port || 3000;
app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})