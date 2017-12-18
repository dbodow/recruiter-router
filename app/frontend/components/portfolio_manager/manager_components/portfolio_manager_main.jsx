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
      chartData: {},
      companyVisits: this.getCompanyVisits()
    };
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
      let date = moment(timestamp).subtract(1, "weeks");

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

    return chartData;
  }

  renderTagNames() {
    let tags = this.props.analytics.map(tag => tag.tagName);
    let uniqTags = _.uniq(tags);
    // console.log(tags);
    // console.log(uniqTags);
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
        key={`companies-li#${idx}`}
        data={tag.companyName}
      >
        <MenuItem>{tag.companyName}</MenuItem>
      </li>
    ));
  }

  handleSelection(e) {
    let thing = e.toString();
    // console.log(thing);
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    console.log(this.transformData("Bauch Group"));
    return (
      <div className="pm-main-box pm-flex-2 max-width">
        <div className="pm-aside-container pm-flex-2a">
          <h2>Portfolio Manager Aside</h2>
          <div>
            <Wrapper onSelection={this.handleSelection}>
              <Button>tags</Button>
              <Menu>
                <ul className="tags-ul">{this.renderTagNames()}</ul>
              </Menu>
            </Wrapper>
          </div>
          <div>
            <Wrapper onSelection={this.handleSelection}>
              <Button>companies</Button>
              <Menu>
                <ul className="companies-ul">{this.renderCompanies()}</ul>
              </Menu>
            </Wrapper>
          </div>
        </div>
        <PortfolioManagerChart
          analytics={this.props.analytics}
          chartData={this.transformData}
        />
      </div>
    );
  }
}

export default PortfolioManagerMain;
