const express = require('express');
const TaskController = require("./task.controller");
const taskRoutes = express.Router();

taskRoutes.get('/unassigned', TaskController.listUnassigned);

module.exports = taskRoutes;
