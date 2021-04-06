import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';

function imageSrc(images, current) {
  return images.find((image, index) => index === current);
}

const Gallery = ({ images }) => {
  const [lightBox, setLighbox] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent(prevState =>
      prevState === images.length - 1 ? prevState : prevState + 1
    );
  };

  const prevImage = () => {
    setCurrent(prevState => (prevState === 0 ? prevState : prevState - 1));
  };

  return (
    <div className='gallery-wrapper'>
      {!lightBox && (
        <div className='gallery-static-wrapper'>
          <div className='gallery-static' onClick={() => setLighbox(!lightBox)}>
            {images.map((image, index) => {
              return <img key={index} src={image} alt='animal' />;
            })}
          </div>
        </div>
      )}
      {lightBox && (
        <div className='gallery-dynamic-wrapper'>
          <div className='gallery-dynamic'>
            <div className='cancel' onClick={() => setLighbox(!lightBox)}>
              <GiCancel />
            </div>
            <div className='arrow-prev' onClick={prevImage}>
              <AiOutlineArrowLeft />
            </div>
            <img src={imageSrc(images, current)} alt='animal' />;
            <div className='arrow-next' onClick={nextImage}>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
