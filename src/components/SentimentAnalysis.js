import { useD3 } from '../hooks/useD3';
import React, { useEffect } from 'react';
import { useState } from 'react';
import * as d3 from 'd3';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Box } from '@mui/material';
import sentimentTracks from '../data/sentiment-tracks.json';

// console.log(sentimentTracks)

const SentimentAnalysis = () => {
  const data = [
    [
      "Album",
      "Happy",
      "Sad",
      "Genre"
    ],
    ['Debut', 0.1933333333333333, 0.346, "Country"],
    ['Fearless', 0.17350000000000002, 0.31000000000000005, "Country"],
    ['Speak Now', 0.14529411764705882, 0.25117647058823533, "Country"],
    ['Red', 0.15318181818181817, 0.3404545454545454, "Country"],
    ['1989', 0.18250000000000002, 0.248125, "Pop"],
    ['Reputation', 0.14266666666666666, 0.3233333333333333, "Pop"],
    ['Lover', 0.20166666666666666, 0.32666666666666666, "Pop"],
    ['folklore', 0.13176470588235292, 0.26470588235294124, "Alt-pop"],
    ['evermore', 0.14764705882352944, 0.25705882352941184, "Alt-pop"]
  ]
  const handleSwitch = (arr) => {
    arr.map((a) => {
      let temp = a[1]
      let temp2 = a[2]
      a[1] = temp2
      a[2] = temp
    })
    return arr;
  }
  handleSwitch(data);
  let new_data = handleSwitch(sentimentTracks)

  // useEffect(() => {
  //   sentimentTracks.map((d) => {
  //     console.log(d)
  //     let temp = d[1]
  //     let temp2 = d[2]
  //     d[1] = temp2
  //     d[2] = temp
  //   })
  //   setTracks(sentimentTracks); 
  // })

  
  const options_1 = {
    vAxis: { title: "Happy", viewWindow: {
      min: 0.12, 
      // max: 0.8
  } },
    hAxis: { title: "Sad" },
    lineWidth: 5,
    chartArea: { 'top': '4%', 'bottom': '20%', }
  };

  const options = {
    vAxis: { title: "Happy", viewWindow: {
      min: -0.05, 
      max: 0.8
  } },
    hAxis: { title: "Sad" },
    lineWidth: 5,
    chartArea: { 'top': '4%', 'bottom': '20%', },
    sizeAxis:{maxSize:4, minSize: 4}
  };

  const [choice, setChoice] = React.useState('album');
  const [tracks, setTracks] = React.useState(null)

  return (
    <div>
      <Box display='flex' justifyContent='center'>
      <FormControl>
        {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
        >
          <FormControlLabel value="album" control={<Radio />} label="By album" />
          <FormControlLabel value="track" control={<Radio />} label="By track" />
        </RadioGroup>
      </FormControl>
      </Box>
      {choice === 'album' &&
        <Chart
          chartType="BubbleChart"
          data={data}
          options={options_1}
          width="100%"
          height="600px"
        //legendToggle
        //chartEvents={chartEvents}
        /> 
      }
      {choice === 'track' &&
        <Chart
          chartType="BubbleChart"
          data={sentimentTracks}
          options={options}
          width="100%"
          height="1000px"
        //legendToggle
        //chartEvents={chartEvents}
        />}
    </div>
  )
}

export default SentimentAnalysis;