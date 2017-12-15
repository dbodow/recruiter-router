import React from "react";

export default class PortfolioManagerErrors extends React.Component {
  renderErrors() {
    if (this.props.errors) {
      return this.props.errors.map((error, idx) => (
        <li className="pm-errors-li" key={`pm-error#${idx}`}>
          Error, please note. {error}
        </li>
      ));
    }
  }

  render() {
    if (this.props.errors === undefined) {
      return null;
    } else {
      return (
        <div className="pm-errors-box pm-flex-3 max-width">
          <ul className="pm-errors-ul">{this.renderErrors()}</ul>
        </div>
      );
    }
  }
}
