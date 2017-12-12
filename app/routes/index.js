const express = require('express');
const router = express.Router();
const react = require("../controllers/ReactController.js");

// restrict index for logged in user only
router.get('/', react.index);

module.exports = router;
