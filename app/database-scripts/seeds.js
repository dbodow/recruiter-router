const faker = require("faker");
const { tagsFn, analyticsFn, contactsFn } = require("./seed-util");

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

const contacts1 = contactsFn(user1.userName);

const portfolio1 = {
  userName: user1.userName,
  templateName: "Flex",
  staticInfo: contacts1,
  taggedInfo: tagsFn(),
  analytics: analyticsFn(user1.userName)
};

const portfolio2 = {
  userName: user2.userName,
  templateName: "Flex",
  staticInfo: {},
  taggedInfo: [],
  analytics: []
};

const portfolio3 = {
  userName: user3.userName,
  templateName: "Flex",
  staticInfo: {},
  taggedInfo: [],
  analytics: {}
};

console.log(contacts1);
