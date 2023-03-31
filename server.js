const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request made from browser to server');
    res.end('hello world');

})

server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');
})