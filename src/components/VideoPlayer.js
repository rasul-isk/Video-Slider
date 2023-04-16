import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
export const VideoPlayer = ({ src }) => {
  const handleHotKeys = (event) => {
    if (event.key.toLowerCase() === 'f') {
      document.querySelector('.rh5v-Fullscreen_button').click();
    } else if (event.code === 'Space') {
      document.querySelector('.rh5v-PlayPause_button').click();
    } else if (event.key.toLowerCase() === 'm') {
      document.querySelector('.rh5v-Volume_button').click();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHotKeys, true);
  }, []);

  return (
    <Box className="video-player">
      <Box sx={{ width: '69.4vw', height: 'inherit' }}>
        <Video ratio={16 / 9} key={src} poster={`/pics/${src}.png`}>
          <source src={`/video/${src}.mp4`} type="video/mp4" />
        </Video>
      </Box>
    </Box>
  );
};
