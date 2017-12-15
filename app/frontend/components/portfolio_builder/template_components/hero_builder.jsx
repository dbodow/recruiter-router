import React from 'react';

export default class HeroBuilder extends React.Component {
  render() {
    return (
      <article className="hero-container">
        <form className="hero-form">
          <p>Type to edit</p>
          <input className="hero-title" name="hero-title" defaultValue="Hero Title"/>
          <input className="hero-subtitle" name="hero-subtitle" defaultValue="Hero Subtitle"/>
        </form>
      </article>
    );
  }
}
