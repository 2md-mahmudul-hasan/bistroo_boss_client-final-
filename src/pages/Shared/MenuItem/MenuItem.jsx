import React from 'react';

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className='flex space-x-5 mb-5'>
      <img style={{ borderRadius: '0px 50px 50px 50px' }} className='w-[100px]' src={image} alt="iamge" />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className='text-yellow-500'>{price}</p>

    </div>
  );
};

export default MenuItem;