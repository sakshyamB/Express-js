const express = require('express');
const path = require('path')
const HomeControls = require('../controllers/home')
const userRouter = express.Router();

userRouter.get('/', HomeControls.Home)
userRouter.get('/ShowHome', HomeControls.ShowHome)

module.exports = userRouter;