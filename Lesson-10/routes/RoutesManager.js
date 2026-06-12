const express = require('express');
const HomeControlls = require('../controllers/home')
const RoutesManager = express.Router();

RoutesManager.use('/',HomeControlls.Home )

RoutesManager.get('/AddHome',HomeControlls.AddHome)

RoutesManager.get('/ShowHome',HomeControlls.ShowHome)

RoutesManager.post('/Submit',HomeControlls.Submit)

RoutesManager.get('/Delete/:id', HomeControlls.DeleteHome)

RoutesManager.get('/Edit/:id', HomeControlls.EditHome)

RoutesManager.post('/Update/:id', HomeControlls.UpdateHome)


module.exports = RoutesManager;