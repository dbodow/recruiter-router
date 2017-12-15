import React from 'react';
import { Link } from 'react-router-dom';

import HeroBuilder from './template_components/hero_builder';
import ExperienceBuilder from './template_components/experience_builder';
import ProjectsBuilder from './template_components/projects_builder';
import SkillsBuilder from './template_components/skills_builder';
import ContactBuilder from './template_components/contact_builder';

export default class PortfolioBuilderContent extends React.Component {
  render() {
    return (
      <div className="portfolio-builder-content">
        <HeroBuilder />
        <ExperienceBuilder />
        <ProjectsBuilder />
        <SkillsBuilder />
        <ContactBuilder />
      </div>
    );
  }
}
