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

exports.ShowHome = (req, res) => {
    HotelModel.getAllHotels((err, results) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching data");
        }
        res.render('ShowHome', { hotels: results });
    });
};

exports.Submit = (req,res,next)=>{
   const data = req.body;

    HotelModel.addHotel(data, (err) => {
        if (err) {
            console.log(err);
            return res.send("Insert Error");
        }

        res.redirect('/ShowHome');
})
}

exports.DeleteHome = (req,res,next)=>{
    const id = req.params.id;

    HotelModel.deleteHotel(id, (err) => {
        if (err) {
            console.log(err);
            return res.send("Delete Error");
        }

        res.redirect('/ShowHome');
    })
}

exports.EditHome = (req,res,next)=> {
    const id = req.params.id;

    HotelModel.getHotelById(id, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error");
        }

        res.render('Edit', { hotel: result[0] });
    });
}

exports.UpdateHome = (req, res, next) => {
      const id = req.params.id;
    const data = req.body;

    HotelModel.updateHotel(data, id, (err) => {
        if (err) {
            console.log(err);
            return res.send("Update Error");
        }

        res.redirect('/ShowHome');
    })};