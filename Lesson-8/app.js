const express = require('express');
const RoutesManager = require('./routes/RoutesManager');
const db = require('./db/db');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req,res,next)=>{
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use(RoutesManager);

const PORT = 3000;
app.listen( PORT, ()=>{
    console.log(`App is rnning on http://localhost:${PORT}`);
})