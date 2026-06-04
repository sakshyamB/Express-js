const express = require('express');
const HomeController = require('../controllers/home')
const AuthManager = express().router

AuthManager.get('/', HomeController.Login)

module.exports = AuthManager; 