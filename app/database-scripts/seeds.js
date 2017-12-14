const Portfolio = require("../models/portfolio");
const User = require("../models/User");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const faker = require("faker");
const { tagsFn, analyticsFn, contactsFn } = require("./seed-util");
const _ = require("lodash");

mongoose
  .connect("mongodb://localhost/recruiter-router", { useMongoClient: true })
  .then(() => console.log("connection successful"))
  .catch(err => console.err(err));

const user1 = {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  password: "password"
};

const user2 = {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  password: "password"
};

const user3 = {
  name: faker.name.findName(),
  username: faker.internet.userName(),
  password: "password"
};

const tags1 = tagsFn();
const tags2 = tagsFn();
const tags3 = tagsFn();

const portfolio1 = {
  username: user1.username,
  templateName: "Flex",
  staticInfo: contactsFn(user1.username),
  taggedInfo: tags1,
  analytics: analyticsFn(user1.username, tags1)
};

const portfolio2 = {
  username: user2.username,
  templateName: "Flex",
  staticInfo: contactsFn(user2.username),
  taggedInfo: tags2,
  analytics: analyticsFn(user2.username, tags2)
};

const portfolio3 = {
  username: user3.username,
  templateName: "Flex",
  staticInfo: contactsFn(user3.username),
  taggedInfo: tags3,
  analytics: analyticsFn(user3.username, tags3)
};

const successfulSave = el => {
  console.log("Saved object:\n", el);
};

const failedSave = () => {
  console.log("Error saving, make sacrifice to nodemon & mongod");
};

const incrementCurrentSave = () => {
  currentSave++;
  if (currentSave === saveCount) {
    console.log("Now exiting...");
    mongoose.disconnect();
  }
};

console.log("Created objects, now saving...");

const saveCount = 6;
let currentSave = 0;

new User(user1)
  .save()
  .then(successfulSave, failedSave)
  .finally(incrementCurrentSave);

new User(user2)
  .save()
  .then(successfulSave, failedSave)
  .finally(incrementCurrentSave);

new User(user3)
  .save()
  .then(successfulSave, failedSave)
  .finally(incrementCurrentSave);

new Portfolio(portfolio1)
  .save()
  .then(successfulSave, failedSave)
  .finally(incrementCurrentSave);

new Portfolio(portfolio2)
  .save()
  .then(successfulSave, failedSave)
  .finally(incrementCurrentSave);

new Portfolio(portfolio3)
  .save()
  .then(successfulSave, failedSave)
  .finally(incrementCurrentSave);
