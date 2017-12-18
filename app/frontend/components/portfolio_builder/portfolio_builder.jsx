import React from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import HeroBuilder from './template_components/hero_builder';
import ExperienceBuilder from './template_components/experience_builder';
import ProjectsBuilder from './template_components/projects_builder';
import SkillsBuilder from './template_components/skills_builder';
import ContactBuilder from './template_components/contact_builder';


export default class PortfolioBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTag: "Default",
      tagIdx: 0,
      newTagName: ""
    };
  }
  componentDidMount() {
    console.log("---BUILDER PROPS---");
    console.log(this.props);
    this.props.fetchPortfolio();
  }

  render() {
    return (
      <main className="main flex-start">
        <aside className="editing-tools-container">
          {this.renderEditingTools()}
        </aside>
        <div className="editing-tools-flex-buffer">{' '}</div>
        <article className="portfolio-builder-container">
          <HeroBuilder
            ref={(section) => { this.Hero = section; }}
            selectedTag={this.state.selectedTag}
            updatePortfolio={this.props.updatePortfolio}
            heroSection={ this.props.portfolio ?
              this.props.portfolio.taggedInfo[this.state.tagIdx].heroSection :
              { title: "loading portfolio", subtitle: "loading portfolio"}
            } />
          <ExperienceBuilder
            ref={(section) => { this.Experience = section; }}
            selectedTag={this.state.selectedTag}
            updatePortfolio={this.props.updatePortfolio}
            experienceSection={ this.props.portfolio ?
              this.props.portfolio.taggedInfo[this.state.tagIdx].experienceSection :
              { title: "loading portfolio", subtitle: "loading portfolio"}
            } />
          <ProjectsBuilder
            ref={(section) => { this.Projects = section; }}
            selectedTag={this.state.selectedTag}
            updatePortfolio={this.props.updatePortfolio}
            projectsSection={ this.props.portfolio ?
              this.props.portfolio.taggedInfo[this.state.tagIdx].projectsSection :
              { title: "loading portfolio", subtitle: "loading portfolio"}
            } />
          <SkillsBuilder
            ref={(section) => { this.Skills = section; }}
            selectedTag={this.state.selectedTag}
            updatePortfolio={this.props.updatePortfolio}
            skillsSection={ this.props.portfolio ?
              this.props.portfolio.taggedInfo[this.state.tagIdx].skillsSection :
              { title: "loading portfolio", subtitle: "loading portfolio"}
            } />
          <ContactBuilder
            ref={(section) => { this.Contact = section; }}
            selectedTag={this.state.selectedTag}
            updatePortfolio={this.props.updatePortfolio}
            staticInfo={ this.props.portfolio ?
              this.props.portfolio.staticInfo :
              { linkedIn: "loading portfolio", github: "loading portfolio",
                email: "loading portfolio", address1: "loading portfolio",
                address2: "loading portfolio", city: "loading portfolio",
                state: "loading portfolio", zipCode: "loading portfolio",
                phone: "loading portfolio", bio: "loading portfolio" }
            } />
        </article>
      </main>
    );
  }

  // Must be in same component as the content components for scrolling
  // with react-scroll-to-component without passing refs into child
  // components which is problematic; using a helper render instead
  // https://stackoverflow.com/questions/38864033/react-whats-the-proper-way-of-passing-a-ref-to-a-prop
  renderEditingTools() {
    return(
      <div className="editing-tools">
        <h1>Portfolio Management</h1>
        <h2>Edit different portfolio focuses to tailor content to different job postings.</h2>
        <button className="save-progress-btn">Save Progress</button>
        <form className="editing-tools-tag-form" onSubmit={this.createTag.bind(this)}>
          <p>Choose a portfolio focus to edit</p>
          <select value={this.state.value} onChange={this.props.portfolio ? this.selectNewTag.bind(this) : null }>
            {this.props.portfolio ?
              this.props.portfolio.taggedInfo.map( el => <option value={el.tagName}>{el.tagName}</option> ) :
              <option defaultValue>Loading Portfolio...</option>
            }
          </select>
          <p>or</p>
          <input type="text" placeholder="Choose a new focus (e.g. edutech)" value={this.state.newTagName} onChange={this.update("newTagName")} className='text-input'></input>
          <input type="submit" value="Create new portfolio focus!" className="submit-portfolio-tag-button"></input>
        </form>
        <button className="delete-focus-btn" onClick={this.deleteTag.bind(this)}>Delete current focus</button>
        <h3>Edit a Portfolio Section:</h3>
        <ul className="sections-list">
          <li onClick={() => scrollToComponent(this.Hero, { offset: 0, align: 'top', duration: 500})}>Hero</li>
          <li onClick={() => scrollToComponent(this.Experience, { offset: 0, align: 'top', duration: 500})}>Experience</li>
          <li onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 500})}>Projects</li>
          <li onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 500})}>Skills</li>
          <li onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 500})}>Contact</li>
        </ul>
        <button className="preview-btn">Preview Site</button>
      </div>
    );
  }

  selectNewTag(e) {
    this.setState({
      selectedTag: e.target.value,
      tagIdx: this.findTagIdx(e.target.value)
    });
  }

  findTagIdx(tagName) {
    return this.props.portfolio.taggedInfo.findIndex(
      el => el.tagName === tagName
    );
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  createTag(e) {
    e.preventDefault();
    this.props.createTag(this.state.newTagName);
    this.setState({
      newTagName: ''
    });
  }

  deleteTag(e) {
    e.preventDefault();
    const tagToDelete = this.state.selectedTag;
    this.setState({
      selectedTag: "Default",
      tagIdx: 0,
    });
    this.props.deleteTag(tagToDelete);
  }
}
