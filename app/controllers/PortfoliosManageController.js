const merge = require('lodash/merge');

const Portfolio = require("../models/portfolio");
const User = require("../models/User");
const mongoose = require("mongoose").set('debug', true);
const passport = require("passport");

const portfoliosManageController = {};

const _nullTaggedInfo = tagName => ({
  tagName,
  heroSection: {
    title: "Use the hero title differentiates yourself",
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
});

portfoliosManageController.getPortfolio = (req, res) => {
  const username = req.user.username;

  const returnPortfolio = portfolio => {
    return res.status(200).json({ portfolio });
  };

  const returnError = e => {
    return res.status(e.status).json(["Cannot find portfolio"]);
  };

  Portfolio.findOne({ username })
    .exec()
    .then(returnPortfolio, returnError);
};

portfoliosManageController.createTag = (req, res) => {
  const username = req.user.username;
  const tagName = req.body.tagName;

  const returnPortfolio = portfolio => {
    return res.status(200).json({ portfolio });
  };

  const returnError = e => {
    return res.status(422).json(["Cannot create tag"]);
  };

  const addTag = portfolio => {
    const taggedInfo = portfolio.taggedInfo;
    const tagIdx = taggedInfo.findIndex(el => {
      console.log(el.tagName);
      return el.tagName === tagName;
    });
    if (tagIdx !== -1) return res.status(422).json(["Tag already exists"]);

    portfolio.set({taggedInfo: portfolio.taggedInfo.concat(_nullTaggedInfo(tagName))});
    portfolio.save( (err, updatedPortfolio) => {
      if (err) return returnError(err);
      res.status(200).json({ portfolio: updatedPortfolio });
    });
  };

  Portfolio.findOne({ username })
    .exec()
    .then(addTag, returnError);
};

portfoliosManageController.deleteTag = (req, res) => {
  const username = req.user.username;
  const tagName = req.body.tagName;
  if (tagName === "Default") return res.status(422).json(["Cannot delete default tag"]);

  const returnPortfolio = portfolio => {
    return res.status(200).json({ portfolio });
  };
  const returnError = e => {
    return res.status(422).json(["Cannot create tag"]);
  };

  console.log('tagName:', tagName);
  const deleteTag = portfolio => {
    const taggedInfo = portfolio.taggedInfo;
    const tagIdx = taggedInfo.findIndex(el => {
      console.log(el.tagName);
      return el.tagName === tagName;
    });
    console.log(taggedInfo, tagIdx);
    if (tagIdx === -1) return res.status(404).json(["Tag not found"]);
    const newTaggedInfo = taggedInfo.slice(0, tagIdx).concat(taggedInfo.slice(tagIdx + 1));
    portfolio.set({ taggedInfo: newTaggedInfo });
    portfolio.save( (err, updatedPortfolio) => {
      if (err) return returnError(err);
      res.status(200).json({ portfolio: updatedPortfolio });
    });
  };

  Portfolio.findOne({ username })
    .exec()
    .then(deleteTag, returnError);
};

portfoliosManageController.updatePortfolio = (req, res) => {
  const username = req.user.username;
  const portfolioSection = JSON.parse(req.body.portfolioSection);
  const sectionName = req.body.sectionName;
  const tagName = req.body.tagName;

  const returnPortfolio = portfolio => {
    return res.status(200).json({ portfolio });
  };

  const returnError = e => {
    return res.status(422).json(["Portfolio update failed"]);
  };

  const updatePortfolio = portfolio => {
    if (sectionName === 'staticInfo') {
      portfolio.set({ staticInfo: portfolioSection });
    } else {
      const taggedInfo = portfolio.taggedInfo;
      const tagIdx = taggedInfo.findIndex(el => {
        return el.tagName === tagName;
      });

      if (tagIdx === -1) return res.status(422).json(["Tag does not exist"]);

      const replacementTaggedInfo = [merge({}, taggedInfo[tagIdx], {[sectionName]: portfolioSection})];
      const newTaggedInfos = taggedInfo.slice(0, tagIdx).concat(taggedInfo.slice(tagIdx + 1)).concat(replacementTaggedInfo);
      portfolio.set({ taggedInfo: newTaggedInfos });
    }

    portfolio.save( (err, updatedPortfolio) => {
      if (err) {
        console.log(err);
        return returnError(err);
      }
      res.status(200).json({ portfolio: updatedPortfolio });
    });
  };

  Portfolio.findOne({ username })
    .exec()
    .then(updatePortfolio, returnError);
};

module.exports = portfoliosManageController;
