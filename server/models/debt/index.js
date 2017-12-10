const express = require('express');
const path = require('path');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const DebtController = require("./debt.controller");
const debtRoutes = express.Router();

debtRoutes.get('/getUserDebts', DebtController.getUserDebts);
debtRoutes.get('/userCreditorDebts', DebtController.getUserCreditorDebts);
debtRoutes.patch('/confirmPayment/:id', DebtController.confirmPayment);

module.exports = debtRoutes;
