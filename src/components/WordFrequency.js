import { useD3 } from '../hooks/useD3';
import React from 'react';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';
import { Button, TextField, Typography, Grid, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Papa from 'papaparse';
import TaylorSwiftAlbum from '../data/01-taylor_swift.csv';
import Fearless from '../data/02-fearless.csv';
import SpeakNow from '../data/03-speak_now.csv';
import Red from '../data/04-red.csv';
import FifthAlbum from '../data/05-1989.csv';
import reputation from '../data/06-reputation.csv';
import lover from '../data/07-lover.csv';
import folklore from '../data/08-folklore.csv';
import evermore from '../data/09-evermore.csv';

function WordFrequency() {
  const [loading, setLoading] = useState(true);
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [second, setSecond] = useState(false);
  const [lyrics, setLyrics] = useState({
    "debut": [],
    "fearless": [],
    "speaknow": [],
    "red": [],
    "1989": [],
    "rep": [],
    "lover": [],
    "folklore": [],
    "evermore": []
  })
  const [data, setData] = useState([
    ["Album", "Word Frequency"],
    ["Taylor Swift", 0],
    ["Fearless", 0],
    ["Speak Now", 0],
    ["Red", 0],
    ["1989", 0],
    ["reputation", 0],
    ["lover", 0],
    ["folklore", 0],
    ["evermore", 0],
  ]);
  const [data2, setData2] = useState([
    ["Album", "Word Frequency"],
    ["Taylor Swift", 0],
    ["Fearless", 0],
    ["Speak Now", 0],
    ["Red", 0],
    ["1989", 0],
    ["reputation", 0],
    ["lover", 0],
    ["folklore", 0],
    ["evermore", 0],
  ]);
  const [lyricRes, setLyricsRes] = useState([]);

  const handleFormValues = (name, value) => {
    setLyrics((preValues) => {
      return { ...preValues, [name]: value };
    });
  };

  const options = {
    chartArea: { width: "50%" },
    hAxis: {
      title: "Word Frequency",
      minValue: 0,
    },
    vAxis: {
      title: "Album",
    },
  };

  useEffect(() => {
    setLoading(true);
    if (lyrics["debut"].length === 0) {
      console.log("hi")
      Papa.parse(TaylorSwiftAlbum, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("debut", results.data)
        },
      });
    }
    if (lyrics["fearless"].length === 0) {
      Papa.parse(Fearless, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("fearless", results.data)
        },
      });
    }
    if (lyrics["speaknow"].length === 0) {
      Papa.parse(SpeakNow, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("speaknow", results.data)
        },
      });
    }
    if (lyrics["red"].length === 0) {
      Papa.parse(Red, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("red", results.data)
        },
      });
    }
    if (lyrics["1989"].length === 0) {
      Papa.parse(FifthAlbum, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("1989", results.data)
        },
      });
    }
    if (lyrics["rep"].length === 0) {
      Papa.parse(reputation, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("rep", results.data)
        },
      });
    }
    if (lyrics["lover"].length === 0) {
      Papa.parse(lover, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("lover", results.data)
        },
      });
    }
    if (lyrics["folklore"].length === 0) {
      Papa.parse(folklore, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("folklore", results.data)
        },
      });
    }
    if (lyrics["evermore"].length === 0) {
      Papa.parse(evermore, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: function (results) {
          handleFormValues("evermore", results.data)
        },
      });
    }
    setLoading(false);

    if (!loading) {
      // console.log(lyrics)
      //console.log(handleLyricSubmit("love"))
    }

  })

  const handleLyricSubmit = (word, changeData) => {
    word = word.toLowerCase();
    let tempRes = [
      ["Album", "Word Frequency"],
      ["Taylor Swift", 0],
      ["Fearless", 0],
      ["Speak Now", 0],
      ["Red", 0],
      ["1989", 0],
      ["reputation", 0],
      ["lover", 0],
      ["folklore", 0],
      ["evermore", 0],
    ];
    let indices = {
      "Taylor Swift": 1,
      "Fearless (Taylor’s Version)": 2,
      "Speak Now (Deluxe)": 3,
      "Red (Deluxe Edition)": 4,
      "1989 (Deluxe)": 5,
      "reputation": 6,
      "Lover": 7,
      "folklore (deluxe version)": 8,
      "evermore (deluxe version)": 9
    }
    if (!loading) {
      Object.keys(lyrics).map(function (album) {
        lyrics[album].map((l, i) => {
          let cur = l["lyric"].replace(/[^a-zA-Z ]/g, "").toLowerCase()
          if (cur.includes(" " + word + " ") || cur.includes(" " + word)) {tempRes[indices[l["album_name"]]][1]++; console.log(l)};
        })
      });
      changeData(tempRes)
    }
  }

  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={second} onChange={() => { setSecond(!second); console.log(second) }} />} label="Enable second comparison graph" />
      </FormGroup>
      <Grid container direction="row" >
        <Grid item md={5}>
          <Typography><i>Search for a word here</i></Typography>
          <TextField size='small' sx={{ marginRight: "16px" }} onChange={(e) => setWord1(e.target.value)}></TextField>
          <Button variant="contained" onClick={() => handleLyricSubmit(word1, setData)}>Search</Button>
          {/* <div style={{width: "100%", height: "100%", border: "1px solid", marginTop: "16px", borderRadius: "8px"}}> */}
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
          {/* </div> */}
        </Grid>
        <Grid item md={1}/>
        {second &&
          <Grid item md={5}>
            <Typography><i>Search for a word here</i></Typography>
            <TextField size='small' sx={{ marginRight: "16px" }} onChange={(e) => setWord2(e.target.value)}></TextField>
            <Button variant="contained" onClick={() => handleLyricSubmit(word2, setData2)}>Search</Button>
            <Chart
              chartType="BarChart"
              width="100%"
              height="400px"
              data={data2}
              options={options}
            />
          </Grid>
        }
      </Grid>

    </div>
  )
}

export default WordFrequency;