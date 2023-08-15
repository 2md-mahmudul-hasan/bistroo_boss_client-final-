import React from 'react';

import bistrooImg from '../../../assets/home/banner.jpg'
const Bistroo = () => {
  return (
    <div className='p-[50px]' style={{ backgroundImage: `url(${bistrooImg})`, backgroundSize: 'cover' }}>
      <section className='p-20 mx-auto my-4 bg-blue-950 w-[60%] h-[60%] text-center'>
        <h2 className='text-5xl uppercase'> Bistroo Boos </h2>
        <p>We have a large 500 spot parking lot located directly behind our business, called the Williams Lot. <br />Our Boo's Bistro entrance is located in that parking lot. Look for the RED door with our Boo's Music Bistro on it.</p>
      </section>
    </div>
  );
};

export default Bistroo;