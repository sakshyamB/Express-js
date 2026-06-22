 const User = require('../model/user');
 const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')

exports.Signup = (req,res,next)=>{
    res.render('Signup', {errors: []});
}

exports.Home = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }

    res.render('Home', {
        isLoggedIn: req.session.isLoggedIn,
        username: req.session.username

    });
};

exports.PostSignup = [
    body('username')
    .notEmpty()
    .withMessage('username cant be empty')
    .trim()
    .isLength({min:3})
    .withMessage("username should be of atleast 3 character")
    .matches(/^[a-zA-z\s]/)
    .withMessage("username should only have characters or spaces"),
    
    body('email')
    .notEmpty()
    .withMessage('email cant be empty')
    .isEmail()
    .withMessage("email not valid"),
    
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),

    body('c-password')
        .notEmpty()
        .withMessage('Confirm Password is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),

    body('user-type')
        .notEmpty()
        .withMessage('Please select a user type')
        .isIn(['guest', 'host'])
        .withMessage('User type must be guest or host'),

    body('terms&conditions')
        .custom((value) => {
            if (!value) {
                throw new Error('You must accept the Terms and Conditions');
            }
            return true;
        }),
    (req, res, next) => {
    const { username, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('signup', {
            errors: errors.array(),
        });
    }

    bcrypt.hash(password, 12)
        .then(async (hashedPassword) => {
            try {
                const newUser = await User.create({
                    username: username,
                    email: email,
                    password: hashedPassword
                });

                console.log("User created:", newUser);

                return res.redirect('/login');

            } catch (err) {
    console.log("FULL ERROR:", err);
    return res.status(500).send(err.message);
}
        })
        .catch(err => {
            console.log("Bcrypt error:", err);
            return res.status(500).send("Hashing error");
        });
}
]

exports.Login =(req,res,next)=>{
    res.render('Login')
}

exports.PostLogin = async (req, res, next) => {
    const { username, password } = req.body;

    console.log("Login attempt:", username);

    try {
        const user = await User.findOne({ username });

        console.log("User found:", user);

        if (!user) {
            return res.send("User not found");
        }

        const bcrypt = require('bcrypt');

        const isMatch = await bcrypt.compare(password, user.password);

        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.send("Wrong password");
        }

        req.session.isLoggedIn = true;
        req.session.username = user.username;

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
    console.log("Entered password:", password);
console.log("Stored hash:", user.password);
};

exports.Logout = (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/Login')
    })
}