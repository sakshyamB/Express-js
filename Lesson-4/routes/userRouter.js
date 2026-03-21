const path = require('path');
const express = require('express');
const userRouter = express.Router();
const {username} = require('./hostRouter');

userRouter.get('/', (req,res,next)=>{
    console.log(req.url, req.method);
    console.log(username);
    res.render ('welcome', {username})
})

module.exports = userRouter;