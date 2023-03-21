import { useD3 } from '../hooks/useD3';
import React from 'react';
import { useState } from 'react';
import * as d3 from 'd3';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';
import { FormControl, Select, MenuItem, InputLabel, Box } from '@mui/material';
import debutData from '../data/debut-ld.json';
import fearlessData from '../data/fearless-ld.json';
import speaknowData from '../data/speaknow-ld.json';
import redData from '../data/red-ld.json';
import popData from '../data/1989-ld.json';
import repData from '../data/rep-ld.json';
import loverData from '../data/lover-ld.json';
import folkloreData from '../data/folklore-ld.json';
import evermoreData from '../data/evermore-ld.json';

import Boxplot, { computeBoxplotStats } from 'react-boxplot'


const LexicalDiversityV2 = () => {
  const [album, setAlbum] = React.useState(0);
  const handleChange = (event) => {
    setAlbum(event.target.value);
  };

  const values = [
    14, 15, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 20, 21, 21, 22, 23, 24, 24, 29,
  ]

  console.log(computeBoxplotStats(values))

  const data = [
    [[
      "Album",
      "Average Lexical Diversity",
    ],
    ['Taylor Swift', 0.3272696945178653],
    ['Fearless', 0.3126820111321661],
    ['Speak Now', 0.326222379862926],
    ['Red', 0.3186352397589158],
    ['1989', 0.22433018530724272],
    ['reputation', 0.2373555568358035],
    ['Lover', 0.296715212623857],
    ['folklore', 0.38829857643851406],
    ['evermore', 0.3533814006579594]],
    debutData,
    fearlessData,
    speaknowData,
    redData,
    popData,
    repData,
    loverData,
    folkloreData,
    evermoreData
  ]
  const options = {
    vAxis: { title: "Value" },
    hAxis: { title: "Album" },
    seriesType: "LineChart",
    series: { 3: { type: "bars" }, 4: { type: "bars" } },
    colors: ['#3366CC', '#FF9900', '#990099', 'lightgray', 'darkgray'],
    lineWidth: 5,
    // chartArea: {'height': '75%'},
    chartArea: { 'top': '4%', 'bottom': '20%', }
  };

  return (
    // <Chart
    //   chartType="ComboChart"
    //   data={data}
    //   options={options}
    //   width="100%"
    //   height="600px"
    // />
    <div style={{minWidth: "300px"}}>
      <Box display='flex' justifyContent='center'>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          value={album}
          label="Select"
          onChange={handleChange}
        >
          <MenuItem value={0}>All albums (average)</MenuItem>
          <MenuItem value={1}>Taylor Swift (Debut)</MenuItem>
          <MenuItem value={2}>Fearless</MenuItem>
          <MenuItem value={3}>Speak Now</MenuItem>
          <MenuItem value={4}>Red</MenuItem>
          <MenuItem value={5}>1989</MenuItem>
          <MenuItem value={6}>reputation</MenuItem>
          <MenuItem value={7}>Lover</MenuItem>
          <MenuItem value={8}>folklore</MenuItem>
          <MenuItem value={9}>evermore</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <br/>
      <Chart
        chartType="ComboChart"
        data={data[album]}
        options={options}
        width="100%"
        height="600px"
        //legendToggle
        // chartEvents={chartEvents}
      />
    </div>
  )
}

export default LexicalDiversityV2;