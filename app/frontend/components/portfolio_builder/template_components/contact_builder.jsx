import React from 'react';

export default class ContactBuilder extends React.Component {
  render() {
    return (
      <article className="contact-container">
        <form className="focusDescription-form contact-links-form">
          <h1>Contact</h1>
          <h2>Personal Links</h2>
          <div className="contact-urls-inputs">
            <div className="contact-url-input-container">
              <i className="fa fa-linkedin fa-2x" aria-hidden="true"/>
              <input
                className="linkedInUrl"
                name="linkedInUrl"
                defaultValue="www.linkedin.com"
                type="url"/>
            </div>
            <div className="contact-url-input-container">
              <i className="fa fa-github-alt fa-2x" aria-hidden="true"/>
              <input
                className="githubUrl"
                name="githubUrl"
                defaultValue="www.github.com"
                type="url"/>
            </div>
            <div className="contact-url-input-container">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"/>
              <input
                className="email-input"
                name="contact-email-input"
                defaultValue="you@email.com"
                type="email"/>
            </div>
          </div>
          <h2>Location</h2>
          <div className="locations-inputs">
            <div className="address-input-container">
              <input
                className="address-input"
                name="contact-address1-input"
                defaultValue="Address 1"
                type="text"/>
              <input
                className="address-input"
                name="contact-address2-input"
                defaultValue="Address 2"
                type="text"/>
            </div>
            <div className="location-input-container">
              <input
                className="city-input"
                name="contact-city-input"
                defaultValue="City"
                type="text"/>
              <input
                className="state-input"
                name="contact-state-input"
                defaultValue="State"
                type="text"/>
              <input
                className="zip-input"
                name="contact-zip-input"
                defaultValue="Zip Code"
                type="text"/>
            </div>
          </div>
          <h2>Bio</h2>
          <textarea
            name="contact-long-description"
            defaultValue="They've scrolled to the bottom. Go wild with a longer description of yourself!">
          </textarea>
        </form>
      </article>
    );
  }
}
