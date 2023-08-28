import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
// data from custom hook usemenu/

  const [menu] = useMenu()
  const popularItems = menu.filter(item => item.category === 'popular')
  // console.log(popularItems)
  return (
    <div>
      <SectionTitle heading={'From our menu'} subheading={'popular items'}></SectionTitle>
      <div className='grid grid-cols-2 gap-2 p-5'>
        {
          popularItems.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
        }

      </div>
      <button className='btn b-0 border-b-4 mt-5 btn-outline d-block'>Order now </button>
    </div>
  );
};

export default PopularMenu;