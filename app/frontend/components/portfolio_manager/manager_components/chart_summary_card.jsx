import React from "react";
import moment from "moment";

class ChartSummaryCard extends React.Component {
  render() {
    let { tagName, companyName, visits } = this.props.analytics;
    let sortedVisits = visits.sort().reverse();
    return (
      <div className="chart-summary-box">
        <div className="cs-card-title">
          <h3>{companyName}</h3>
        </div>
        <div className="cs-card-total">
          <span>total visits: {visits.length}</span>
        </div>
        <div className="cs-card-list">
          <span>recent visits:</span>
          <ul>
            <li>
              {moment(sortedVisits[0]).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </li>
            <li>
              {moment(sortedVisits[1]).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </li>
            <li>
              {moment(sortedVisits[2]).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ChartSummaryCard;
