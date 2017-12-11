const express = require('express');
const ShopListController = require("./shoplist.controller");
const shopListRoutes = express.Router();

shopListRoutes.post('/add', ShopListController.addShopList);
shopListRoutes.get('/', ShopListController.getShopLists);
shopListRoutes.get('/:id', ShopListController.getShopList);

module.exports = shopListRoutes;
