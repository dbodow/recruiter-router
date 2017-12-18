const mongoose = require("mongoose");
const portfoliosController = {};
const portfolios = require("../models/portfolio");
const users = require("../models/User");
const merge = require('lodash/merge');

portfoliosController.loadPorfolio = (req, res) => {
  const paramsUser = req.params.user;
  const paramsCompany = req.params.company.toLowerCase().replace( /\W/g, '' );
  let name;

  users.findOne({username: paramsUser}).exec().then((result) => {
    name = result.name;
  });

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

        if (analyticsObjCompanyName === paramsCompany) {
          company = analyticsObj.companyName;
          // console.log("---UPDATE TAG---");
          tag = analyticsObj.tagName;

          // console.log("---ANALYTICS---");
          // console.log(analytics);
          let updatedAnalytics = merge([], port.analytics.toObject());
          // console.log("---MERGED ANALYTICS---");
          // console.log(updatedAnalytics);

          updatedAnalytics[i].visits.push(Date.now());
          // console.log("---UPDATEDANALYTICS---");
          // console.log(updatedAnalytics);
          port.set({ analytics: updatedAnalytics });
          port.save( (err) => {
            if (err) {
              // console.log("---ERR MSG---");
              // console.log(err);
            } else {
              // console.log("---NO ERROR---");
            }
          }).then(() => {

            for (var j = 0; j < taggedInfo.length; j++) {
              const taggedInfoObj = taggedInfo[j];

              if (tag === taggedInfoObj.tagName) {
                tag = taggedInfoObj;
              }
            }

            if (!company) {
              res.render('index', { user : req.user });
            } else {
              // console.log("---VISITS---");
              // console.log(port.analytics);
              res.render('portfolio', { name: name, port: port, company: company, tag: tag, staticInfo: staticInfo});
            }

          });
        }
     }


  });
};

module.exports = portfoliosController;
