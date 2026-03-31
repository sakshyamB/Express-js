const express = require('express');
const path = require('path');
const userRouter = express();

userRouter.get('/', (req,res,next)=>{
    res.render('Home');
})

module.exports = userRouter;