import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className='text-center w-1/3 mx-auto my-8'>
      <p className='text-yellow-800 mb-4'>---{subheading}---</p>
      <p className='text-4xl uppercase border-y-4 py-4'>{heading}</p>
    </div>
  );
};

export default SectionTitle;