const express = require('express');
const path = require('path')
const HomeControls = require('../controllers/home')
const userRouter = express.Router();

userRouter.get('/', HomeControls.Home)
userRouter.get('/ShowHome', HomeControls.ShowHome)
userRouter.get('/ShowHome/:id', HomeControls.SingleHome)
userRouter.get('/Favourites', HomeControls.Favouritespage);
userRouter.get('/Favourite/:id', HomeControls.AddFavourites);

module.exports = userRouter;