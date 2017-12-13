const faker = require("faker");

const tagNameFn = () => `${faker.name.jobArea()} ${faker.name.jobType()}`;

const heroFn = () => ({
  title: faker.company.catchPhrase(),
  subtitle: tagNameFn()
});

// adds 6 months
const dateHelper = string => {
  let date = new Date(Date.parse(string));
  console.log(Date.parse(string));
  let nextDate = date;

  nextDate = new Date(nextDate.setMonth(nextDate.getMonth() + 6));
  console.log(nextDate.toString());
  return nextDate.toString();
};

const experiencesFn = () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let startDate = faker.date.past();
    let exp = {
      order: i + 1,
      companyName: faker.company.companyName(),
      companyUrl: faker.internet.url(),
      jobTitle: faker.name.jobTitle(),
      startDate: Date.parse(faker.date.past()), // fix
      endDate: Date.parse(faker.date.past()),
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
      order: i + 1,
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
      order: i + 1,
      skillTitle: skillName,
      skillPercentage: Math.round(Math.random() * 100)
    };
    arr.push(skill);
  }
  return arr;
};

module.exports = {
  tagNameFn,
  heroFn,
  experiencesFn,
  projectsFn,
  skillsFn
};
