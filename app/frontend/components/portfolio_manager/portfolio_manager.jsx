import React from "react";
import PortfolioManagerHeader from "./manager_components/portfolio_manager_header";
import PortfolioManagerAside from "./manager_components/portfolio_manager_aside";
import PortfolioManagerMain from "./manager_components/portfolio_manager_main";
import PortfolioManagerErrors from "./manager_components/portfolio_manager_errors";

class PortfolioManager extends React.Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }

  render() {
    if (this.props.portfolio === null) {
      return null;
    } else {
      //TODO: remove
      // console.log(this.props);

      return (
        <div className="pm-container max-width">
          <PortfolioManagerHeader />
          <div className="pm-main-box pm-flex-2 max-width">
            <PortfolioManagerAside analytics={this.props.portfolio.analytics} />
            <PortfolioManagerMain analytics={this.props.portfolio.analytics} />
          </div>
          <PortfolioManagerErrors errors={this.props.errors} />
        </div>
      );
    }
  }
}

export default PortfolioManager;
