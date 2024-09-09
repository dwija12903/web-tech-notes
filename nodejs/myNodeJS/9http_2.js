const http = require('http');
const fs = require('fs');
const path = require('path');
// to perform task such as routing using node.js only 

var server = http.createServer(function(req,res){
    if (req.url=='/'){
        res.write("Welcome to to Home Page");
        res.end();
    }
    if (req.url='/about'){
        fs.readFile(
            path.normalize(__dirname + 'learning node//about.html'),
            function (err,data){
                if (err) throw err;
                res.writeHead (200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
        });
    }
});

server.listen(3000,function(){
    console.log("Server is running on port 3000");
});
// This is a simple routing example using node.js only.
