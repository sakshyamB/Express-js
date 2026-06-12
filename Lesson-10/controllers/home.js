const userStore = [];

const Hotel = require('../models/hotelModel');

exports.Login = (req,res,next)=>{
res.render('Login', {isloggedin : false});
}

exports.Home = (req,res,next)=>{
    console.log(req.body);
    isloggedin = req.session.isloggedin;
    res.render('Home', {isloggedin: isloggedin});
}

exports.AddHome = (req, res, next)=>{
    res.render('AddHome', {isloggedin: req.session.isloggedin});
}

exports.ShowHome = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.render("ShowHome", { hotels, isloggedin: req.session.isloggedin });

    } catch (err) {
        console.log(err);
        res.send("Error fetching hotels");
    }
};

exports.Submit = async (req, res) => {
    try {
        await Hotel.create({
            name: req.body.name,
            location: req.body.location,
            price: req.body.price,
            rating: req.body.rating,
            image: req.body.image
        });

        res.redirect("/ShowHome", {isloggedin: req.session.isloggedin});

    } catch (err) {
        console.log(err);
        res.send("Error adding hotel");
    }
};

exports.DeleteHome = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.redirect("/ShowHome", {isloggedin: req.session.isloggedin});

    } catch (err) {
        console.log(err);
    }
};

exports.EditHome = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.render("Edit", { hotel, isloggedin: req.session.isloggedin });

    } catch (err) {
        console.log(err);
    }
};

exports.UpdateHome = async (req, res) => {
    try {
        await Hotel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            location: req.body.location,
            price: req.body.price,
            rating: req.body.rating
        });

        res.redirect("/ShowHome", {isloggedin: req.session.isloggedin});

    } catch (err) {
        console.log(err);
    }
};

exports.PostLogin = (req,res,next) =>{
  req.session.isloggedin = true;
  console.log(req);
  res.redirect('/');
}