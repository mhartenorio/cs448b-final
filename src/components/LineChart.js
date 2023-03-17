import { useD3 } from '../hooks/useD3';
import React from 'react';
import { useState } from 'react';
import * as d3 from 'd3';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import midnightsAudio from '../data/midnights-audio.json';
import evermoreAudio from '../data/evermore-audio.json';
import folkloreAudio from '../data/folklore-audio.json';
import loverAudio from '../data/lover-audio.json';
import repAudio from '../data/reputation-audio.json';
import fifthAlbumAudio from '../data/1989-audio.json';
import redAudio from '../data/red-audio.json';
import speakNowAudio from '../data/speaknow-audio.json';
import fearlessAudio from '../data/fearless-audio.json';
import debutAudio from '../data/debut-audio.json';
import { Box } from '@mui/system';

const LineChart = () => {
  // Data processed in Tableau and Python
  // [0.87277354 0.85477781 0.87287058 0.80813507 0.78577549 0.79674797 0.78161171 0.5584989  0.64425471 0.5       ]
  // [0.85424865 0.83013419 0.854376   0.76263945 0.72744617 0.74496302 0.72067039 0.21011058 0.44812362 0.000999  ]
  // [0.85632184 0.83294353 0.85644559 0.76808905 0.73460722 0.75124378 0.72818701 0.26739927 0.47671376 0.09090909]
  const data = [
    [[
      "Album",
      "Acousticness",
      "Danceability",
      "Energy",
      "Valence",
      "Relative Overall Loudness"
    ],
    ["Taylor Swift", 0.1830, 0.5453, 0.6643, 0.4265, 0.85632184],
    ["Fearless", 0.2029, 0.5759, 0.6003, 0.3804, 0.83294353],
    ["Speak Now", 0.2493, 0.5565, 0.6479, 0.4170, 0.85644559],
    ["Red", 0.1488, 0.6334, 0.6008, 0.4682, 0.76808905],
    ["1989", 0.2446, 0.6332, 0.6248, 0.4542, 0.73460722],
    ["reputation", 0.1385, 0.6579, 0.5829, 0.2934, 0.75124378],
    ["Lover", 0.3337, 0.6582, 0.5452, 0.4814, 0.72818701],
    ["folklore", 0.7169, 0.5480, 0.4156, 0.3681, 0.26739927],
    ["evermore", 0.7943, 0.5226, 0.4946, 0.4337, 0.47671376],
    ["Midnights", 0.4102, 0.6273, 0.4518, 0.2822, 0.09090909],],
    debutAudio,
    fearlessAudio,
    speakNowAudio,
    redAudio,
    fifthAlbumAudio,
    repAudio,
    loverAudio,
    folkloreAudio,
    evermoreAudio,
    midnightsAudio,
  ]
  const options = {
    chart: {
      lineWidth: 10,
    },
    // theme: 'material',
    // hAxis: { slantedText:true, slantedTextAngle:90 }
  };

  const event = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        console.log("Selected ", chartWrapper.getChart().getSelection());
      }
    }
  ];

  const [chartEvents, setChartEvents] = useState(event);
  const [album, setAlbum] = React.useState(0);

  const handleChange = (event) => {
    setAlbum(event.target.value);
  };

  return (
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
          <MenuItem value={10}>Midnights</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <br/>
      <Chart
        chartType="LineChart"
        data={data[album]}
        options={options}
        width="100%"
        height="600px"
        //legendToggle
        chartEvents={chartEvents}
      />
    </div>

  )
}

export default LineChart;