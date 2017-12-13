const express = require('express');
const WeekTaskController = require("./weektask.controller");
const weekTaskRoutes = express.Router();

weekTaskRoutes.get('/current', WeekTaskController.list);
weekTaskRoutes.post('/assign', WeekTaskController.assign);

module.exports = weekTaskRoutes;
