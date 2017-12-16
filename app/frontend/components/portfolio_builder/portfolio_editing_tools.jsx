import React from 'react';

export default class PortfolioEditingTools extends React.Component {
  render() {
    return(
      <div className="editing-tools">
        <h1>Portfolio Management</h1>
        <h2>Edit different portfolio focuses to tailor content to different job postings.</h2>
        <button className="save-progress-btn">Save Progress</button>
        <form className="editing-tools-tag-form">
          <select>
            <option defaultValue>Select a portfolio focus</option>
            <option value="Default">Default</option>
          </select>
          <p>or</p>
          <input type="text" placeholder="Choose a new focus (e.g. edutech)" className='text-input'></input>
          <input type="submit" value="Create new portfolio focus!"></input>
        </form>
        <button className="delete-focus-btn">Delete current focus</button>
        <h3>Edit a Portfolio Section:</h3>
        <ul className="sections-list">
          <li>Hero</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
        <button className="preview-btn">Preview Site</button>
      </div>
    );
  }
}
