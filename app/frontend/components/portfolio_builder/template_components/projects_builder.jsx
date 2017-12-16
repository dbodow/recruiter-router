import React from 'react';

export default class ProjectsBuidler extends React.Component {
  render() {
    return (
      <article className="projects-container">
        <form className="focusDescription-form">
          <h1>Projects</h1>
          <input
            className="projects-focusDescription"
            name="projects-focusDescription"
            defaultValue="Describe a focus of your projects"
            type="text"/>
        </form>
        <div className="projects-array">
          <div className="array-form-container project">
            <form className="array-form">
              <h2>Manage Project</h2>
              <input
                className="project-projectTitle"
                name="project-projectTitle"
                defaultValue="Project Title"
                type="text"/>
              <input
                className="project-projectDescription"
                name="project-projectDescription"
                defaultValue="Describe a project highlight."
                type="text"/>
              <input
                className="project-projectUrl"
                name="project-projectUrl"
                defaultValue="www.link-to-project.com"
                type="url"/>
              <input
                className="project-githubUrl"
                name="project-githubUrl"
                defaultValue="www.github.com/you"
                type="url"/>
            </form>
          </div>
        </div>
      </article>
    );
  }
}
