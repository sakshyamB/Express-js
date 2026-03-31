const express = require('express');
const uerRouter = require('./routes/userRouter');
const userRouter = require('./routes/userRouter');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req,res,next)=>{
    console.log(req.url, req.method);
    next();
})
app.use(userRouter);

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`App is running on http://localhost${PORT}`);
})