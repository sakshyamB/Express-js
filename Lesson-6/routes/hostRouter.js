const express = require('express');
const path = require('path');
const HomeControls = require('../controllers/home');
const hostRouter = express.Router();

hostRouter.get('/AddHome', HomeControls.AddHome)
hostRouter.post('/Submit', HomeControls.Submit)

module.exports = hostRouter;