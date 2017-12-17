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
      const taggedInfo = port.taggedInfo;
      const staticInfo = port.staticInfo;

      let company;
      let tag;

      for (let i = 0; i < analytics.length; i++) {
        const analyticsObj = analytics[i];

        const analyticsObjCompanyName =
          analyticsObj.companyName.toLowerCase().replace( /\W/g, '' );

        if (analyticsObjCompanyName ===
           paramsCompany) {
            company = analyticsObj.companyName;
            tag = analyticsObj.tagName;
          }
     }

     for (var j = 0; j < taggedInfo.length; j++) {
       const taggedInfoObj = taggedInfo[j];

       if (tag === taggedInfoObj.tagName) {
         tag = taggedInfoObj;
       }
     }
     if (!company) {
       res.render('index', { user : req.user });
     } else {
       res.render('portfolio', { port: port, company: company, tag: tag, staticInfo: staticInfo});
     }
  });
};

module.exports = portfoliosController;
