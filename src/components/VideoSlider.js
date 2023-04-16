import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';
import React from 'react';
import ArrowIcon from './ArrowIcon';

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

  for (const name of sources) {
    let index = sources.indexOf(content);
    let style = name === content ? 'preview highlight' : 'preview preview-small';
    style += index > 4 ? ' scroll-right' : '';
    elements.push(<img key={name} src={`/pics/${name}.png`} className={style} ratio={16 / 9} height="100vh" onClick={() => setContent(name)} alt={name} />);
  }

  return (
    <Box className="slider">
      <Box sx={{ display: 'flex', fontSize: '10vh', height: '100%', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <ArrowIcon Icon={ArrowBackIosIcon} action={prevContent} />
        <Box className="carousel">{elements.length && elements}</Box>
        <ArrowIcon Icon={ArrowForwardIosIcon} action={nextContent} />
      </Box>
    </Box>
  );
};
