import React from 'react';
import merge from 'lodash/merge';

export default class ProjectsBuidler extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTag: "Default",
      focusDescription: "loading portfolio...",
      projects: [],
      newProject: {
        projectTitle: "Title",
        projectDescription: "Description",
        projectURL: "Live Project URL",
        githubURL: "Github URL",
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedTag: nextProps.selectedTag,
      focusDescription: nextProps.projectsSection.focusDescription,
      projects: nextProps.projectsSection.projects
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const section = merge({}, this.state);
    delete section.selectedTag;
    delete section.newProject;
    this.props.updatePortfolio(section, "projectsSection",
      this.state.selectedTag);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  createProject(e) {
    e.preventDefault();
    const projects = this.state.projects.concat([this.state.newProject]);
    this.setState({
      projects,
      newProject: {
        projectTitle: "Title",
        projectDescription: "Description",
        projectURL: "Live Project URL",
        githubURL: "Github URL",
      }
    });
  }

  handleProjectDeletion(i) {

  }

  renderProjectForm(i) {
    return (
      <form className="array-form">
        <h2>Manage Project</h2>
        <input
          className="project-projectTitle"
          name={`project-projectTitle-${i}`}
          value={this.state.projects[i].projectTitle}
          type="text"/>
        <input
          className="project-projectDescription"
          name={`project-projectDescription-${i}`}
          value={this.state.projects[i].projectDescription}
          type="text"/>
        <input
          className="project-projectUrl"
          name={`project-projectUrl-${i}`}
          value={this.state.projects[i].projectUrl}
          type="url"/>
        <input
          className="project-githubUrl"
          name={`project-githubUrl-${i}`}
          value={this.state.projects[i].githubUrl}
          type="url"/>
        <button
          className="delete-array-item-btn"
          onClick={this.handleProjectDeletion(i)}>
          Remove Project
        </button>
      </form>
    );
  }

  renderNewProjectForm() {
    return (
      <form
        className="array-form new-form"
        onSubmit={this.createProject.bind(this)}>
        <h2>Manage Project</h2>
        <input
          className="project-projectTitle"
          name={`project-projectTitle-${this.state.projects.length}`}
          value={this.state.newProject.projectTitle}
          type="text"/>
        <input
          className="project-projectDescription"
          name={`project-projectDescription-${this.state.projects.length}`}
          value={this.state.newProject.projectDescription}
          type="text"/>
        <input
          className="project-projectUrl"
          name={`project-projectUrl-${this.state.projects.length}`}
          value={this.state.newProject.projectUrl}
          type="url"/>
        <input
          className="project-githubUrl"
          name={`project-githubUrl-${this.state.projects.length}`}
          value={this.state.newProject.githubUrl}
          type="url"/>
        <input
          className="new-array-item-btn"
          value="Add Project"
          type="submit"/>
      </form>
    );
  }

  render() {
    return (
      <article className="projects-container">
        <form className="focusDescription-form">
          <h1>Projects</h1>
          <input
            className="projects-focusDescription"
            name="projects-focusDescription"
            value={this.state.focusDescription}
            onChange={this.update('focusDescription')}
            type="text"/>
        </form>
        <div className="projects-array">
          <div className="array-form-container project">
            {this.state.projects.map((project, idx) => (
              this.renderProjectForm(idx)
            ))}
            {this.renderNewProjectForm()}
          </div>
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
