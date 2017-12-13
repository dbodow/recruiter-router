const faker = require("faker");
const { tagsFn, analyticsFn, contactsFn } = require("./seed-util");
const _ = require("lodash");

const user1 = {
  name: faker.name.findName(),
  userName: faker.internet.userName()
};

const user2 = {
  name: faker.name.findName(),
  userName: faker.internet.userName()
};

const user3 = {
  name: "James Santos",
  userName: "jsantos15"
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

db.portfolio.remove({});
db.users.insert([u1, u2, u3]);
db.portfolio.insert([p1, p2, p3]);
