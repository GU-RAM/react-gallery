import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className='gallery-wrapper'>
      {images.map((image, index) => {
        return <img key={index} src={image} />;
      })}
    </div>
  );
};

export default Gallery;
