import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)
      })
  }, [])
  return (
    <div>
      <SectionTitle heading={'From our menu'} subheading={'popular items'}></SectionTitle>
      <div className='grid grid-cols-2 gap-2 p-5'>
        {
          menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
        }
      </div>

    </div>
  );
};

export default PopularMenu;