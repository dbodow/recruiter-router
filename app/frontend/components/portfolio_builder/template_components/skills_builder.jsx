import React from 'react';
import merge from 'lodash/merge';

export default class SkillsBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTag: "Default",
      skillsParagraphText: "loading portfolio...",
      focusDescription: "loading portfolio...",
      skills: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedTag: nextProps.selectedTag,
      skillsParagraphText: nextProps.skillsSection.skillsParagraphText,
      focusDescription: nextProps.skillsSection.focusDescription,
      skills: nextProps.skillsSection.skills
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const section = merge({}, this.state);
    delete section.selectedTag;
    this.props.updatePortfolio(section, "skillsSection",
      this.state.selectedTag);
  }

  renderSkillDatum(i) {
    return (
      <div className="skill-datum" key={i}>
        <input
          className="skill-name"
          name={`skill-name-${i}`}
          value={this.state.skills[i].skillTitle}
          onChange={this.handleSkillNameChange.bind(this, i)}
          type="text"/>
        <input
          className="skill-slider"
          name={`skill-slider-${i}`}
          type="range"
          min="0"
          max="100"
          value={this.state.skills[i].skillPercentage}
          onChange={this.handleSkillValueChange.bind(this, i)}
        step="5"/>
      </div>
    );
  }

  handleSkillNameChange(i, e) {
    const skills = Object.assign(this.state.skills);
    skills[i]['skillTitle'] = e.target.value;
    this.setState({});
  }

  handleSkillValueChange(i, e) {
    const skills = Object.assign(this.state.skills);
    skills[i]['skillPercentage'] = e.target.value;
    this.setState({});
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  render() {
    return (
      <article className="skills-container">
        <form className="focusDescription-form">
          <h1>Skills</h1>
          <input
            className="skills-focusDescription"
            name="skills-focusDescription"
            value={this.state.focusDescription}
            onChange={this.update('focusDescription')}
            type="text"/>
        </form>
        <div className="skills-content-forms-container">
          <form className="focusDescription-form skill-description-form">
            <h2>Bio</h2>
            <textarea
              name="contact-long-description"
              value={this.state.skillsParagraphText}
              onChange={this.update('skillsParagraphText')}>
            </textarea>
          </form>
          <form className="skill-graphs-form">
            <h2>Featured Skills</h2>
            {this.state.skills.map((skill, idx) => (
              this.renderSkillDatum(idx)
            ))}
          </form>
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
