import React from "react";
import PortfolioManagerHeader from "./manager_components/portfolio_manager_header";
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
          <PortfolioManagerMain
            analytics={this.props.portfolio.analytics}
            fetchPortfolio={this.props.fetchPortfolio}
          />
          <PortfolioManagerErrors errors={this.props.errors} />
        </div>
      );
    }
  }
}

export default PortfolioManager;
