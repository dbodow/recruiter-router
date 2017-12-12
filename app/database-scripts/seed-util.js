const faker = require("faker");
const {
  tagNameFn,
  heroFn,
  experiencesFn,
  projectsFn,
  skillsFn
} = require("./seed-tag-util");

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

const visitsRandomizer = () => {
  let numVisits = Math.floor(Math.random() * 20);
  let arr = [];

  for (let i = 0; i < numVisits; i++) {
    arr.push(faker.date.recent());
  }

  return arr;
};

const analyticsFn = (userName, tagName) => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let companyName = faker.company.companyName();

    // build out tag
    let datum = {
      tag: tagName,
      userName: userName,
      companyName: companyName,
      visits: visitsRandomizer()
    };
    arr.push(datum);
  }
  return arr;
};

// randomly assigns an address2 (50% / 50%)
const address2Helper = () =>
  Math.round(Math.random()) > 0 ? faker.address.secondaryAddress() : "";

const emailHelper = userName => {
  let domains = ["gmail", "yahoo", "hotmail"];
  let domainName = domains[Math.floor(Math.random() * domains.length)];

  return `${userName}@${domainName}.com`;
};

const contactsFn = userName => {
  return {
    linkedIn: `http://www.linkedin.com/${userName}`,
    github: `http://www.github.com/${userName}`,
    phone: faker.phone.phoneNumber(),
    email: emailHelper(userName),
    address1: faker.address.streetAddress(),
    address2: address2Helper(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode()
  };
};

module.exports = {
  tagsFn,
  analyticsFn,
  contactsFn
};
