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

  render() {
    console.log(this.props.chartData.length);
    if (this.props.chartData.length < 1) {
      return <div className="pm-chart-container pm-flex-2b">&nbsp;</div>;
    } else {
      return (
        <div className="pm-chart-container pm-flex-2b">
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
          <ChartSummaryCard analytics={this.props.analytics[1]} />
        </div>
      );
    }
  }
}

export default ProjectManagerChart;
