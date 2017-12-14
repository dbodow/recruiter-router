const express = require("express");
const router = express.Router();
const portfolioController = require("../../controllers/PortfoliosController");

router.get("/", portfolioController.getPortfolio);
