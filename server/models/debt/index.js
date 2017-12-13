const express = require('express');
const DebtController = require("./debt.controller");
const debtRoutes = express.Router();

debtRoutes.get('/getUserDebts', DebtController.getUserDebts);
debtRoutes.get('/userCreditorDebts', DebtController.getUserCreditorDebts);
debtRoutes.patch('/confirmPayment/:id', DebtController.confirmPayment);
debtRoutes.post('/create', DebtController.createDebt);

module.exports = debtRoutes;
