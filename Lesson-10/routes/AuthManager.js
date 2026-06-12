const express = require('express');
const HomeController = require('../controllers/home')
const AuthManager = express().router

AuthManager.get('/Login', HomeController.Login)

AuthManager.get('/Postlogin', HomeController.PostLogin)

module.exports = AuthManager; 