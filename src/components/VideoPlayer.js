import { Box } from '@mui/material';
import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
export const VideoPlayer = ({ src }) => {
  //width="100%"
  // const finalPath =
  //space - pause | f - fullscren | m - mute
  return (
    <Box width="100vw" height="80vh" display="flex" flexWrap="wrap" alignContent="center" justifyContent="center" margin="auto">
      {/* <video controls width="100%" height="100%" key={src}>
        Sorry, your browser doesn't support videos.
      </video> */}
      <Box sx={{ width: '69.4vw', height: 'inherit' }}>
        <Video ratio={16 / 9} key={src} poster={`/pics/${src}.png`}>
          <source src={`/video/${src}.mp4`} type="video/mp4" />
        </Video>
      </Box>
    </Box>
  );
};
