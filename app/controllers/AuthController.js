const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");
const Portfolio = require("../models/portfolio");

const userJSONView = require("../views/api/userJSONView");

const authController = {};

// Post registration
// stretch feature: validate password length
authController.doRegister = (req, res) => {
  User.register(
    new User({ username: req.body.username, name: req.body.name }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.status(422);
        return res.json(["Invalid credentials"]);
      }
      passport.authenticate("local")(req, res, () => {
        Portfolio.create({ username: req.body.username }, portErr => {
          if (portErr) {
            res.status(500);
            return res.json([['Failed to create new user portfolio']]);
          }
        });
        res.json(userJSONView(user));
      });
    }
  );
};

// Post login
// http://www.passportjs.org/docs/authenticate/
// http://www.passportjs.org/docs/login/
authController.doLogin = (req, res, next) => {
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
        return res.status(401).json(["Auth succeeded but login failed."]);
      }
      return res.json(userJSONView(user));
    });
  })(req, res);
};

// logout
authController.logout = (req, res) => {
  req.logout();
  res.json({});
};

module.exports = authController;
