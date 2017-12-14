const mongoose = require("mongoose");

const portfoliosController = {};

portfoliosController.loadPorfolio = (req, res) => {
  const user = req.params.user;
  const company = req.params.company;
  res.render('portfolio', { user: user, company: company });
};

module.exports = portfoliosController;
