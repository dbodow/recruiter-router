var stringify = require("json-stringify-safe");
const Portfolio = require("../models/portfolio");
const mongoose = require("mongoose");

const obj = {
  _id: "5a33577050e73553c2499efe",
  username: "Emerson.Pouros",
  analytics: [],
  taggedInfo: [
    {
      skillsSection: {
        skills: [],
        skillsParagraphText: ""
      },
      projectsSection: [],
      experienceSection: {
        experiences: [],
        focusDescription: ""
      },
      heroSection: {
        subtitle: "",
        title: ""
      },
      tagName: "Default"
    }
  ],
  staticInfo: {
    zipCode: "",
    state: "",
    city: "",
    address2: "",
    address1: "",
    email: "",
    phone: "",
    github: "",
    linkedIn: ""
  },
  templateName: "Flex",
  __v: 0
};

console.log(JSON.stringify(obj));
