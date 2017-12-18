import React from 'react';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';

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
    this.props.fetchPortfolio().then(() =>
      this.setState({loading: false}));
  }

  render() {
    if (!this.state.loading) {
      const menuItemWords = this.props.portfolio.taggedInfo.map(
        (tagObj) => (
            tagObj.tagName
          )
        );
      const menuItems = menuItemWords.map((word, i) => {
        return (
          <li key={i}>
            <MenuItem className='MyMenuButton-menuItem'>
              {word}
            </MenuItem>
          </li>
        );
      });
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter a company name (e.g. Google)" value={this.state.companyName} onChange={this.update("companyName")}></input>
              <Wrapper
                className='MyMenuButton'
                onSelection={this.handleSelection("tagName")}
              >
                <Button className='MyMenuButton-button'>
                  click me
                </Button>
                <Menu className='MyMenuButton-menu'>
                  <ul>{menuItems}</ul>
                </Menu>
              </Wrapper>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const companyName = this.state.companyName;
    let tagName = this.state.tagName;
    if (tagName === "") {
      tagName = "Default";
    }
    alert(`Send this link to a recruiter at ${companyName}:\nhttps://www.recruiterrouter.com/${this.props.currentUser.username}/${companyName.toLowerCase().replace(/\W/ , "")}`);
    this.props.createAnalyticsObj(companyName, tagName);
  }

  handleSelection(field) {
    console.log(this.state);
    return e =>
      this.setState({
        [field]: e
      });
  }

  update(field) {
    console.log(this.state);
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

}
