const faker = require("faker");

// Factory methods
// ====================

const tagNameFn = () => `${faker.name.jobArea()} ${faker.name.jobType()}`;

const heroFn = () => ({
  title: faker.company.catchPhrase(),
  subtitle: tagNameFn()
});

const experiencesFn = () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let exp = {
      companyName: faker.company.companyName(),
      companyUrl: faker.internet.url(),
      jobTitle: faker.name.jobTitle(),
      startDate: faker.date.past(),
      endDate: faker.date.past(),
      hoverTitle: faker.lorem.sentence(),
      hoverDescription: faker.lorem.sentence()
    };
    arr.push(exp);
  }
  return arr;
};

const projectsFn = () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let productName = faker.commerce.productName();

    let productNameSnake = productName
      .toLowerCase()
      .split(" ")
      .join("_");

    let project = {
      projectTitle: productName,
      projectDescription: faker.lorem.sentence(),
      projectURL: faker.internet.url(),
      imageUrl: faker.image.cats(),
      githubURL: `https://github.com/${productNameSnake}/`
    };

    arr.push(project);
  }
  return arr;
};

const skillsFn = () => {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    let skillName = `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`;

    let skill = {
      skillTitle: skillName,
      skillPercentage: Math.round(Math.random() * 100)
    };
    arr.push(skill);
  }
  return arr;
};

const tagsFn = () => {
  let arr = [];

  for (let i = 0; i < 2; i++) {
    let tag = {
      tagName: tagNameFn(),
      heroSection: heroFn(),
      experienceSection: {
        focusDescription: faker.lorem.sentences(),
        experiences: experiencesFn()
      },
      projectsSection: projectsFn(),
      skillsSection: {
        skillsParagraphText: faker.lorem.sentences(),
        skills: skillsFn()
      }
    };
    arr.push(tag);
  }
  return arr;
};

const analyticsFn = userName => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let companyName = faker.company.companyName();
    let companyNameSnake = companyName
      .toLowerCase()
      .split(" ")
      .join("_");
    // build out tag
    let datum = {
      linkName: `http://recruiterrouter.com/${userName}/${companyNameSnake}`,
      tag: "", //TODO
      companyName: companyName,
      visits: [faker.date.recent(), faker.date.recent(), faker.date.recent()]
    };
    arr.push(datum);
  }
  return arr;
};

// ====================

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

const contacts1 = {
  contactsSection: {
    linkedIn: `http://www.linkedin.com/${user1.userName}`,
    github: `http://www.github.com/${user1.userName}`,
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    address1: faker.address.streetAddress(),
    address2: "",
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode()
  }
};

const portfolio1 = {
  userId: user1._id,
  templateName: "Flex",
  staticInfo: contacts1,
  taggedInfo: tagsFn(),
  analytics: analyticsFn(user1.userName)
};

const portfolio2 = {
  userId: user2._id,
  templateName: "Flex",
  staticInfo: {},
  taggedInfo: [],
  analytics: {}
};

const portfolio3 = {
  userId: user2._id,
  templateName: "Flex",
  staticInfo: {},
  taggedInfo: [],
  analytics: {}
};

console.log(portfolio1);
