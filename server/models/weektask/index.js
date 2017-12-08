const express = require('express');
const path = require('path');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);
const TaskController = require("./weektask.controller");
const weekTaskRoutes = express.Router();

weekTaskRoutes.get('/current', TaskController.list);
weekTaskRoutes.post('/assign/:id/:userID', TaskController.assign);

module.exports = weekTaskRoutes;
