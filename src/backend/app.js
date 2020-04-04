const http = require("http");
http.createServer((req,res)=>{
    console.log('INCOMMİNG');
    console.log(req.method,req.url);
    res.end('success');
});
server.listen(5000);
