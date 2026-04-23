const HotelDetail = [];

exports.AddHome = (req,res,next)=>{
    res.render('AddHome');
}

exports.Submit = (req,res,next)=>{
    console.log(req.body);
    HotelDetail.push(req.body);
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
