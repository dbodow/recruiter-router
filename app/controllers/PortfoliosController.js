// <<<<<<< HEAD
const mongoose = require("mongoose");

const portfoliosController = {};

portfoliosController.loadPorfolio = (req, res) => {
  const user = req.params.user;
  const company = req.params.company;
  res.render('portfolio', { user: user, company: company });
};

module.exports = portfoliosController;
// =======
// const Portfolio = require("../models/portfolio");
// const mongoose = require("mongoose");
//
// export const getPortfolio = async (req, res) => {
//   try {
//     return res.status(200).json({ portfolio: await Portfolio.find() });
//   } catch (e) {
//     return res
//       .status(e.status)
//       .json({ error: true, message: "Portfolio not found" });
//   }
// };
// >>>>>>> master
