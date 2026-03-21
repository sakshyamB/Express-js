// External modules
const express = require('express');
const path = require('path');
// Third party modules
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req,res,next)=>{
    console.log(req.url, req.method);
    next();
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'));   
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
