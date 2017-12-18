const express = require("express");
const router = express.Router();
const LinksManagerController = require("../../controllers/LinksManagerController");

router.post("/links", LinksManagerController.createAnalyticsObj);

module.exports = router;
