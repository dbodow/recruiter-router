import React from "react";
import moment from "moment";

class ChartSummaryCard extends React.Component {
  constructor(props) {
    super(props);
    this.renderVisits = this.renderVisits.bind(this);
  }

  renderVisits() {
    let sortedVisits = this.props.datum.visits
      .sort()
      .reverse()
      .slice(0, 3);
    return sortedVisits.map((timestamp, idx) => (
      <li key={`visit-${idx}`}>
        {moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </li>
    ));
  }

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
          <ul className="cs-card-list">{this.renderVisits()}</ul>
        </div>
      </div>
    );
  }
}

export default ChartSummaryCard;
