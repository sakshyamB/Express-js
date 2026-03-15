const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req,res,next)=>{
    console.log(req.url, req.method);
    res.send(`<h1> Welcome to AirBnB </h1>
        <a href="/host/form"> Form fill-up </a>`);
})

module.exports = userRouter;