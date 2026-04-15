const express = require('express')
const path = require('path')
const hostRouter = express.Router();

hostRouter.get('/AddHome', (req,res,next)=>{
    res.render('AddHome');
})

const HotelDetail = [];
hostRouter.post('/Submit', (req,res,next)=>{
    console.log(req.body);
    HotelDetail.push(req.body);
    res.render('Submit');
})

module.exports = {hostRouter, HotelDetail}