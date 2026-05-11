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
    rating: req.body.rating
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
