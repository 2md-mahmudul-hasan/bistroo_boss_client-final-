import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
  const location = useLocation();
  const noHeader = location.pathname.includes('login')
  return (
    <div>
      {noHeader || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeader || <Footer></Footer>}
    </div>
  );
};

export default Main;