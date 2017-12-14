const Portfolio = require("../models/portfolio");
const mongoose = require("mongoose");
const passport = require("passport");

const portfolioController = {};

portfolioController.getPortfolio = async (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      res.status(500);
      return res.json(["Internal Server Error"]);
    }
    if (!user) {
      // Authentication failed
      return res.status(401).json([info.message]);
    }
    req.login(user, loginErr => {
      if (loginErr) {
        return res.status(401).json(["Portfolio not found"]);
      }
      try {
        const username = req.user.username;
        return res.status(200).json({ portfolio: await Portfolio.findOne({ username }) });
      } catch (e) {
        return res
          .status(e.status)
          .json(["Portfolio not found"]);
      };
    });
  })(req, res);
};

module.exports = portfolioController;
