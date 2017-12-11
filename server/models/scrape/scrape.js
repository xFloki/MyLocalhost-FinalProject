const express = require('express');
const scrapeRoutes = express.Router();
const ScrapeController = require("./scrape.controller");

scrapeRoutes.get('/getProduct/:product', ScrapeController.getProduct);


module.exports = scrapeRoutes;
