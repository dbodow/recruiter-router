import React from "react";
import PortfolioManagerErrors from "./portfolio-manager-components/portfolio_manager_errors";

class PortfolioManager extends React.Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }

  render() {
    if (this.props.portfolio === null) {
      return null;
    } else {
      //TODO: remove
      console.log(this.props);

      return (
        <div className="pm-main-container max-width">
          <h2>Portfolio Manager</h2>
        </div>
      );
    }
  }
}

export default PortfolioManager;
