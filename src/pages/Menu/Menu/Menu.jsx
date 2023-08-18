import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>bistroo-boos||menu</title>
      </Helmet>
      <Cover img={coverImg} title="Our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title="Our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title="Our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title="Our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;