import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function imageSrc(images, current) {
  const imagesSrc = images.map(img => img.src);
  return imagesSrc.find((image, index) => index === current);
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

  const showCarouselHandler = index => {
    return setCurrent(index), setLighbox(!lightBox);
  };

  return (
    <div className='gallery-wrapper'>
      {!lightBox && (
        <div className='gallery-static-wrapper'>
          <div className='gallery-static'>
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => showCarouselHandler(index)}
                />
              );
            })}
          </div>
        </div>
      )}
      {lightBox && (
        <div className='carousel-wrapper'>
          <div className='carousel'>
            <div className='cancel' onClick={() => setLighbox(!lightBox)}>
              X
            </div>
            {current > 0 && (
              <div className='arrow-prev' onClick={prevImage}>
                <AiOutlineArrowLeft />
              </div>
            )}
            <img src={imageSrc(images, current)} alt='animal' />
            {current < images.length - 1 && (
              <div className='arrow-next' onClick={nextImage}>
                <AiOutlineArrowRight />
              </div>
            )}
            <div className='carousel-img-numbering '>
              {current + 1}/{images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
