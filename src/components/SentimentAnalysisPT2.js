import { useD3 } from '../hooks/useD3';
import React, { useEffect } from 'react';
import { useState } from 'react';
import * as d3 from 'd3';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';
import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Box } from '@mui/material';
import sentimentTracks from '../data/sentiment-tracks.json';

// console.log(sentimentTracks)

const SentimentAnalysisPT2 = () => {
  // const data = [
  //   [
  //     "Album",
  //     "Anger",
  //     "Val",
  //     "Genre"
  //   ],
  //   ['Taylor Swift', 0.06533333333333334, 1, "Country"],
  //   ['Fearless', 0.09950000000000002, 1, "Country"],
  //   ['Speak Now', 0.1270588235294118, 1, "Country"],
  //   ['Red', 0.12227272727272726, 1, "Country"],
  //   ['1989', 0.11437500000000003, 1, "Pop"],
  //   ['reputation', 0.10333333333333335, 1.5,  "Pop"],
  //   ['Lover', 0.10333333333333335,1,  "Pop"],
  //   ['folklore', 0.12294117647058825, 1, "Alt-pop"],
  //   ['evermore', 0.12529411764705883, 1, "Alt-pop"]
  // ]

  const data = [
    [
      "Album",
      "Number",
      "Anger",
      "Genre"
    ],
    ['Taylor Swift', 1, 0.06533333333333334, "Country"],
    ['Fearless', 2, 0.09950000000000002,  "Country"],
    ['Speak Now', 3, 0.1270588235294118,  "Country"],
    ['Red', 4, 0.12227272727272726,  "Country"],
    ['1989', 5, 0.11437500000000003,  "Pop"],
    ['reputation', 6, 0.10333333333333335,   "Pop"],
    ['Lover', 7, 0.10333333333333335,  "Pop"],
    ['folklore', 8, 0.12294117647058825,  "Alt-pop"],
    ['evermore', 9, 0.12529411764705883, "Alt-pop"]
  ]
  // const data = [['Album', 'Overall Sad', 'Overall Happy'], ['Taylor Swift', 0.36, 0.19], ['Fearless (Taylor’s Version)', 0.29, 0.18], ['Speak Now (Deluxe)', 0.25, 0.15], ['Red (Deluxe Edition)', 0.33, 0.15], ['1989 (Deluxe)', 0.26, 0.19], ['reputation', 0.35, 0.13], ['Lover', 0.34, 0.2], ['folklore (deluxe version)', 0.26, 0.12], ['evermore (deluxe version)', 0.26, 0.15]]
  // const handleSwitch = (arr) => {
  //   arr.map((a) => {
  //     let temp = a[1]
  //     let temp2 = a[2]
  //     a[1] = temp2
  //     a[2] = temp
  //   })
  //   return arr;
  // }
  // handleSwitch(data);
  // let new_data = handleSwitch(sentimentTracks)

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
    vAxis: {
      title: "Anger",
      viewWindow: {
        min: 0,
        max: 0.2,
        ticks: [],
      }
    },
    hAxis: { title: "Album Number" },
    lineWidth: 5,
    chartArea: { 'top': '4%', 'bottom': '20%', },
  };

  const options = {
    vAxis: {
      title: "Happy", viewWindow: {
        min: -0.05,
        max: 0.8
      }
    },
    hAxis: { title: "Sad" },
    lineWidth: 5,
    chartArea: { 'top': '4%', 'bottom': '20%', },
    sizeAxis: { maxSize: 5, minSize: 5 }
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

export default SentimentAnalysisPT2;