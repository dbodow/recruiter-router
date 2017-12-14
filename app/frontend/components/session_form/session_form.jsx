import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user, this.props.processForm);
    this.props.processForm(user);
  }

  nameField() {
    if (this.props.formType === "register") {
      return (
        <input
          type="text"
          placeholder="Enter full name"
          value={this.state.name}
          onChange={this.update("name")}
          className="login-input"
        />
      );
    }
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/register">Register a new account instead.</Link>;
    } else {
      return <Link to="/login">Already a user? Log in instead.</Link>;
    }
  }

  renderErrors() {
    // console.log(this.props.errors);
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <main className="main">
        <div className="login-form-container max-width">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>Welcome to RecruiterRouter!</h1>
            <h2>Please {this.props.formType}</h2>
            {this.renderErrors()}
            <div className="login-form">
              {this.nameField()}
              <input
                type="text"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
              <input type="submit" value="Submit" />
            </div>
            <h3>{this.navLink()}</h3>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(SessionForm);
