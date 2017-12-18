import React from "react";
import _ from "lodash";

import moment from "moment";
import { extendMoment } from "moment-range";

import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";
import PortfolioManagerChart from "./portfolio_manager_chart";

class PortfolioManagerMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      companyVisits: this.getCompanyVisits(),
      selectedCompany: ""
    };

    this.handleTagSelection = this.handleTagSelection.bind(this);
    this.handleCompanySelection = this.handleCompanySelection.bind(this);
    this.transformData = this.transformData.bind(this);
  }

  getCompanyVisits() {
    let companyVisits = {};

    this.props.analytics.forEach(tag => {
      companyVisits[tag.companyName] = tag.visits;
    });

    return companyVisits;
  }

  transformData(companyName) {
    let visits = this.state.companyVisits[companyName];

    let chartData = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      past: 0
    };

    visits.forEach(timestamp => {
      // TODO remove subtract weeks when seed data fixed
      let date = moment(timestamp).subtract(1, "weeks");
      // let date = moment(timestamp);

      switch (true) {
        case moment
          .range(moment().subtract(1, "weeks"), moment())
          .contains(date):
          chartData[0]++;
          break;

        case moment
          .range(moment().subtract(2, "weeks"), moment().subtract(1, "weeks"))
          .contains(date):
          chartData[7]++;
          break;

        case moment
          .range(moment().subtract(3, "weeks"), moment().subtract(2, "weeks"))
          .contains(date):
          chartData[6]++;
          break;

        case moment
          .range(moment().subtract(4, "weeks"), moment().subtract(3, "weeks"))
          .contains(date):
          chartData[5]++;
          break;

        case moment
          .range(moment().subtract(5, "weeks"), moment().subtract(4, "weeks"))
          .contains(date):
          chartData[4]++;
          break;

        case moment
          .range(moment().subtract(6, "weeks"), moment().subtract(5, "weeks"))
          .contains(date):
          chartData[3]++;
          break;

        case moment
          .range(moment().subtract(7, "weeks"), moment().subtract(6, "weeks"))
          .contains(date):
          chartData[2]++;
          break;

        case moment
          .range(moment().subtract(8, "weeks"), moment().subtract(7, "weeks"))
          .contains(date):
          chartData[1]++;
          break;

        case moment
          .range(moment().subtract(9, "weeks"), moment().subtract(8, "weeks"))
          .contains(date):
          chartData[0]++;
          break;

        default:
          chartData["past"]++;
          break;
      }
    });

    return Object.values(chartData);
  }

  renderTagNames() {
    let tags = this.props.analytics.map(tag => tag.tagName);
    let uniqTags = _.uniq(tags);
    return uniqTags.map((tagName, idx) => (
      <li className="tags-li" key={`tag-li#${idx}`} data={tagName}>
        <MenuItem>{tagName}</MenuItem>
      </li>
    ));
  }

  renderCompanies() {
    return this.props.analytics.map((tag, idx) => (
      <li
        className="companies-li"
        key={`companies-li-#${idx}`}
        data={tag.companyName}
      >
        <MenuItem>{tag.companyName}</MenuItem>
      </li>
    ));
  }

  handleTagSelection(e) {
    console.log(e);
  }

  handleCompanySelection(e) {
    let companyName = e.toString();
    this.setState({ chartData: this.transformData(companyName) });
    this.setState({ selectedCompany: companyName });
  }

  showTags() {
    return (
      <div>
        <Wrapper onSelection={this.handleTagSelection}>
          <Button>tags</Button>
          <Menu>
            <ul className="tags-ul">{this.renderTagNames()}</ul>
          </Menu>
        </Wrapper>
      </div>
    );
  }

  render() {
    return (
      <div className="pm-main-box pm-flex-2 max-width">
        <div className="pm-aside-container pm-flex-2a">
          <div className="pm-aside-txt">
            <h2>Select a company</h2>
            <br />
            <div className="pm-aside-txt">
              <p>
                Click the button below to see companies you've created
                RecruiterRouter links for
              </p>
            </div>
          </div>
          <div className="pm-aside-menu">
            <Wrapper onSelection={this.handleCompanySelection}>
              <Button className="pm-aside-btn">show {`<companies />`}</Button>
              <Menu>
                <ul className="companies-ul">{this.renderCompanies()}</ul>
              </Menu>
            </Wrapper>
          </div>
        </div>
        <PortfolioManagerChart
          analytics={this.props.analytics}
          chartData={this.state.chartData}
          selectedCompany={this.state.selectedCompany}
        />
      </div>
    );
  }
}

export default PortfolioManagerMain;
