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

  for (let i = 0; i < 3; i++) {
    let tag = {
      tagName: tagNameFn(),
      heroSection: heroFn(),
      experienceSection: {
        focusDescription: faker.lorem.sentences(),
        experiences: experiencesFn()
      },
      projectsSection: {
        focusDescription: faker.lorem.sentences(),
        projects: projectsFn(),
      },
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
    arr.push(Date.parse(faker.date.recent()));
  }

  return arr;
};

// chooses tagNames to assign to analytics
const analyticsTagHelper = tags => {
  let tagsIdx = Math.floor(Math.random() * tags.length);
  return tags[tagsIdx].tagName;
};

const analyticsFn = (username, tags) => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let companyName = faker.company.companyName();

    let datum = {
      tagName: analyticsTagHelper(tags),
      username: username,
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
    zipCode: faker.address.zipCode(),
    bio: faker.lorem.sentences()
  };
};

module.exports = {
  tagsFn,
  analyticsFn,
  contactsFn
};
