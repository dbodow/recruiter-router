const express = require("express");
const router = express.Router();
const portfoliosManageController = require("../../controllers/PortfoliosManageController");

router.get("/", portfoliosManageController.getPortfolio);
router.post("/tag", portfoliosManageController.createTag);
router.patch("/tag", portfoliosManageController.deleteTag);
router.patch("/portfolio", portfoliosManageController.updatePortfolio);

module.exports = router;
