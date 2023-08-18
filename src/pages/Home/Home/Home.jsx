import React from 'react';
import Bannar from '../Bannar/Bannar';
import Category from '../Category/Category';
import Bistroo from '../Bistroo/Bistroo';
import PopularMenu from '../PopularMenu/PopularMenu';
import Fetured from '../Fetured/Fetured';
import Testimonalias from '../Testimonaial/Testimonalias';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistroo-boss || home</title>
      </Helmet>
      <Bannar></Bannar>
      <Category></Category>
      <Bistroo></Bistroo>
      <PopularMenu></PopularMenu>
      <Fetured></Fetured>
      <Testimonalias></Testimonalias>
    </div>
  );
};

export default Home;