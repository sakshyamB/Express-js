const Home = require('../models/home');
exports.AddHome =(req,res,next)=>{
    res.render('AddHome');
}

exports.Submit = (req,res,next)=>{
    console.log(req.body);
    const home = new Home(req.body.name, req.body.location, req.body.price, req.body.rating)
    home.save();
    res.render('Submit');
}

exports.Home = (req,res,next)=>{
    res.render('Home');
}

exports.ShowHome = (req,res,next)=>{
    const HotelDetail = Home.fetchAll();
    res.render('ShowHome', {hotels: HotelDetail})
}

exports.NotFound = (req,res,next) =>{
    res.render('NotFound');
}
