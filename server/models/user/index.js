const express = require('express');
const passport = require('passport');
const path = require('path');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const AuthController = require("./user.controller");
const authRoutes = express.Router();

authRoutes.post('/signup', AuthController.signup);
authRoutes.post('/login', AuthController.login);
authRoutes.get('/logout', AuthController.logout);
authRoutes.get('/loggedin', AuthController.loggedIn);

module.exports = authRoutes;
