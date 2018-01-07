import React from "react";

import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

import { Bar, HorizontalBar, Line } from "react-chartjs-2";
import ChartSummaryCard from "./chart_summary_card";

class ProjectManagerChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartInfo: {
        labels: [
          "8 weeks ago",
          "7 weeks ago",
          "6 weeks ago",
          "5 weeks ago",
          "4 weeks ago",
          "3 weeks ago",
          "2 weeks ago",
          "last week",
          "today, " + moment().format("MM/DD")
        ],
        datasets: [
          {
            fill: true,
            label: "Page Views",
            data: this.props.chartData,
            borderColor: "rgba(30, 225, 140, 1)",
            backgroundColor: "rgba(8, 62, 168, .35)",
            cubicInterpolationMode: "default"
          }
        ]
      }
    };
    this.reloadChart = this.reloadChart.bind(this);
    this.selectAnalytics = this.selectAnalytics.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      datasets: [
        {
          fill: true,
          label: "Page Views",
          data: nextProps.chartData,
          borderColor: "rgba(30, 225, 140, 1)",
          backgroundColor: "rgba(8, 62, 168, .35)",
          cubicInterpolationMode: "default"
        }
      ]
    });
  }

  reloadChart() {
    return {
      labels: [
        "9+ weeks ago",
        "8 weeks ago",
        "7 weeks ago",
        "6 weeks ago",
        "5 weeks ago",
        "4 weeks ago",
        "3 weeks ago",
        "2 weeks ago",
        "last week",
        "today, " + moment().format("MM/DD")
      ],
      datasets: [
        {
          fill: true,
          label: "Page Views",
          data: this.props.chartData,
          borderColor: "rgba(30, 225, 140, 1)",
          backgroundColor: "rgba(8, 62, 168, .35)",
          cubicInterpolationMode: "default"
        }
      ]
    };
  }

  selectAnalytics() {
    return this.props.analytics.find(el => {
      return el.companyName === this.props.selectedCompany;
    });
  }

  render() {
    if (this.props.chartData.length < 1) {
      return (
        <div className="pm-chart-container pm-flex-2b">
          <div className="pm-intro-box">
            <span className="pm-intro-txt">
              Portfolio link analytics will populate here after selecting a
              company
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pm-chart-container pm-flex-2b">
          <ChartSummaryCard datum={this.selectAnalytics()} />
          <div className="chart">
            <Line
              data={this.reloadChart()}
              options={{
                maintainAspectRatio: false,
                fill: true,
                responsive: true,
                scales: {
                  xAxes: [
                    {
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: "weeks from today"
                      }
                    }
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                        suggestedMax: 50
                      },
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: "page views"
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default ProjectManagerChart;
