const mongoose = require("mongoose");
const portfoliosController = {};
const portfolios = require("../models/portfolio");

portfoliosController.loadPorfolio = (req, res) => {
  const paramsUser = req.params.user;
  const paramsCompany = req.params.company.toLowerCase().replace( /\W/g, '' );
  portfolios
    .findOne({username: paramsUser})
    .exec()
    .then((result) => {
       const port = result;
       const analytics = port.analytics;
      //  console.log(analytics[0].companyName);
       let company;
       for (let i = 0; i < analytics.length; i++) {
         const analyticsObjCompanyName =
         analytics[i].companyName.toLowerCase().replace( /\W/g, '' );
         if (analyticsObjCompanyName ===
           paramsCompany) {
             company = analytics[i].companyName;
             break;
          }
       }
      console.log("---ANALYTICS COMPANY---");
      console.log(company);
      res.render('portfolio', { port: port, company: company });
    });
};

module.exports = portfoliosController;
