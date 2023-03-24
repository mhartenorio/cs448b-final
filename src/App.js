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
import text from './data/text.json';
import banner from './banner.jpg';

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
      <div style={{ width: "100%" }}>
        <img src={banner} style={{ maxHeight: "70vh", width: "100%", objectFit: "scale-down" }}></img>
      </div>
      <Container maxWidth='md'>
        <Typography variant="caption" >Image credit: <a href="https://www.ticketmaster.com/taylor-swift-tickets/artist/1094215" target='_blank' style={{ color: "black" }}>Taylor Swift for The Eras Tour</a></Typography>
      </Container>
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
        <br />
        <Typography>Yet it is also important to note that an audio analysis is limiting in exploring her musical choices over time. Swift, regarded as one of the most prolific songwriters of our generation, such as making it to Rolling Stone’s 100 Greatest Songwriters of All Time list, has an extensive number of penned songs. In this section, we will move to exploring her lyrical content.</Typography>
        <br />
        <Typography>To conduct this analysis, we will use this <a href='https://www.kaggle.com/datasets/thespacefreak/taylor-swift-song-lyrics-all-albums' target='_blank'>dataset</a> that contains a line-by-line breakdown of each lyric from all her songs. It is important to note that this dataset does not contain lyrics from her latest 2022 release Midnights, and therefore our analysis can be expanded in the future. We will use a porter stemmer algorithm to match words to their corresponding root.</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center' variant="h6" sx={{ fontWeight: 'bold' }}>Lexical Diversity</Typography>
        <Typography textAlign='center'>The ratio of number of unique words to the total number of words</Typography>
        <br />
        {/* <LexicalDiversity/> */}
        <LexicalDiversityV2 />
        <Typography>For our first visualization, we will explore the lexical diversity of her songs. Lexical diversity refers to the ratio of the number of unique words to the total number of words in a piece of text. Besides calculating the lexical diversity for each song, we will also look at the average lexical diversity for each album. To interact with the visualization, you can pick whether to see album averages or track-by-track values per album using the dropdown menu above.</Typography>
        <br />
        <Typography>Immediately, we see that her lexical diversity dropped a noticeable amount during her switch from country to pop. However, after she switched to a more alternative genre, we see a significant rise and a new peak in lexical diversity, topping those of her earlier country albums. It is also interesting to note how the highest lexical diversity is also , as we have seen in Part I.</Typography>
        <br />
        <Typography>This is interesting to see in conjunction with our findings from Part I. As Swift describes the pandemic as a period of musical exploration, we see that not only in the shift of sound, but also in a shift in writing style. Perhaps, this new genre or period of her music during the pandemic has allowed her to explore more complex or more detailed song-writing. It is also significant to note that the peaks of lexical diversity also reflect peaks of critic scores, as we've seen in Part I.</Typography>
        <br />
        <Typography>Looking in-depth for the lexical diversity for each track for each album, we also see a pattern similar to our observations in Part I, where lexical diversity peaks at different points of each album, instead of following a more linear pattern. Here, we further establish how her albums are structured, opting for a more dynamic, non-linear approach, both sonically and lyrically throughout the run of each album.</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center' variant="h6" sx={{ fontWeight: 'bold' }}>Word Appearances per Album</Typography>
        <Typography textAlign='center'>Number of times the word appears in each album</Typography>
        <br />
        <WordFrequencyV2 />
        <br />
        <Typography>Next, we will use changes of word frequencies over her repertoire. To do this, we will use the same dataset as above and use regular expressions to count the number of matches per line for each song per album. Each bar represents the number of times the word appears in the album. To interact with the visualization, everytime you type in a word and hit ‘Search’, it will add values to the existing graph, allowing you to compare multiple words each time. If you want to clear the graph, you can press ‘Reset’.</Typography>
        <br />
        <Typography>In the example above, we can see a comparison between her use of pronouns in her songwriting. We can see a significant difference between the use of ‘you’ compared to the other pronouns. This observation gives us an insight into Swift’s writing style. We can see that she frequently directly addresses someone in her songs, which might mean she treats songwriting as if it was writing a letter to someone. Perhaps, this style of writing is what lets her listeners become engaged and popular, given that the use of the first-person narrative might make it easier for listeners to relate to her.</Typography>
        <br />
        <Typography>Another interesting point of investigation is her change in word choice over time, as she changed genres of music. For example, according to this other <a href='https://gradywsmith.com/2020/09/21/these-are-the-5-most-common-lyrics-in-country-music/' target='_blank'>data exploration project</a>, one of the most used words in country music is the word ‘Little’. We can use our visualization to check how frequently Swift used this word, along with other words such as ‘Beautiful’, over time. To search this, we can clear the graph by clicking ‘Reset’, and then type the word ‘little’, hit search, then type ‘beautiful’, and hit search again. By doing so, we will see that these words appeared more on her earlier, country albums, and decreased in frequency as she made the shift in genre. This shows that her shift in genre has affected her word choice in songwriting.</Typography>
      </Container>
      <Container maxWidth='md' sx={{ padding: "36px 36px 0px 36px" }}>
        <Typography textAlign='center' variant="h6" sx={{ fontWeight: 'bold' }}>Word Tree</Typography>
        <Typography textAlign='center'>What usually follows a certain word?</Typography>
        <br />
        <WordTree />
        <br />
        <Typography>Lastly, we will try to analyze themes and word choices in her work through a word tree. Whenever you search a word, it will get all the lines from all her songs that contain the word and create an interactive tree with branches that shows you which words follow this given word the most. You can click each branch as a point of exploration. </Typography>
        <br />
        <Typography>Known as a prolific writer of love songs, I was curious about how Taylor Swift wrote above love in her song. To do this, we will look at the word tree with ‘Love’ as the point of connection between the branches. If we click the ‘is’ branch, we will see that she describes love as “bad”, “a ruthless game”, “a secret I’m… dying to keep”, “boxing with no gloves', to name a few. Here, we can see a common theme in love as a struggle and something that is not easily gained.</Typography>
        <br />
        <Typography>Another path of investigation is how Swift writes about herself. If we type in ‘im’ to our word tree and then click the ‘a’ branch, we see that some of the ways she describes herself are: “nightmare”, “house of cards”, “crumpled up piece of paper”, “mess”, etc. Here, we can see how she uses songwriting to express feelings of insecurity and vulnerability. This use of first-person perspective to describe vulnerability might be a way of connection for her listeners, allowing them to insert themselves in Swift’s position, making her music more relatable.</Typography>
      </Container>
      <Container maxWidth='md' sx={{ paddingTop: "36px" }}>
        <Typography variant="h4">Part III: Sentiment Analysis</Typography>
        <br />
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
        <br />
        <Typography>If we expand our analysis to a track-by-track visualization, we notice that her country songs tend to be on the sadder side, while country and pop tend to be on the happier side. In line with our previous observation, lyrics from her alternative albums tend to be in the middle ground, though a lot are in the lower side of the happy scale.</Typography>
      </Container>
      {/* <Container maxWidth='md' sx={{ padding: "36px" }}>
        <Typography textAlign='center'>Title of Graph</Typography>
        <Typography textAlign='center'>Description</Typography>
        <br />
        <SentimentAnalysisPT2 />
      </Container> */}
      <Container maxWidth='md' sx={{ paddingTop: "36px" }}>
        <Typography variant="h4">Final Thoughts</Typography>
        <br />
        <Typography>As we can see from our visualizations, Swift’s music, both in sound and in writing, have changed over time. We see her leaning towards a more acoustic, lower energy sound, while highlighting richer and more diverse lyrical songwriting. Though there are some writing techniques, such as the use of first-person narrative and the direct use of second-person pronouns, that remain throughout her career, we see how genre shifts have also impacted her approach to lyrical content. Lastly, we also see some common themes in her work, such as her views about love and of herself.</Typography>
        <br />
        <Typography>As a Swift fan myself since her country days, this project has been fun to explore how her musical artistry has changed in the span of her career. It was fascinating to see how genre changes have affected her music and to analyze how personal events in her life have affected each album. I hope that other Swift listeners will be able to get this same fascination with these visualizations.</Typography>
        <br />
        <Typography>Though even for non-fans, it can be interesting to see how she has managed to adapt her music to market changes over time. And for those interested in songwriting, it might be intriguing to explore her approaches in songwriting, and how she explores themes in her songs or how she uses songwriting as a way to connect to listeners. I hope that the added interactivity allows readers to explore these questions themselves regarding her music. Enjoy! </Typography>
      </Container>
      <Container maxWidth='md' sx={{ paddingTop: "36px", paddingBottom: "36px" }}>
        <Typography variant="h4">Documentation</Typography>
        <ul>
          <li><a href="https://www.kaggle.com/datasets/jarredpriester/taylor-swift-spotify-dataset?select=taylor_swift_spotify.csv" target="_blank">Taylor Swift Spotify Dataset, Jarred Priester</a></li>
          <li><a href="https://www.kaggle.com/datasets/thespacefreak/taylor-swift-song-lyrics-all-albums" target="_blank">Taylor Swift Song Lyrics Dataset, Jan Llenzl Dagohoy </a></li>
          <li><a href="https://www.metacritic.com/person/taylor-swift?filter-options=music&sort_options=metascore&num_items=30" target="_blank">Taylor Swift Metacritic Music Profile </a></li>
          <li><a href="https://www.react-google-charts.com" target="_blank">React Google Charts documentation </a></li>
          <li><a href="https://pypi.org/project/text2emotion/" target="_blank">text2emotion Python library</a></li>
          <li><a href="https://www.nltk.org/howto/stem.html" target="_blank">NLTK's Porter Stemmer</a></li>
        </ul>
        <br />
        <Typography>To make the visualizations, I used a React library of Google Charts. </Typography>
        <br/>
        <Typography>For the sake of simplicity, I decided to use her non-rerecorded albums. This is so that changes in production style or lyrical content of “From the Vault” songs don’t influence our data, as these songs may have some influence from Swift’s more recent styles at the time of the rerecording.</Typography>
        <br/>
        <Typography>For Part I, I used the “Taylor Swift Spotify Dataset”, which uses data aggregated from Spotify’s API. Spotify gives each track from each album numerical values for each feature. Out of the 10 audio features, we investigate five of them: acousticness, danceability, energy, valence (how positive or negative the song sounds), and loudness. For loudness, we will use a relative value and compare each album’s loudness to the least loud album.</Typography>
        <br/>
        <Typography>For Part II, we used the “Taylor Swift Song Lyric Dataset”. I cleaned up the dataset by removing rerecorded songs and songs that were not part of the original release of the album. I used Python to process and clean (such as porter stemming – so that root words match their different forms, dealing with quotation marks and extra punctuation) lyrics, line-by-line, and to organize them by song and by album and to process lexical diversity. To calculate each song’s lexical diversity, I used Python to count the number of unique words per song and to count the total number of words each song has. For album values, I used an average metric of the lexical diversity of all songs in that album. Lastly, for word frequencies, I used regular expressions to find an exact match of a word in a lyric and prevent substring matches.</Typography>
        <br/>
        <Typography>For Part III, I again used the same dataset from above. I used Python to do the same processing and cleaning of each lyric as Part II. I used a Python sentiment analysis classifier, text2emotion, to return a value for how sad or happy each lyric is. To calculate each song’s sentiment, I combined the lyrics of each song from its line-by-line breakdown and used the text2emotion library to return these sentiment values. To calculate album values, I averaged the values of the sentiments for each song in that album. </Typography>
      </Container>
    </div>
  );
}

export default App;