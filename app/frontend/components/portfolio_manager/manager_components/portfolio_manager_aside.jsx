import _ from "lodash";
import React from "react";
import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";

class ProjectManagerAside extends React.Component {
  renderTagNames() {
    let tags = this.props.analytics.map(tag => tag.tagName);
    let uniqTags = _.uniq(tags);
    console.log(tags);
    console.log(uniqTags);
    return uniqTags.map((tagName, idx) => (
      <li className="tags-li" key={`tag-li#${idx}`}>
        <MenuItem>{tagName}</MenuItem>
      </li>
    ));
  }

  renderCompanies() {
    return this.props.analytics.map((tag, idx) => (
      <li className="companies-li" key={`companies-li#${idx}`}>
        <MenuItem>{tag.companyName}</MenuItem>
      </li>
    ));
  }

  handleSelection() {
    console.log("Hello");
  }

  render() {
    return (
      <div className="pm-aside-container pm-flex-2a">
        <h2>Portfolio Manager Aside</h2>
        <div>
          <Wrapper onSelection={this.handleSelection}>
            <Button>tags</Button>
            <Menu>
              <ul className="tags-ul">{this.renderTagNames()}</ul>
            </Menu>
          </Wrapper>
        </div>
        <div>
          <Wrapper onSelection={this.handleSelection}>
            <Button>companies</Button>
            <Menu>
              <ul className="companies-ul">{this.renderCompanies()}</ul>
            </Menu>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default ProjectManagerAside;
