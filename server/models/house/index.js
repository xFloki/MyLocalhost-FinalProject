const express = require('express');
const HouseController = require("./house.controller");
const houseRoutes = express.Router();

houseRoutes.get('/', HouseController.getHouses);
houseRoutes.post('/', HouseController.createHouse);
houseRoutes.get('/current-user', HouseController.getCurrentUserHouse);
houseRoutes.get('/:id', HouseController.getHouse);
houseRoutes.get('/user/:id', HouseController.getHouseUser);
houseRoutes.patch('/add/:houseId', HouseController.addHouseMember);

module.exports = houseRoutes;
