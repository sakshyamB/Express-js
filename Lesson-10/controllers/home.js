const userStore = [];

const Hotel = require('../models/hotelModel');

exports.Login = (req,res,next)=>{
res.render('Login');
}

exports.Home = (req,res,next)=>{
    console.log(req.body);
    const userinfo ={
        username : req.body.username,
        password : req.body.password,
    }
    userStore.push(userinfo);
    const lastUser = userStore[userStore.length - 1]
    res.render('Home', {username: lastUser.username});
}

exports.AddHome = (req, res, next)=>{
    res.render('AddHome');
}

exports.ShowHome = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.render("ShowHome", { hotels });

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

        res.redirect("/ShowHome");

    } catch (err) {
        console.log(err);
        res.send("Error adding hotel");
    }
};

exports.DeleteHome = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.redirect("/ShowHome");

    } catch (err) {
        console.log(err);
    }
};

exports.EditHome = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.render("Edit", { hotel });

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

        res.redirect("/ShowHome");

    } catch (err) {
        console.log(err);
    }
};