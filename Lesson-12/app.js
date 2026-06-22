const express = require("express");
const session = require('express-session');
const AuthHandler = require('./routes/AuthHandler');
const RoutesHandler = require('./routes/RoutesHandler');
const connectDB = require("./db/db");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
}))

app.use(express.urlencoded({ extended: true }));
app.use(AuthHandler);
app.use(RoutesHandler);

connectDB();

const PORT = 3000;
app.listen(PORT, ()=>{
console.log(`The server is running on http://localhost:${3000}`);
})