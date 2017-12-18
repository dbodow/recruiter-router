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
      chartData: {
        labels: [
          "week 1",
          "week 2",
          "week 3",
          "week 4",
          "week 5",
          "week 6",
          "week 7",
          "week 8",
          moment().format("MM/DD")
        ],
        datasets: [
          {
            fill: true,
            label: "Page Views",
            data: [0, 1, 3, 5, 2, 10, 12, 5, 30],
            borderColor: "rgba(30, 225, 140, 1)",
            backgroundColor: "rgba(8, 62, 168, .35)",
            cubicInterpolationMode: "default"
          }
        ]
      }
    };
  }

  render() {
    let visits = this.props.analytics[1].visits.map(timestamp =>
      moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")
    );
    // console.log(visits);
    return (
      <div className="pm-chart-container pm-flex-2b">
        <div className="chart">
          <Line
            data={this.state.chartData}
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
                      labelString: "Date"
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
                      labelString: "Page Views"
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

export default ProjectManagerChart;

// type: "time",
// time: {
//   unit: "week"
// },
