const faker = require("faker");

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

const portfolio1 = {
  userId: user1._id,
  templateName: "Flex",
  staticInfo: {
    contacts: {
      linkedIn: `http://www.linkedin.com/${user1.username}`,
      github: `http://www.github.com/${user1.username}`,
      phone: faker.phone.phoneNumber(),
      email: fake.internet.email(),
      address1: faker.address.streetAddress(),
      address2: "",
      city: faker.address.city,
      state: faker.address.state,
      zipCode: faker.address.zipCode
    }
  },
  taggedInfo: {},
  analytics: {}
};

const portfolio2 = {
  userId: user2._id,
  templateName: "Flex",
  staticInfo: {},
  taggedInfo: {},
  analytics: {}
};

const portfolio3 = {
  userId: user2._id,
  templateName: "Flex",
  staticInfo: {},
  taggedInfo: {},
  analytics: {}
};
