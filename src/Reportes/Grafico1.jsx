import React from "react";
import Highcharts from "highcharts";
import applyDrilldown from "highcharts/modules/drilldown";
import {
  Chart,
  ColumnSeries,
  HighchartsChart,
  Subtitle,
  Title,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  withHighcharts
} from "react-jsx-highcharts";

applyDrilldown(Highcharts);

const App1 = () => (
  <HighchartsChart
    drilldown={{
      series: [
        [
          {
            name: "Column 1",
            id: "col1",
            data: [["Pull to par", -6], ["Running yield", -12]]
          },
          {
            name: "Column 2",
            id: "col2",
            data: [["Rolldown", -7]]
          },
          {
            name: "Column 3",
            id: "col3",
            data: [
              ["Parallel shift", 50],
              ["Twist", 11],
              ["Higher order curve effects", -13]
            ]
          }
        ]
      ]
    }}
  >
    <Chart type="column" />
    <Title>Graph Title</Title>
    <Subtitle>Click the columns</Subtitle>

    <XAxis id="categories" type="category" />

    <YAxis id="number">
      <YAxis.Title>Axis Title</YAxis.Title>

      <ColumnSeries
        id="return-contribution"
        name="Column Name"
        colorByPoint
        data={[
          { name: "Column 1", y: 10, drilldown: "col1" },
          { name: "Column 2", y: 20, drilldown: "col2" },
          { name: "Column 3", y: 55, drilldown: "col3" }
        ]}
      />
    </YAxis>
  </HighchartsChart>
);

export default withHighcharts(App1, Highcharts);