import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="bgimage"
      strength={-200}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">Would you like to try a dish?</p>
        </div>
      </div>
      <div style={{ height: '200px' }} />
    </Parallax>

  );
};

export default Cover;