import React from 'react';
import merge from 'lodash/merge';
import shortid from 'shortid';

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
        projectURL: "http://www.live-project.com",
        githubURL: "http://github.com/project"
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
    console.log(section);
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
    const newProject = merge({}, this.state.newProject);
    const projects = this.state.projects.concat([newProject]);
    this.setState({
      projects,
      newProject: {
        projectTitle: "Title",
        projectDescription: "Description",
        projectURL: "http://www.live-project.com",
        githubURL: "http://github.com/project",
      }
    });
  }

  handleProjectDeletion(i) {
    return e => {
      const projects = this.state.projects.slice(0,i)
      .concat(this.state.projects.slice(i+1));
      console.log(projects);
      this.setState({ projects });
    };
  }

  handleProjectChange(field, i) {
    return e => {
      const projects = Object.assign(this.state.projects);
      projects[i][field] = e.target.value;
      this.setState({ projects });
    };
  }

  handleNewProjectChange(field) {
    return e => {
      const newProject = merge({}, this.state.newProject);
      newProject[field] = e.target.value;
      this.setState({ newProject });
    };
  }

  renderProjectForm(i) {
    return (
      <form className="array-form" key={shortid.generate()}>
        <h2>Manage Project</h2>
        <input
          className="project-projectTitle"
          name={`project-projectTitle-${i}`}
          onChange={this.handleProjectChange('projectTitle', i)}
          value={this.state.projects[i].projectTitle}
          type="text"/>
        <input
          className="project-projectDescription"
          name={`project-projectDescription-${i}`}
          onChange={this.handleProjectChange('projectDescription', i)}
          value={this.state.projects[i].projectDescription}
          type="text"/>
        <input
          className="project-projectUrl"
          name={`project-projectUrl-${i}`}
          onChange={this.handleProjectChange('projectURL', i)}
          value={this.state.projects[i].projectURL}
          type="url"/>
        <input
          className="project-githubUrl"
          name={`project-githubUrl-${i}`}
          onChange={this.handleProjectChange('githubURL', i)}
          value={this.state.projects[i].githubURL}
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
        className="array-form new-array-form" >
        <h2>Create Project</h2>
        <input
          className="project-projectTitle"
          name={`project-projectTitle-${this.state.projects.length}`}
          value={this.state.newProject.projectTitle}
          onChange={this.handleNewProjectChange('projectTitle')}
          type="text"/>
        <input
          className="project-projectDescription"
          name={`project-projectDescription-${this.state.projects.length}`}
          value={this.state.newProject.projectDescription}
          onChange={this.handleNewProjectChange('projectDescription')}
          type="text"/>
        <input
          className="project-projectUrl"
          name={`project-projectUrl-${this.state.projects.length}`}
          value={this.state.newProject.projectURL}
          onChange={this.handleNewProjectChange('projectURL')}
          type="url"/>
        <input
          className="project-githubUrl"
          name={`project-githubUrl-${this.state.projects.length}`}
          value={this.state.newProject.githubURL}
          onChange={this.handleNewProjectChange('githubURL')}
          type="url"/>
        <button
          className="new-array-item-btn"
          onClick={this.createProject.bind(this)}>
          Add Project
        </button>
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
