const Portfolio = require("../models/portfolio");
const User = require("../models/User");
const mongoose = require("mongoose");
const passport = require("passport");

const portfoliosManageController = {};

portfoliosManageController.getPortfolio = (req, res) => {
  const username = req.user.username;

  const returnPortfolio = portfolio => {
    return res.status(200).json({ portfolio });
  };

  const returnError = e => {
    return res.status(e.status).json(["Cannot find portfolio"]);
  };

  const portfolio = Portfolio.findOne({ username })
    .exec()
    .then(returnPortfolio, returnError);
};

module.exports = portfoliosManageController;
