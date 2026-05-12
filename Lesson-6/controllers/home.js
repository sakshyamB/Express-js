const HotelDetail = [];

exports.AddHome = (req,res,next)=>{
    res.render('AddHome');
}

exports.Submit = (req,res,next)=>{
    console.log(req.body);
    const newHotel = {
    id: HotelDetail.length + 1,
    name: req.body.name,
    location: req.body.location,
    price: req.body.price,
    rating: req.body.rating,
    favourite: false
}

    HotelDetail.push(newHotel);
    res.render('Submit');
}

exports.Home = (req,res,next)=>{
    res.render('Home');
}

exports.ShowHome = (req,res,next)=>{
    res.render('ShowHome', {hotels: HotelDetail})
}

exports.NotFound = (req,res,next) =>{
    res.render('NotFound');
}

exports.SingleHome = (req,res,next) =>{
    const RequestedId = req.params.id;
    const HotelId = HotelDetail.find(
        home => home.id == RequestedId
    );
    res.render('SingleHome', {HotelId});
}

exports.AddFavourites = (req,res,next)=>{
    const RequestedId = req.params.id;
    const HotelId = HotelDetail.find(
        home => home.id == RequestedId
    );
    HotelId.favourite = !HotelId.favourite ;
    res.redirect('/ShowHome')
}

exports.Favouritespage = (req,res,next)=>{
    const FavouriteHotels = HotelDetail.filter(
        home => home.favourite == true
    )
    res.render('Favouritespage', {FavouriteHotels})
}