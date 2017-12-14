const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _nullStaticInfo = {
  linkedIn: "",
  github: "",
  phone: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: ""
};

const defaultTaggedInfo = {
  tagName: "Default",
  heroSection: {
    title: "",
    subtitle: ""
  },
  experienceSection: {
    focusDescription: "",
    experiences: []
  },
  projectsSection: [],
  skillsSection: {
    skillsParagraphText: "",
    skills: []
  }
};

const schema = new Schema({
  username: { type: String, required: true },
  templateName: { type: String, default: "Flex" },
  staticInfo: { type: Object, default: _nullStaticInfo },
  taggedInfo: { type: Array, default: [defaultTaggedInfo] },
  analytics: { type: Array, default: [] }
});

module.exports = mongoose.model("Portfolio", schema);
