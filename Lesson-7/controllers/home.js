const HotelDetail = [];
const userStore = [];

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

exports.ShowHome = (req, res, next)=>{
    res.render('ShowHome', {hotels: HotelDetail});
}

exports.Submit = (req,res,next)=>{
    console.log(req.body);
    const newHotel = {
    id: HotelDetail.length + 1,
    name: req.body.name,
    location: req.body.location,
    price: req.body.price,
    rating: req.body.rating,
}

    HotelDetail.push(newHotel);
    res.redirect('Home');
}

exports.DeleteHome = (req,res,next)=>{
    const id = parseInt(req.params.id);
    const index = HotelDetail.findIndex(h=> h.id == id)
    if (index !== -1 ) {
        HotelDetail.splice(index, 1);
    }
    res.redirect('/ShowHome');
}

exports.EditHome = (req,res,next)=> {
    const id = parseInt(req.params.id);
    const hotel = HotelDetail.find(h=> h.id == id);

    res.render("Edit", { hotel }); 
}

exports.UpdateHome = (req, res, next) => {
    const id = parseInt(req.params.id);

    const hotel = HotelDetail.find(h => h.id == id);

    hotel.name = req.body.name;
    hotel.location = req.body.location;
    hotel.price = req.body.price;
    hotel.rating = req.body.rating;

    res.redirect('/ShowHome');
};