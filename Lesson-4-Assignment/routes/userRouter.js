const express = require('express');
const path = require('path');
const { HotelDetail } = require('./hostRouter');
const userRouter = express.Router();

userRouter.get('/', (req,res,next)=>{
    res.render('Home');
})

userRouter.get('/ShowHome', (req,res,next)=>{
    res.render('ShowHome', {hotels: HotelDetail})
})

module.exports = userRouter;