const http = require('http');

var server = http.createServer(function(req,res){
    res.write("Hello Dwija");
    res.end();
});

server.listen(3000,function(){
    console.log("Server is running on port 3000");
});

