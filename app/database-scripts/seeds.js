const Portfolio = require("../models/portfolio");
const User = require("../models/User");
const mongoose = require("mongoose");

const faker = require("faker");
const { tagsFn, analyticsFn, contactsFn } = require("./seed-util");
const _ = require("lodash");

mongoose
  .connect("mongodb://localhost/recruiter-router", { useMongoClient: true })
  .then(() => console.log("connection successful"))
  .catch(err => console.err(err));

const user1 = {
  name: faker.name.findName(),
  userName: faker.internet.userName(),
  password: "password"
};

const user2 = {
  name: faker.name.findName(),
  userName: faker.internet.userName(),
  password: "password"
};

const user3 = {
  name: "James Santos",
  userName: "jsantos15",
  password: "password"
};

const tags1 = tagsFn();
const tags2 = tagsFn();
const tags3 = tagsFn();

const portfolio1 = {
  userName: user1.userName,
  templateName: "Flex",
  staticInfo: contactsFn(user1.userName),
  taggedInfo: tags1,
  analyticData: analyticsFn(user1.userName, tags1)
};

const portfolio2 = {
  userName: user2.userName,
  templateName: "Flex",
  staticInfo: contactsFn(user2.userName),
  taggedInfo: tags2,
  analytics: analyticsFn(user2.userName, tags2)
};

const portfolio3 = {
  userName: user3.userName,
  templateName: "Flex",
  staticInfo: contactsFn(user3.userName),
  taggedInfo: tags3,
  analytics: analyticsFn(user3.userName, tags3)
};

const u1 = JSON.stringify(user1);
const u2 = JSON.stringify(user2);
const u3 = JSON.stringify(user3);

const p1 = JSON.stringify(portfolio1);
const p2 = JSON.stringify(portfolio2);
const p3 = JSON.stringify(portfolio3);

const userSeeds = [new User(user1), new User(user2), new User(user3)];

const portSeeds = [
  new Portfolio(portfolio1),
  new Portfolio(portfolio2),
  new Portfolio(portfolio3)
];

// console.log("This is userSeeds1\n", userSeeds[0]);

// console.log("This is portfolio1\n", portSeeds[0]);
// console.log("This is portSeeds[1]\n", portSeeds[1]);
// console.log("This is portSeeds[2]\n", portSeeds[2]);

db.userSeeds[0].save();
db.portSeeds[0].save();
// sleep(5000);
mongoose.disconnect();

// let iDone = 0;
// for (let i = 0; i < userSeeds.length; i++) {
//   userSeeds[i].save(function(err, result) {
//     iDone++;
//   });
// }

// let jDone = 0;
// for (let j = 0; j < portSeeds.length; j++) {
//   portSeeds[j].save(function(err, result) {
//     jDone++;
//   });
// }

// if (iDone === 3 && jDone === 3) {
//   exit();
// }

// function exit() {
//   mongoose.disconnect();
// }
