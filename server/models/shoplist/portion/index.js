const express = require('express');
const PortionController = require("./portion.controller");
const portionRoutes = express.Router();

portionRoutes.get('/', PortionController.getPortions);
portionRoutes.get('/:id', PortionController.getPortion);
portionRoutes.post('/', PortionController.createPortion);
portionRoutes.patch('/:id', PortionController.updatePortion);
portionRoutes.patch('/accept/:id', PortionController.setPortionToAccepted);
portionRoutes.delete('/:id', PortionController.cancelPortion);


module.exports = portionRoutes;
