var http = require('http');

http.createServer(function (req,res){
    res.write("i am student suresh gyan vihar university jaipur rajasthan computer application");
    res.end();
}).listen(2001)