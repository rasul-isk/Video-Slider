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

  sources.foreach((el) => {
    let index = sources.indexOf(content);
    let style = el === content ? 'preview highlight' : 'preview preview-small';
    style += index > 4 ? ' scroll-right' : '';
    elements.push(<img key={el} src={`/pics/${el}.png`} className={style} ratio={16 / 9} height="100vh" onClick={() => setContent(el)} alt={el} />);
  });

  //TODO arrows to separate icon component
  //TODO clean code, remove unnecessary styles, add components to another components where it is needed
  return (
    <Box sx={{ padding: '0px 80px', display: 'block', height: '20vh', width: '100vw', borderBottom: '2px solid rgb(111, 29, 166)' }}>
      <Box sx={{ display: 'flex', fontSize: '10vh', height: '100%', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <ArrowBackIosIcon sx={{ cursor: 'pointer', display: 'block', fill: 1 }} className="arrow" fontSize="10vh" onClick={() => prevContent()} />
        <Box sx={{ display: 'inline-flex', width: '90%', height: '100%', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
          {elements.length && elements}
        </Box>
        <ArrowForwardIosIcon sx={{ cursor: 'pointer' }} className="arrow" fontSize="10vh" onClick={() => nextContent()} />
      </Box>
    </Box>
  );
};
