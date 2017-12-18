import React from 'react';

export default class ContactBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      linkedIn: "loading portfolio...",
      github: "loading portfolio...",
      email: "loading portfolio...",
      address1: "loading portfolio...",
      address2: "loading portfolio...",
      city: "loading portfolio...",
      state: "loading portfolio...",
      zipCode: "loading portfolio...",
      bio: "loading portfolio...",
      phone: "loading portfolio..."
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      linkedIn: nextProps.staticInfo.linkedIn,
      github: nextProps.staticInfo.github,
      email: nextProps.staticInfo.email,
      address1: nextProps.staticInfo.address1,
      address2: nextProps.staticInfo.address2,
      city: nextProps.staticInfo.city,
      state: nextProps.staticInfo.state,
      zipCode: nextProps.staticInfo.zipCode,
      bio: nextProps.staticInfo.bio,
      phone: nextProps.staticInfo.phone
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
    this.props.updatePortfolio(this.state,
      "staticInfo");
  }

  render() {
    return (
      <article className="contact-container">
        <form
          className="focusDescription-form contact-links-form">
          <h1>Contact</h1>
          <h2>Personal Links</h2>
          <div className="contact-urls-inputs">
            <div className="contact-url-input-container">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"/>
              <input
                className="linkedInUrl"
                name="linkedInUrl"
                onChange={this.update("linkedIn")}
                value={this.state.linkedIn}
                type="url"/>
            </div>
            <div className="contact-url-input-container">
              <i className="fa fa-github-alt fa-2x" aria-hidden="true"/>
              <input
                className="githubUrl"
                name="githubUrl"
                onChange={this.update("github")}
                value={this.state.github}
                type="url"/>
            </div>
            <div className="contact-url-input-container">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"/>
              <input
                className="email-input"
                name="contact-email-input"
                onChange={this.update("email")}
                value={this.state.email}
                type="email"/>
            </div>
            <div className="contact-url-input-container">
              <i className="fa fa-phone fa-2x" aria-hidden="true"/>
              <input
                className="phone-input"
                name="contact-phone-input"
                onChange={this.update("phone")}
                value={this.state.phone}
                type="tel"/>
            </div>
          </div>
          <h2>Location</h2>
          <div className="locations-inputs">
            <div className="address-input-container">
              <input
                className="address-input"
                name="contact-address1-input"
                onChange={this.update("address1")}
                value={this.state.address1}
                type="text"/>
              <input
                className="address-input"
                name="contact-address2-input"
                onChange={this.update("address2")}
                value={this.state.address2}
                type="text"/>
            </div>
            <div className="location-input-container">
              <input
                className="city-input"
                name="contact-city-input"
                onChange={this.update("city")}
                value={this.state.city}
                type="text"/>
              <input
                className="state-input"
                name="contact-state-input"
                onChange={this.update("state")}
                value={this.state.state}
                type="text"/>
              <input
                className="zip-input"
                name="contact-zip-input"
                onChange={this.update("zipCode")}
                value={this.state.zipCode}
                type="text"/>
            </div>
          </div>
          <h2>Bio</h2>
          <textarea
            name="contact-long-description"
            onChange={this.update("bio")}
            value={this.state.bio}>
          </textarea>
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
