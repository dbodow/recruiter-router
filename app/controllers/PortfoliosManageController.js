const Portfolio = require("../models/portfolio");
const mongoose = require("mongoose");
const passport = require("passport");

const portfoliosManageController = {};

portfoliosManageController.getPortfolio = async (req, res) => {
  try {
    const username = req.user.username;
    return await res
      .status(200)
      .json({ portfolio: Portfolio.findOne({ username }) });
  } catch (e) {
    return res.status(e.status).json(["Portfolio not found"]);
  }
  // passport.authenticate("local", (err, user, info) => {
  //   if (err) {
  //     res.status(500);
  //     return res.json(["Internal Server Error"]);
  //   }

  //   if (!user) {
  //     // Authentication failed
  //     return res.status(401).json([info.message]);
  //   }

  //   req.login(user, async loginErr => {
  //     if (loginErr) {
  //       return res.status(401).json(["Portfolio not found"]);
  //     }
  //   });
  // })(req, res);
};

module.exports = portfoliosManageController;
