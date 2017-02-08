import http from 'http';
import express from 'express';

const app = new express();
/*
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server Ended');    
}).listen(3005, '127.0.0.1');*/

//console.log('Server running at http://127.0.0.1:3005/');

app.listen(3005, () => {
  console.log('listening on 3005')
})

app.get('/', (req, res) => {
    res.send('Hello World2')
})