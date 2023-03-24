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
import SentimentAnalysisPT2 from './components/SentimentAnalysisPT2';
import text from './data/text.json'

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
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography variant="h3"><b>Data Visualization (Taylor’s Version)</b></Typography>
        <Typography variant="h4"><>Analyzing Taylor Swift’s music over time through data</></Typography>
        <br />
        <Typography>{text[0]}</Typography>
        <br />
        <Typography>{text[1]}</Typography>
        <br />
        <Typography>{text[2]}</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography variant="h4">Part I: Audio Analysis</Typography>
        <br />
        <Typography>{text[3]}</Typography>
        <br />
        <Typography>{text[4]}</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center' variant="h6" sx={{ fontWeight: 'bold' }}>Audio Features of Each Album</Typography>
        {/* <Typography textAlign='center'>Averaged across the songs in each album</Typography> */}
        <br />
        <LineChart />
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography>By looking at the average audio features for each album, we can highlight three key insights. We see that her albums are increasing in acousticness over time, starting from her 2019 album <i>Lover</i>. We see a significant increase during 2020 when she surprisingly released the alternative album <i>folklore</i> and its subsequent sister-album <i>evermore</i>.</Typography>
        <br />
        <Typography>This is in-line with the rise of the pandemic at the time, and Swift adjusting to a market that is in quarantine. According to an interview with <a href='https://www.billboard.com/music/music-news/read-taylor-swift-primer-folklore-9423740/' target="_blank">Billboard</a>, Swift describes lockdown as an influence to what would be the album <i>folklore</i>. The singer describes her time in isolation to be a period of musical experimentation and an exploration of new narrative styles, which perhaps explains this significant change in acousticness, a departure from her previous pop/country-pop style.</Typography>
        <br />
        <Typography>We also see a decrease in energy and relative loudness over time. After the release of her widely received and successful album 1989, where her transformation from country to pop solidified, she gradually strayed away from the high-energy sound. Her following album, reputation, followed a more vulnerable approach to pop, with themes dealing with fame and love amidst a breaking media image, as according to her interview with <a href='https://www.rollingstone.com/music/music-features/taylor-swift-rolling-stone-interview-880794/' target='_blank'> Rolling Stone</a>. It is then interesting to note how this shift from her fifth to sixth album influenced the production of her subsequent albums.</Typography>
        <br />
        <Typography>To compare relative loudness, we take the least loud album and use it as a baseline for how much each album is loud compared to that baseline album. We see that the least loud album is her latest 2022 release, Midnights, and that it follows a linear structure such that her albums are decreasing in loudness over time.</Typography>
        <br />
        <Typography>In a more in-depth analysis, we can look through each audio feature in each album. By doing so, we will find that Swift crafts a certain experience in her albums where songs usually alternate in valence, danceability, and energy (instead of following some linear pattern). Perhaps, this strategy is one way that the singer keeps listeners engaged throughout the album.</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center' variant="h6" sx={{ fontWeight: 'bold' }}>Trends in Audio Features vs. Critic Scores</Typography>
        <Typography textAlign='center'>Features averaged across the songs in each album</Typography>
        <br />
        <LineBarChart />
        <br />
        <Typography>To further our exploration, let’s take these three significant trends and compare them to how critics received the album (see figure above). Using Swift’s Metacritic profile, we have a dataset that compiles that averages and applies a numerical value to critics’ reviews for each of her albums. We can see that as acousticness increased, energy decreased, and loudness decreased, we see a slight increase in her critics score for her albums. Perhaps, these changes signify a maturity in her musical style, which is better received.</Typography>
      </Container>
      <Container maxWidth='md'>
        <Typography variant="h4" sx={{ paddingTop: "36px" }}>Part II: Lexical Analysis</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center'>Lexical Diversity</Typography>
        <Typography textAlign='center'>The ratio of number of unique words to the total number of words</Typography>
        <br />
        {/* <LexicalDiversity/> */}
        <LexicalDiversityV2 />
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center'>Word Appearances per Album</Typography>
        <Typography textAlign='center'>Number of times the word appears in each album</Typography>
        <br />
        <WordFrequencyV2 />
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center'>Word Tree</Typography>
        <Typography textAlign='center'>How does Taylor Swift write about love?</Typography>
        <br />
        <WordTree />
      </Container>
      <Container maxWidth='md' sx={{ paddingTop: "36px" }}>
        <Typography variant="h4">Part III: Sentiment Analysis</Typography>
        <br/>
        <Typography>Using the same dataset from the part above, we will now aim to conduct a sentiment analysis of her songwriting.</Typography>
        <br />
        <Typography>We will use a Python sentiment analysis classifier, <a href='https://pypi.org/project/text2emotion/' target='_blank'> text2emotion</a>, to return a value for how sad or happy each lyric is. To get the value for a song, we will average these values for all of its lyrics, and for each album average these values for each song. </Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center' variant="h6" sx={{ fontWeight: 'bold' }}>Sentiment Analysis</Typography>
        <Typography textAlign='center'>On average, how happy or sad are the lyrical contents of each album or song</Typography>
        <br />
        <SentimentAnalysis />
        <Typography>Almost immediately, we notice that her country albums tend to, on average, contain sadder lyrics, while her pop albums are among the happiest, on average. Meanwhile, her alternative albums seem to contain, on average, the least happiest lyrics.</Typography>
        <br/>
        <Typography>If we expand our analysis to a track-by-track visualization, we notice that her country songs tend to be on the sadder side, while country and pop tend to be on the happier side. In line with our previous observation, lyrics from her alternative albums tend to be in the middle ground, though a lot are in the lower side of the happy scale.</Typography>
      </Container>
      {/* <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Title of Graph</Typography>
        <Typography textAlign='center'>Description</Typography>
        <br />
        <SentimentAnalysisPT2 />
      </Container> */}

      <Container maxWidth='md' sx={{ paddingTop: "36px", paddingBottom: "24px" }}>
        <Typography variant="h4">References</Typography>
        <Typography>
          <ul>
            <li><a href="https://www.react-google-charts.com" target="_blank">React Google Charts documentation </a></li>
            <li><a href="https://www.kaggle.com/datasets/jarredpriester/taylor-swift-spotify-dataset?select=taylor_swift_spotify.csv" target="_blank">Taylor Swift Spotify Dataset, Jarred Priester</a></li>
            <li><a href="https://www.kaggle.com/datasets/thespacefreak/taylor-swift-song-lyrics-all-albums" target="_blank">Taylor Swift Song Lyrics Dataset, Jan Llenzl Dagohoy </a></li>
            <li><a href="https://www.metacritic.com/person/taylor-swift?filter-options=music&sort_options=metascore&num_items=30" target="_blank">Taylor Swift Metacritic Music Profile </a></li>
            <li><a href="https://pypi.org/project/text2emotion/" target="_blank">text2emotion Python library</a></li>
          </ul>
        </Typography>
        <br />
      </Container>
    </div>
  );
}

export default App;