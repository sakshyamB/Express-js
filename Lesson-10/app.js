const express = require('express');
const RoutesManager = require('./routes/RoutesManager');
const connectDB  = require('./db/db');
const AuthManager = require('./routes/AuthManager');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret : "This is my secret key",
    resave : false,
    saveUninitialized :true,
}))

app.use(express.urlencoded({ extended: true }));
app.use(AuthManager);
app.use(RoutesManager);

connectDB();

const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
    });