const User = require('../model/user')

exports.Signup = (req,res,next)=>{
    res.render('Signup');
}

exports.Home = (req,res,next)=>{
    res.render('Home', { isLoggedIn: req.session.isLoggedIn });
}

exports.PostSignup = async (req,res,next)=>{
     const {username, password, email} = req.body;
    try{
        await User.create({username, password, email})
        res.redirect('/Login')
    }
    catch(e) {
        console.log(e);
        res.redirect('/Signup')
    }
}

exports.Login =(req,res,next)=>{
    res.render('Login')
}

exports.PostLogin = async (req,res,next)=>{
    const {username, password, email} = req.body;
try{
     const user = await User.findOne({username, password,email});
     if(user){
        req.session.isLoggedIn = true;
        console.log(req.session.isLoggedIn)
        res.redirect('/');
     }}
     catch(e){
        console.log(e);
        res.redirect('/Login')
     }
}

exports.Logout = (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/Login')
    })
}