const mongoose = require("mongoose");

const portfoliosController = {};

portfoliosController.loadPorfolio = (req, res) => {
    // if (req.params.user) {
    //   res.render('portfolio', { user: req.params.user });
    // }

    console.log("----PARAMS----");
    console.log(req.params);
    res.json({});
};

module.exports = portfoliosController;
