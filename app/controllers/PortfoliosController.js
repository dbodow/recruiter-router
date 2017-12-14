const Portfolio = require("../models/portfolio");
const mongoose = require("mongoose");

export const getPortfolio = async (req, res) => {
  try {
    return res.status(200).json({ portfolio: await Portfolio.find() });
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: "Portfolio not found" });
  }
};
