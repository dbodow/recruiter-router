const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");

const authController = {};

// // Go to registration page
// authController.register = (req, res) => {
//   res.render('register');
// };

// Post registration
authController.doRegister = (req, res) => {
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

// // Go to login page
// authController.login = (req, res) => {
//   res.render('login');
// };

// Post login
authController.doLogin = (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.redirect('/'); // probably json instead
  });
};

// logout
authController.logout = (req, res) => {
  req.logout();
  res.redirect('/'); // probably update session slice of state
};

// logout
authController.testing = (req, res) => {
  res.json({hi: 'there'}); // probably update session slice of state
};

module.exports = authController;