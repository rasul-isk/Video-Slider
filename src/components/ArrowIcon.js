import React from 'react';

const ArrowIcon = ({ Icon, action }) => {
  return (
    <div>
      <Icon className="arrow" fontSize="10vh" onClick={() => action()} />
    </div>
  );
};

export default ArrowIcon;
