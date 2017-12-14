const mongoose = require("mongoose");
const Portfolio = require("./models/portfolio");

mongoose.connect("mongodb://localhost/recruiter-router", {
  useMongoClient: true
});

const p1 = new Portfolio({
  userName: "user",
  templateName: "Flex",
  staticInfo: { key: "value" },
  taggedInfo: [{ key: "value" }],
  analytics: [{ key: "value" }]
});

p1.save();
console.log(p1);
console.log("reached");
