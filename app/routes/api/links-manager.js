const express = require("express");
const router = express.Router();
const LinksManagerController = require("../../controllers/LinksManagerController");

router.get("/links", LinksManagerController.getTags);
router.post("/links", LinksManagerController.createAnalyticsObj);

module.exports = router;
