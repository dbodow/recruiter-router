import React from 'react';

export default class ExperienceBuilder extends React.Component {
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
        <div className="experience-array">
          <div className="array-form-container experience">
            <form className="array-form">
              <input
                className="experience-jobTitle"
                name="experience-jobTitle"
                defaultValue="Job Title"
                type="text"/>
              <input
                className="experience-companyName"
                name="experience-companyName"
                defaultValue="Company Name"
                type="text"/>
              <div className="date-range-container">
                <div className="date-input-container">
                  Start Date
                  <br/>
                  <input
                    className="experience-date"
                    name="experience-start-date"
                    type="date" />
                </div>
                <div className="date-input-container">
                  End Date
                  <br/>
                  <input
                    className="experience-date"
                    name="experience-end-date"
                    type="date" />
                </div>
              </div>
              <input
                className="companyUrl"
                name="companyUrl"
                defaultValue="www.link-to-company.com"
                type="url"/>
            </form>
          </div>
          <div className="array-form-container experience-hover">
            <form className="array-form">
              <input
                className="experience-hoverTitle"
                name="experience-hoverTitle"
                defaultValue="Job summary heading"
                type="text"/>
              <input
                className="experience-hoverDescription"
                name="experience-hoverDescription"
                defaultValue="Job summary description"
                type="text"/>
            </form>
          </div>
        </div>
      </article>
    );
  }
}
