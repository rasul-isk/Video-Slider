import { Box } from '@mui/material';
import React from 'react';

export const VideoPlayer = ({ src }) => {
  //width="100%"
  // const finalPath =
  return (
    <Box width="100vw" height="80vh">
      <video controls width="100%" height="100%" key={src}>
        <source src={`/video/${src}.mp4`} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </Box>
  );
};
