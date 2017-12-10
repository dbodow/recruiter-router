const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");

const userController = {};

// Restrict access to root page
userController.home = (req, res) => {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = (req, res) => {
  res.render('register');
};

// Post registration
userController.doRegister = (req, res) => {
  User.register(new User({ username : req.body.username, name: req.body.name }),
                req.body.password, (err, user) => {
    if (err) {
      return res.render('register', { user : user }); // probably change to json
    }

    passport.authenticate('local')(req, res, () => {
      // generate session token?
      res.redirect('/'); // probably return some json to react
    });
  });
};

// Go to login page
userController.login = (req, res) => {
  res.render('login');
};

// Post login
userController.doLogin = (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.redirect('/'); // probably json instead
  });
};

// logout
userController.logout = (req, res) => {
  req.logout();
  res.redirect('/'); // probably update session slice of state
};

module.exports = userController;