var express = require('express');

var app = express()
    .use(function(req,res){
        res.cookie('name','foo');
        res.end('Hello! Dwija 21BCP333');
})
.listen(8080);