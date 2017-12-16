import React from 'react';

export default class SkillsBuilder extends React.Component {
  render() {
    return (
      <article className="skills-container">
        <form className="focusDescription-form">
          <h1>Skills</h1>
          <input
            className="skills-focusDescription"
            name="skills-focusDescription"
            defaultValue="Describe a focus of your skillset"
            type="text"/>
        </form>
        <div className="skills-content-forms-container">
          <form className="focusDescription-form skill-description-form">
            <h2>Bio</h2>
            <textarea
              name="contact-long-description"
              defaultValue="Leave a bio to tie together your skills.">
            </textarea>
          </form>
          <form className="skill-graphs-form">
            <h2>Featured Skills</h2>
            <div className="skill-datum">
              <input
                className="skill-name"
                name="skill-name"
                defaultValue="Name a skill"
                type="text"/>
              <input
                className="skill-slider"
                name="skill-slider"
                type="range"
                min="0"
                max="100"
              step="5"/>
            </div>
            <div className="skill-datum">
              <input
                className="skill-name"
                name="skill-name"
                defaultValue="Name a skill"
                type="text"/>
              <input
                className="skill-slider"
                name="skill-slider"
                type="range"
                min="0"
                max="100"
              step="5"/>
            </div>
            <div className="skill-datum">
              <input
                className="skill-name"
                name="skill-name"
                defaultValue="Name a skill"
                type="text"/>
              <input
                className="skill-slider"
                name="skill-slider"
                type="range"
                min="0"
                max="100"
              step="5"/>
            </div>
            <div className="skill-datum">
              <input
                className="skill-name"
                name="skill-name"
                defaultValue="Name a skill"
                type="text"/>
              <input
                className="skill-slider"
                name="skill-slider"
                type="range"
                min="0"
                max="100"
              step="5"/>
            </div>
          </form>
        </div>
      </article>
    );
  }
}
