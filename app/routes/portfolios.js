const express = require('express');
const router = express.Router();
const portfolio = require("../controllers/PortfoliosController.js");

router.route('/:user/:company').get(portfolio.loadPorfolio);

module.exports = router;
