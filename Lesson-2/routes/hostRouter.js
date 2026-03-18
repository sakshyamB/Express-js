const express = require('express');
const path = require('path');
const hostRouter = express.Router();

hostRouter.get('/host/form', (req,res,next)=>{
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, '../views/form.html'));
})

hostRouter.post('/host/submit', (req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../views/submit.html'));
})

module.exports = hostRouter;