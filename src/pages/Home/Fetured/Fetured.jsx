import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import feturedImg from '../../../assets/home/featured.jpg'
import bannarImg from '../../../assets/home/banner.jpg'

const Fetured = () => {
  return (
    <div className='bg-center bg-fixed text-white' style={{ backgroundImage: `url(${bannarImg})`, backgroundSize: 'cover' }}>

      <div className=' bg-blue-600/30 backdrop-brightness-75'>
        <SectionTitle className="py-8 text-white" heading={"Featured ITem"} subheading={"Check It out"}></SectionTitle>
        <div className=" p-20 mx-auto my-4 md:flex justify-center items-center py-20 px-36">
          <div className="">
            <img src={feturedImg} alt="featuredimg" />
          </div>
          <div className="md:ml-10">
            <p>August 23, 2023</p>
            <p className='uppercase'>Where can i get some ?</p>
            <p>Lorem ipsum dolor sit ammet consectetur adipisicing elit. Cupiditate reiciendis sit beatae fugit atque labore quo magnam perferendis iure recusandae.</p>
            <button className='btn b-0 border-b-4 mt-5 btn-outline'>Order now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetured;