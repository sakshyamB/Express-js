const userStore = [];

const HotelModel = require('../models/hotelModel');

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
        const hotels = await HotelModel.getAllHotels();
        res.render("ShowHome", { hotels });
    } catch (err) {
        console.log(err);
        res.send("Error fetching hotels");
    }
};

exports.Submit = async (req, res) => {

    const newHotel = {
        name: req.body.name,
        location: req.body.location,
        price: Number(req.body.price),
        rating: Number(req.body.rating)
    };

    await HotelModel.addHotel(newHotel);

    res.redirect("/ShowHome");
};

exports.DeleteHome = async (req, res) => {
    try {
        const id = req.params.id;

        await HotelModel.deleteHotel(id);

        res.redirect("/ShowHome");

    } catch (err) {
        console.log(err);
        res.send("Error deleting hotel");
    }
};

exports.EditHome = async (req, res) => {
    try {
        const id = req.params.id;
        const hotel = await HotelModel.getHotelById(id);

        res.render("Edit", { hotel });

    } catch (err) {
        console.log(err);
        res.send("Error loading edit page");
    }
};

exports.UpdateHome = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedHotel = {
            name: req.body.name,
            location: req.body.location,
            price: req.body.price,
            rating: req.body.rating
        };

        await HotelModel.updateHotel(id, updatedHotel);

        res.redirect("/ShowHome");

    } catch (err) {
        console.log(err);
        res.send("Error updating hotel");
    }
};