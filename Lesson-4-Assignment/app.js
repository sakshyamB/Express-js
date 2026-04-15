const express = require('express');
const {hostRouter} = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', (req,res,next)=>{
    console.log(req.url, req.method);
    next();
})
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`App is running on http://localhost${PORT}`);
})