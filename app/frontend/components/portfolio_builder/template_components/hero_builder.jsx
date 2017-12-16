import React from 'react';

export default class HeroBuilder extends React.Component {
  render() {
    return (
      <article className="hero-container">
        <form className="hero-form">
          <p>Type to edit</p>
          <input
            className="hero-title"
            name="hero-title"
            defaultValue="I am a Software Developer"
            alt="The hero section title is a great place to make a strong first impression."
            type="text"/>
          <input
            className="hero-subtitle"
            name="hero-subtitle"
            defaultValue="I write user-oriented software to cultivate deeper relationships with customers."
            alt="The hero section subtitle is a great place to establish a focus of your skillset."
            type="text"/>
        </form>
      </article>
    );
  }
}
