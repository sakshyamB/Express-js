const express = require('express');
const TaskController = require('../controllers/controller')
const RoutesHandler = express.Router();

RoutesHandler.get('/', TaskController.Home)
RoutesHandler.get('/Login', TaskController.Login)
RoutesHandler.post('/Login', TaskController.PostLogin)


module.exports = RoutesHandler;