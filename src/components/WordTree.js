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
import default_data from '../data/word-tree-default.json';

let words = []
function WordTree() {
  const [loading, setLoading] = useState(true);
  // const [words, setWords] = useState([]);

  const [word1, setWord1] = useState('love');
  const [word2, setWord2] = useState('love');
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
  const [phrases, setPhrases] = useState(default_data);

  const [lyricRes, setLyricsRes] = useState([]);

  const handleFormValues = (name, value) => {
    setLyrics((preValues) => {
      return { ...preValues, [name]: value };
    });
  };

  const options = {
    chartArea: { width: "50%", 'height': '90%' },
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
    // console.log(handleLyricSubmit("love"));
    setLoading(false);

    if (!loading) {
      // console.log(lyrics)
      // handleLyricSubmit("love");
      //console.log(handleLyricSubmit("love"))
      
    }
    

  }, [])

  const handleLyricSubmit = (word) => {
    word = word.toLowerCase();
    const re = new RegExp("\\b" + word + "\\b");

    if (!loading) {
      Object.keys(lyrics).map(function (album) {
        lyrics[album].map((l, i) => {
          let cur = l["lyric"].replace(/[^a-zA-Z ]/g, "").toLowerCase()
          // if (cur.includes(" " + word + " ") || cur.includes(" " + word)) {
          if (cur.search(re) !== -1) {
            setPhrases((preValues) => [...preValues, [cur]]);
          };
        })
      });
    }
  }

  const options_wordtree = {
    wordtree: {
      format: "implicit",
      type: "double",
      word: word2,
    },
  };

  return (
    <div>
      <Grid container direction="row" justifyContent='center' alignItems='center'>
        {/* <Grid item md={12} justifyContent='center'> */}
        <Typography><i>Search for a word here</i></Typography>
        <TextField size='small' sx={{ marginRight: "16px", marginLeft: "16px" }} onChange={(e) => { setWord1(e.target.value); }} value={word1}></TextField>
        <Button variant="contained" sx={{ marginRight: "16px" }} onClick={() => {
          // setWords([word1]);
          words.push(word1);
          setPhrases([["Phrases"]]);
          handleLyricSubmit(word1);
          setWord2(word1);
        }}>
          Search
        </Button>
        <Button variant="outlined" onClick={() => {
          setPhrases(default_data);
          setWord2('love');
          setWord1('');
        }}>
          Reset
        </Button>
        <div style={{marginTop: "8px"}}>
        <Chart
          chartType="WordTree"
          width="100%"
          height="500px"
          data={phrases}
          options={options_wordtree}
        />
        {/* {console.log(phrases)} */}
        </div>
        {/* </Grid> */}
      </Grid>

    </div>
  )
}

export default WordTree;