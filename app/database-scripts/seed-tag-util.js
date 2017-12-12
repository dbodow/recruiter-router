const faker = require("faker");

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

module.exports = {
  tagNameFn,
  heroFn,
  experiencesFn,
  projectsFn,
  skillsFn
};
