const express = require('express');
const router = express.Router();
const portfolio = require("../controllers/PortfoliosController.js");

router.get('/:user/:company', portfolio.loadPorfolio);
