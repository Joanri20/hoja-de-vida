import React from 'react';

const BoxInformation = ({ title, info }) => {
  if (info === '' || info === undefined) {
    return <span className='title-style'>{title}</span>;
  }
  return (
    <>
      <span className='title-style'>{title}:</span>
      <span className='info-style'>{info}</span>
    </>
  );
};

export { BoxInformation };
