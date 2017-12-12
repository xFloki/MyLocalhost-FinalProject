const express = require('express');
const WeekTaskController = require("./weektask.controller");
const weekTaskRoutes = express.Router();

weekTaskRoutes.get('/current', WeekTaskController.list);
weekTaskRoutes.post('/assign/:id', WeekTaskController.assign);

module.exports = weekTaskRoutes;
