import { useD3 } from '../hooks/useD3';
import React from 'react';
import { useState } from 'react';
import * as d3 from 'd3';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';

const LineBarChart = () => {
  // const data = [
  //   [
  //     "Album",
  //     "Acousticness",
  //     "Energy",
  //     "Relative Loudness",
  //     "Metacritic Score",
  //     "User Score"
  //   ],
  //   ["Taylor Swift", 0.1830,  0.6643,  0.85632184, 0.67, 0.61],
  //   ["Fearless", 0.2029,  0.6003,  0.83294353, 0.73, 0.70],
  //   ["Speak Now", 0.2493,  0.6479, 0.85644559, 0.77, 0.77],
  //   ["Red", 0.1488,  0.6008,  0.76808905, 0.77, 0.78],
  //   ["1989", 0.2446,  0.6248,  0.73460722, 0.76, 0.77],
  //   ["reputation", 0.1385,  0.5829,  0.75124378, 0.71, 0.62],
  //   ["Lover", 0.3337,  0.5452, 0.72818701, 0.79, 0.68],
  //   ["folklore", 0.7169, 0.4156, 0.26739927, 0.88, 0.81],
  //   ["evermore", 0.7943, 0.4946,  0.47671376, 0.85, 0.80],
  //   ["Midnights", 0.4102,  0.4518, 0.09090909, 0.85, 0.64],
  // ]
  const data = [
    [
      "Album",
      "Acousticness",
      "Energy",
      "Relative Overall Loudness",
      "Metacritic Score",
    ],
    ["Taylor Swift", 0.1830,  0.6643,  0.85632184, 0.67],
    ["Fearless", 0.2029,  0.6003,  0.83294353, 0.73],
    ["Speak Now", 0.2493,  0.6479, 0.85644559, 0.77],
    ["Red", 0.1488,  0.6008,  0.76808905, 0.77],
    ["1989", 0.2446,  0.6248,  0.73460722, 0.76],
    ["reputation", 0.1385,  0.5829,  0.75124378, 0.71],
    ["Lover", 0.3337,  0.5452, 0.72818701, 0.79],
    ["folklore", 0.7169, 0.4156, 0.26739927, 0.88],
    ["evermore", 0.7943, 0.4946,  0.47671376, 0.85],
    ["Midnights", 0.4102,  0.4518, 0.09090909, 0.85],
  ]
  const options = {
    vAxis: { title: "Value" },
    hAxis: { title: "Album" },
    seriesType: "LineChart",
    series: { 3: { type: "bars" }, 4: { type: "bars" } },
    colors: ['#3366CC', '#FF9900', '#990099', 'lightgray', 'darkgray'],
    lineWidth: 5,
    // chartArea: {'height': '75%'},
    chartArea: {'top': '4%', 'bottom': '20%', }
  };

  return (
    <Chart
      chartType="ComboChart"
      data={data}
      options={options}
      width="100%"
      height="600px"
      //legendToggle
      //chartEvents={chartEvents}
    />
  )
}

export default LineBarChart;