import React from 'react';
import BarChart from './components/BarChart';
import './App.css';
import { Grid, Container } from '@mui/material';
import WordFrequency from './components/WordFrequency';
import LineChart from './components/LineChart';

const data = [
  { album: "Taylor Swift", critic_score: 67 },
  { album: "Fearless", critic_score: 73 },
  { album: "Speak Now", critic_score: 77 },
  { album: "Red", critic_score: 77 },
  { album: "1989", critic_score: 76 },
  { album: "reputation", critic_score: 71 },
  { album: "Lover", critic_score: 79 },
  { album: "folklore", critic_score: 88 },
  { album: "evermore", critic_score: 85 },
  { album: "Midnights", critic_score: 85 },
]

function App() {
  return (
    <div className="App">

      <Container maxWidth='md' sx={{padding: "36px"}}>
        <LineChart />
      </Container>
      <Grid justifyContent='center' sx={{display: "block", margin: "0 auto", width: "500px"}}>
        <WordFrequency/>
      </Grid>
    </div>
  );
}

export default App;