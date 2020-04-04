const http = require('http');
 
// create server gets two arguments from server after making request 
const server = http.createServer((req,res) => {
    
    console.log(`INCOMING request`)
    console.log(req.method,req.url);
    // console.log(req.url)
 
    // end
    res.end('Success!')
 
});
 
// listen is event listener for requests
// opens local server on machine 
server.listen(5000)
