// Just renders a div for React to mount into at the index
const mongoose = require("mongoose");

const reactController = {};

reactController.index = (req, res) => {
  // res.render('index', { user : req.user });
  res.render('index');
}; 

module.exports = reactController;