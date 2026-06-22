const express = require('express');
const TaskController = require('../controllers/controller');
const AuthHandler = express.Router();

AuthHandler.get('/Signup', TaskController.Signup);
AuthHandler.post('/Signup', TaskController.PostSignup)
AuthHandler.post('/Logout', TaskController.Logout)


module.exports = AuthHandler;