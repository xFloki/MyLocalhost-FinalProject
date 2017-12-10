const express = require('express');
const path = require('path');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const DebtController = require("./debt.controller");
const debtRoutes = express.Router();

debtRoutes.get('/getUserDebts', DebtController.getUserDebts);

module.exports = debtRoutes;
