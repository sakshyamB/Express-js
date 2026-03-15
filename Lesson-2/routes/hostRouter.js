const express = require('express');

const hostRouter = express.Router();

hostRouter.get('/host/form', (req,res,next)=>{
    console.log(req.url, req.method);
    res.send(`<h1> Form </h1>
        <form action="/host/submit" method="POST">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Submit</button>
        </form>`);
})

hostRouter.post('/host/submit', (req,res,next)=>{
    console.log(req.body);
    res.send(`<h1> Form submitted successfully </h1>
        <a href="/"> Go back to Home </a>`);
})

module.exports = hostRouter;