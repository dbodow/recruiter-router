import _ from "lodash";
import React from "react";

class ProjectManagerAside extends React.Component {
  renderTagNames() {
    let tags = this.props.analytics.map(tag => tag.tagName);
    let uniqTags = _.uniq(tags);
    console.log(tags);
    console.log(uniqTags);
    return uniqTags.map((tagName, idx) => (
      <li className="tags-li" key={`tag-li#${idx}`}>
        {tagName}
      </li>
    ));
  }

  renderCompanies() {
    return this.props.analytics.map((tag, idx) => (
      <li className="companies-li" key={`companies-li#${idx}`}>
        {tag.companyName}
      </li>
    ));
  }

  render() {
    return (
      <div className="pm-aside-container pm-flex-2a">
        <h2>Portfolio Manager Aside</h2>
        <div>
          <ul className="tags-ul">{this.renderTagNames()}</ul>
        </div>
        <div>
          <ul className="companies-ul">{this.renderCompanies()}</ul>
        </div>
      </div>
    );
  }
}

export default ProjectManagerAside;
