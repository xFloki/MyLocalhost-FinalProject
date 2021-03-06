const express = require('express');
const path = require('path');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const AuthController = require("./user.controller");
const authRoutes = express.Router();

authRoutes.post('/signup', AuthController.signup);
authRoutes.post('/login', AuthController.login);
authRoutes.get('/logout', AuthController.logout);
authRoutes.get('/loggedin', AuthController.loggedIn);
authRoutes.patch('/not-homeless', AuthController.stopBeingHomeless);

module.exports = authRoutes;
