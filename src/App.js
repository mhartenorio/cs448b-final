import React from 'react';
import BarChart from './components/BarChart';
import './App.css';
import { Grid, Container, Typography } from '@mui/material';
import WordFrequency from './components/WordFrequency';
import LineChart from './components/LineChart';
import LineBarChart from './components/LineBarChart';
import WordFrequencyV2 from './components/WordFrequencyV2';
import WordTree from './components/WordTree';
import LexicalDiversity from './components/LexicalDiversity';
import LexicalDiversityV2 from './components/LexicalDiversityV2';
import SentimentAnalysis from './components/SentimentAnalysis';

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
    <div style={{ marginTop: "36px" }}>
      <Container maxWidth='md'>
        <Typography variant="h4">Part I: Audio Analysis</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Audio Features of Each Album</Typography>
        {/* <Typography textAlign='center'>Averaged across the songs in each album</Typography> */}
        <br />
        <LineChart />
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Trends in Audio Features vs. Critic Scores</Typography>
        <Typography textAlign='center'>Features averaged across the songs in each album</Typography>
        <br />
        <LineBarChart />
      </Container>
      <Container maxWidth='md'>
        <Typography variant="h4">Part II: Sentiment Analysis</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Title of Graph</Typography>
        <Typography textAlign='center'>Description</Typography>
        <br />
        <SentimentAnalysis />
      </Container>
      <Container maxWidth='md'>
        <Typography variant="h4">Part III: Lexical Analysis</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Lexical Diversity</Typography>
        <Typography textAlign='center'>The ratio of number of unique words to the total number of words</Typography>
        <br />
        <LexicalDiversity/>
        {/* <LexicalDiversityV2/> */}
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Word Appearances per Album</Typography>
        <Typography textAlign='center'>Number of times the word appears in each album</Typography>
        <br />
        <WordFrequencyV2 />
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Word Tree</Typography>
        <Typography textAlign='center'>How does Taylor Swift write about love?</Typography>
        <br />
        <WordTree />
      </Container>
    </div>
  );
}

export default App;