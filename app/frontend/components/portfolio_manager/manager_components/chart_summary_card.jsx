import React from "react";
import moment from "moment";

class ChartSummaryCard extends React.Component {
  render() {
    let { tagName, companyName, visits } = this.props.datum;
    let sortedVisits = visits.sort().reverse();
    return (
      <div className="chart-summary-box">
        <div className="cs-card-title">
          <div className="cs-ct-1">
            <h3>#{tagName}</h3>
          </div>
          <div className="cs-ct-2">
            <h3>{`<${companyName} />`}</h3>
          </div>
        </div>
        <div className="cs-card-total">
          <span>total visits: {visits.length}</span>
        </div>
        <div className="cs-card-list-box">
          <span className="cs-list-label">recent visits:</span>
          <ul className="cs-card-list">
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
