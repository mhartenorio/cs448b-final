import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';
import Chart from 'react-google-charts';

const LineChart = () => {
  // Data processed in Tableau and Python
  const data = [
    [
      "Album",
      "Acousticness",
      "Danceability",
      "Energy",
      
      "Valence"
    ],
    ["Taylor Swift", 0.1830, 0.5453, 0.6643,  0.4265],
    ["Fearless", 0.2029, 0.5759, 0.6003,  0.3804],
    ["Speak Now", 0.2493, 0.5565, 0.6479,  0.4170],
    ["Red", 0.1488, 0.6334, 0.6008, 0.4682],
    ["1989", 0.2446, 0.6332, 0.6248,  0.4542],
    ["reputation", 0.1385, 0.6579, 0.5829, 0.2934],
    ["Lover", 0.3337, 0.6582, 0.5452, 0.4814],
    ["folklore", 0.7169, 0.5480, 0.4156, 0.3681],
    ["evermore", 0.7943, 0.5226, 0.4946, 0.4337],
    ["Midnights", 0.4102, 0.6273, 0.4518, 0.2822],
  ]
  const options = {
    chart: {
      title: "Audio Features of Each Album",
      subtitle: "Averaged across the songs in each album",
      lineWidth: 10,
    },
  };
  return (
    <Chart
      chartType="Line"
      data={data}
      options={options}
      width="100%"
      height="600px"
      //legendToggle
    />

  )
}

export default LineChart;