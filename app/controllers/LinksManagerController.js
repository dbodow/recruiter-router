const mongoose = require("mongoose");
const portfolios = require("../models/portfolio");
const merge = require('lodash/merge');
const LinksManagerController = {};

const _nullAnalyticsObj = ({ companyName, username, tagName }) => ({
  companyName,
  username,
  tagName,
  visits: []
});

LinksManagerController.createAnalyticsObj = (req, res) => {
  const companyName = req.body.companyName;
  const username = req.user.username;
  const tagName = req.body.tagName;

  const returnPortfolio = portfolio => {
    return res.status(200).json({ portfolio });
  };

  const returnError = e => {
    return res.status(e.status).json(["Cannot create link"]);
  };

  const createAnalyticsObj = portfolio => {
    const analytics = merge([], portfolio.analytics.toObject);
    portfolio.set({ analytics: analytics.concat(_nullAnalyticsObj({
      companyName, username, tagName
    }))});
    portfolio.save( (err, updatedPortfolio) => {
      if (err) return returnError(err);
      res.status(200).json({ portfolio: updatedPortfolio });
    });
  };

  portfolios.findOne({ username })
    .exec()
    .then(createAnalyticsObj, returnError);
};

module.exports = LinksManagerController;
