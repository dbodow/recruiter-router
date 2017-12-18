import React from 'react';
import merge from 'lodash/merge';
import shortid from 'shortid';

export default class ExperienceBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTag: "Default",
      focusDescription: "loading portfolio...",
      experiences: [],
      newExperience: {
        hoverTitle: "Job Summary",
        hoverDescription: "Job Description",
        companyUrl: "http://www.company-website.com",
        jobTitle: "Job Title",
        companyName: "Company Name",
        startDate: Date.now(),
        endDate: Date.now()
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedTag: nextProps.selectedTag,
      focusDescription: nextProps.experienceSection.focusDescription,
      experiences: nextProps.experienceSection.experiences
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const section = merge({}, this.state);
    delete section.selectedTag;
    delete section.newExperience;
    this.props.updatePortfolio(section, "experienceSection",
      this.state.selectedTag);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  createExperience(e) {
    e.preventDefault();
    const newExperience = merge({}, this.state.newExperience);
    const experiences = this.state.experiences.concat([newExperience]);
    this.setState({
      experiences,
      newExperience: {
        hoverTitle: "Job Summary",
        hoverDescription: "Job Description",
        companyUrl: "http://www.company-website.com",
        jobTitle: "Job Title",
        companyName: "Company Name",
        startDate: Date.now(),
        endDate: Date.now()
      }
    });
  }

  handleExperienceDeletion(i) {
    return e => {
      const experiences = this.state.experiences.slice(0,i)
      .concat(this.state.experiences.slice(i+1));
      this.setState({ experiences });
    };
  }

  handleExperienceChange(field, i) {
    return e => {
      const experiences = Object.assign(this.state.experiences);
      experiences[i][field] = e.target.value;
      this.setState({ experiences });
    };
  }

  handleNewExperienceChange(field) {
    return e => {
      const newExperience = merge({}, this.state.newExperience);
      newExperience[field] = e.target.value;
      this.setState({ newExperience });
    };
  }

  renderExperienceForm(i) {
    return (
      <div className="bold-container max-width">
      <div className="experience-array" key={shortid.generate()}>
        <div className="array-form-container experience">
          <form className="array-form">
            <h2>Manage Experience Overview</h2>
            <input
              className="experience-jobTitle"
              name={`experience-jobTitle-${i}`}
              onChange={this.handleExperienceChange('jobTitle', i)}
              value={this.state.experiences[i].jobTitle}
              type="text"/>
            <input
              className="experience-companyName"
              name={`experience-companyName-${i}`}
              onChange={this.handleExperienceChange('companyName', i)}
              value={this.state.experiences[i].companyName}
              type="text"/>
            <div className="date-range-container">
              <div className="date-input-container">
                Start Date
                <br/>
                <input
                  className="experience-date"
                  name={`experience-start-date-${i}`}
                  onChange={this.handleExperienceChange('startDate', i)}
                  value={this.state.experiences[i].startDate}
                  type="date" />
              </div>
              <div className="date-input-container">
                End Date
                <br/>
                <input
                  className="experience-date"
                  name={`experience-end-date-${i}`}
                  onChange={this.handleExperienceChange('endDate', i)}
                  value={this.state.experiences[i].endDate}
                  type="date" />
              </div>
            </div>
            <input
              className="companyUrl"
              name={`experience-companyUrl-${i}`}
              onChange={this.handleExperienceChange('companyUrl', i)}
              value={this.state.experiences[i].companyUrl}
              type="url"/>
          </form>
        </div>
        <div className="array-form-container experience-hover">
          <form className="array-form">
            <h2>Manage Experience Details</h2>
            <input
              className="experience-hoverTitle"
              name={`experience-hoverTitle-${i}`}
              onChange={this.handleExperienceChange('hoverTitle', i)}
              value={this.state.experiences[i].hoverTitle}
              type="text"/>
            <input
              className="experience-hoverDescription"
              name={`experience-hoverDescription-${i}`}
              onChange={this.handleExperienceChange('hoverDescription', i)}
              value={this.state.experiences[i].hoverDescription}
              type="text"/>
          </form>
        </div>
      </div>
      <button
        className="delete-array-item-btn spaced-btn"
        onClick={this.handleExperienceDeletion(i)}>
        Remove Experience
      </button>
      </div>
    );
  }

  renderNewExperienceForm() {
    return (
      <div className="bold-container max-width">
      <div className="experience-array">
        <div className="array-form-container experience">
          <form className="array-form new-array-form">
            <h2>New Experience Overview</h2>
            <input
              className="experience-jobTitle"
              name={`experience-jobTitle-${this.state.experiences.length}`}
              value={this.state.newExperience.jobTitle}
              onChange={this.handleNewExperienceChange('jobTitle')}
              type="text"/>
            <input
              className="experience-companyName"
              name={`experience-companyName-${this.state.experiences.length}`}
              value={this.state.newExperience.companyName}
              onChange={this.handleNewExperienceChange('companyName')}
              type="text"/>
            <div className="date-range-container">
              <div className="date-input-container">
                Start Date
                <br/>
                <input
                  className="experience-date"
                  name={`experience-start-date-${this.state.experiences.length}`}
                  value={this.state.newExperience.startDate}
                  onChange={this.handleNewExperienceChange('startDate')}
                  type="date" />
              </div>
              <div className="date-input-container">
                End Date
                <br/>
                <input
                  className="experience-date"
                  name={`experience-end-date-${this.state.experiences.length}`}
                  value={this.state.newExperience.endDate}
                  onChange={this.handleNewExperienceChange('endDate')}
                  type="date" />
              </div>
            </div>
            <input
              className="companyUrl"
              name={`experience-companyUrl-${this.state.experiences.length}`}
              value={this.state.newExperience.companyUrl}
              onChange={this.handleNewExperienceChange('companyUrl')}
              type="url"/>
          </form>
        </div>
        <div className="array-form-container experience-hover">
          <form className="array-form new-array-form">
            <h2>New Experience Details</h2>
            <input
              className="experience-hoverTitle"
              name={`experience-hoverTitle-${this.state.experiences.length}`}
              value={this.state.newExperience.hoverTitle}
              onChange={this.handleNewExperienceChange('hoverTitle')}
              type="text"/>
            <input
              className="experience-hoverDescription"
              name={`experience-hoverDescription-${this.state.experiences.length}`}
              value={this.state.newExperience.hoverDescription}
              onChange={this.handleNewExperienceChange('hoverDescription')}
              type="text"/>
          </form>
        </div>
      </div>
      <button
        className="new-array-item-btn spaced-btn"
        onClick={this.createExperience.bind(this)}>
        Add Experience
      </button>
      </div>
    );
  }

  render() {
    return (
      <article className="experience-container">
        <form className="focusDescription-form">
          <h1>Experience</h1>
          <input
            className="experience-focusDescription"
            name="experience-focusDescription"
            defaultValue="Describe a focus of your experience"
            type="text"/>
        </form>
        <div className="experience">
          {this.state.experiences.map((experience, idx) => (
            this.renderExperienceForm(idx)
          ))}
          {this.renderNewExperienceForm()}
        </div>
        <button
          className="section-save-button"
          onClick={this.handleSubmit}>
          Save Section
        </button>
      </article>
    );
  }
}
