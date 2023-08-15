import React from 'react';
import Bannar from '../Bannar/Bannar';
import Category from '../Category/Category';
import Bistroo from '../Bistroo/Bistroo';
import PopularMenu from '../PopularMenu/PopularMenu';
import Fetured from '../Fetured/Fetured';

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Category></Category>
      <Bistroo></Bistroo>
      <PopularMenu></PopularMenu>
      <Fetured></Fetured>
    </div>
  );
};

export default Home;