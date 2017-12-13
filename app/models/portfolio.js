const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
  userName: { type: String, required: true },
  templateName: { type: String },
  staticInfo: { type: Object },
  taggedInfo: { type: Array },
  analytics: { type: Array }
});

module.exports = mongoose.model("Portfolio", schema);
