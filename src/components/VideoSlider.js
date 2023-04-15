import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';
import React from 'react';

export const VideoSlider = ({ sources, content, setContent }) => {
  
  const elements = [];
  const nextContent = () => {
    let index = sources.indexOf(content) + 1;
    setContent(sources[index < 8 ? index : 0]);
  };
  const prevContent = () => {
    let index = sources.indexOf(content) - 1;
    setContent(sources[index >= 0 ? index : 7]);
  };

  sources.map((el) => {
    //add focus on video by increasing slightly size of preview image and some other effects
    //form object with onClick triger to setContent
    //add style "inFocus ? make it more bold than other videos"
    elements.push(<img key={el} src={`/pics/${el}.png`} className={el === content ? 'preview highlight' : 'preview'} ratio={16 / 9} height="100vh" onClick={() => setContent(el)} alt={el} />);
  });
  return (
    <Box sx={{ padding: '0px 80px', display: 'block', height: '20vh', width: '100vw', borderBottom: '2px solid rgb(111, 29, 166)' }}>
      <Box sx={{ display: 'inline-flex', fontSize: '10vh', height: '100%', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <ArrowBackIosIcon fontSize="10vh" onClick={() => prevContent()} />
        <Box sx={{ display: 'inline-flex', fontSize: '10vh', justifyContent: 'space-between', alignItems: 'center' }}>{elements.length && elements}</Box>
        <ArrowForwardIosIcon fontSize="10vh" onClick={() => nextContent()} />
      </Box>
    </Box>
  );
};
