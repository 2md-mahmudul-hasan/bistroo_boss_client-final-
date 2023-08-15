import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import feturedImg from '../../../assets/home/featured.jpg'

const Fetured = () => {
  return (
    <div className='bg-center text-white' style={{ backgroundImage: `url(${feturedImg})`, backgroundSize: 'cover' }}>
      <SectionTitle heading={"Featured ITem"} subheading={"Check It out"}></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16">
        <div className="">
          <img src={feturedImg} alt="featuredimg" />
        </div>
        <div className="md:ml-10">
          <p>August 23, 2023</p>
          <p className='uppercase'>Where can i get some ?</p>
          <p>Lorem ipsum dolor sit ammet consectetur adipisicing elit. Cupiditate reiciendis sit beatae fugit atque labore quo magnam perferendis iure recusandae.</p>
          <button className='btn btn-outline'>Order now </button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;