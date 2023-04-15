import { Box, CssBaseline } from '@mui/material';
import { VideoSlider } from './components/VideoSlider';
import { VideoPlayer } from './components/VideoPlayer';
import { useState } from 'react';

function App() {
  const sources = ["1-expectation","2-vision","3-study-experience","4-web-experience","5-web-journey","6-passion-reasons","7-AI-tools","8-snake-game"];
  const [content, setContent] = useState('1-expectation');
  return (
    <Box>
      <CssBaseline />
      <Box sx={{ display: 'grid', justifyItems: 'center', alignContent: 'space-between', overflow: 'hidden', height: '100vh', width: '100vw' }}>
        <VideoSlider sources={sources} content={content} setContent={setContent} />
        <VideoPlayer src={content} />
      </Box>
    </Box>
  );
}

export default App;
