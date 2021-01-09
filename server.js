/*var http=require('http');
var fs = require('fs');

var server =http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj={
        name:'rr',
        job:'no',
        age:29,
    }
    res.end(JSON.stringify(myObj));
    });
const port = process.env
server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
*/

const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.get('/', (req, res) => {
    res.send('help');
})