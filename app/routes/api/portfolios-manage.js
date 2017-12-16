const express = require("express");
const router = express.Router();
const portfoliosManageController = require("../../controllers/PortfoliosManageController");

router.get("/", portfoliosManageController.getPortfolio);

module.exports = router;
