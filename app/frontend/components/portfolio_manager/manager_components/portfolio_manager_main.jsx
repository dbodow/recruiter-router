import React from "react";
import PortfolioManagerAside from "./portfolio_manager_aside";
import PortfolioManagerChart from "./portfolio_manager_chart";

class PortfolioManagerMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="pm-main-box pm-flex-2 max-width">
        <PortfolioManagerAside analytics={this.props.analytics} />
        <PortfolioManagerChart
          analytics={this.props.analytics}
          chartData={this.state.chartData}
        />
      </div>
    );
  }
}

export default PortfolioManagerMain;
