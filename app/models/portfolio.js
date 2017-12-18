const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _nullStaticInfo = {
  linkedIn: "www.linkedin.com",
  github: "www.github.com",
  phone: "555-123-4567",
  email: "email@address.com",
  address1: "123 Pleasant Street",
  address2: "Apt 3W",
  city: "San Francisco",
  state: "California",
  zipCode: "94000",
  bio: "I am your ideal job candidate."
};

const defaultTaggedInfo = {
  tagName: "Default",
  heroSection: {
    title: "Use a hero title to focus on what differentiates you",
    subtitle: "Back this up with some more details in a subtitle"
  },
  experienceSection: {
    focusDescription: "Draw focus to a key aspect of your experience",
    experiences: []
  },
  projectsSection: {
    focusDescription: "Draw focus to a key theme of your projects",
    projects: []
  },
  skillsSection: {
    focusDescription: "Draw focus to a key aspect of your skillset",
    skillsParagraphText: "Tie your skills together in detail.",
    skills: [
      { skillTitle: "Skill 1", skillPercentage: 50 },
      { skillTitle: "Skill 2", skillPercentage: 50 },
      { skillTitle: "Skill 3", skillPercentage: 50 },
      { skillTitle: "Skill 4", skillPercentage: 50 }
    ]
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
