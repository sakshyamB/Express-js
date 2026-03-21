const express = require('express');
const path = require('path');
const hostRouter = express.Router();

hostRouter.get('/form', (req,res,next)=>{
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, '../views/form.html'));
})
const username = [];
hostRouter.post('/host/submit', (req,res,next)=>{
    console.log(req.body, req.body.name);
    username.push(req.body.name);
    res.sendFile(path.join(__dirname, '../views/submit.html'));
})

module.exports = { hostRouter, username};