import React from "react";
import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";

export default class LinksForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      companyName: "",
      tagName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPortfolio().then(() => this.setState({ loading: false }));
  }

  render() {
    if (!this.state.loading) {
      const menuItemWords = this.props.portfolio.taggedInfo.map(
        tagObj => tagObj.tagName
      );
      const menuItems = menuItemWords.map((word, i) => {
        return (
          <li key={i}>
            <MenuItem className='tags-li'>
              {word}
            </MenuItem>
          </li>
        );
      });
      return (
        <div className="main page-width flex-center">
          <div className="links-manager-container">
            <form onSubmit={this.handleSubmit} className="links-manager-form">
              <input type="text" placeholder="enter company name" value={this.state.companyName} onChange={this.update("companyName")} className="company-name-input"></input>
                <Wrapper onSelection={this.handleSelection("tagName")}>
                  <Button className='tags-btn'>
                    show tags
                  </Button>
                  <Menu className='tags-ul'>
                    <ul>{menuItems}</ul>
                  </Menu>
                </Wrapper>
              <input className="links-form-submit-btn" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const companyName = this.state.companyName;
    let tagName = this.state.tagName;
    if (tagName === "") {
      tagName = "Default";
    }
    this.props.createAnalyticsObj(companyName, tagName);
    alert(`Send this link to a recruiter at ${companyName}:\nhttp://www.recruiterrouter.herokupapp.com/${this.props.currentUser.username}/${companyName.toLowerCase().replace(/\W/ , "")}`);
  }

  handleSelection(field) {
    return e =>
      this.setState({
        [field]: e
      });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }
}
