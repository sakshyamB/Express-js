// core module
const http = require('http');
// external module
const express = require('express');
// third party module
const userrequesthandler = require('./user');
const app = express();
app.use((req,res,next)=>{
    console.log("Middleware first", req.url, req.method);
    next();
})
app.use((req,res,next)=>{
    console.log("Middleware second", req.url, req.method);
    res.send("<p> you are welcome to express.js </p>");
})


const server = http.createServer(app);

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})