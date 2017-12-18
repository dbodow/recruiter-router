import React from "react";

import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

import { Bar, HorizontalBar, Line } from "react-chartjs-2";
import ChartSummaryCard from "./chart_summary_card";

class ProjectManagerChart extends React.Component {
  constructor(props) {
    super(props);

    // let now = moment();
    // let format = moment => ()
    //   moment().format("MMM D, YYYY") + " | week " + moment().format("w");
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
            // data: [0, 1, 3, 5, 2, 10, 12, 5, 30],
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
    console.log(this.state);
  }

  reloadChart() {
    return {
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
          // data: [0, 1, 3, 5, 2, 10, 12, 5, 30],
          data: this.props.chartData,
          borderColor: "rgba(30, 225, 140, 1)",
          backgroundColor: "rgba(8, 62, 168, .35)",
          cubicInterpolationMode: "default"
        }
      ]
    };
  }

  render() {
    // let visits = this.props.analytics[1].visits.map(timestamp =>
    //   moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")
    // );
    // console.log(visits);
    // console.log(this.state.chartInfo.datasets[0].data);
    if (this.state.chartInfo.datasets[0].data === []) {
      // console.log(this.state.chartInfo.datasets[0].data);
      return null;
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
                        beginAtZero: true
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

// type: "time",
// time: {
//   unit: "week"
// },
