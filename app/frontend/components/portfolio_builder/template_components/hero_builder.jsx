import React from 'react';

export default class HeroBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTag: "Default",
      title: "loading portfolio...",
      subtitle: "loading portfolio...",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedTag: nextProps.selectedTag,
      title: nextProps.heroSection.title,
      subtitle: nextProps.heroSection.subtitle
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePortfolio({
      title: this.state.title,
      subtitle: this.state.subtitle
    }, "heroSection", this.state.selectedTag);
  }

  render() {
    return (
      <article className="hero-container">
        <form className="hero-form" onSubmit={this.handleSubmit}>
          <p>Type to edit</p>
          <input
            className="hero-title"
            name="hero-title"
            onChange={this.update("title")}
            value={this.state.title}
            alt="The hero section title is a great place to make a strong first impression."
            type="text"/>
          <input
            className="hero-subtitle"
            name="hero-subtitle"
            onChange={this.update("subtitle")}
            value={this.state.subtitle}
            alt="The hero section subtitle is a great place to establish a focus of your skillset."
            type="text"/>
        </form>
        <button
          className="section-save-button"
          onClick={this.handleSubmit}>
          Save Section
        </button>
      </article>
    );
  }
}
