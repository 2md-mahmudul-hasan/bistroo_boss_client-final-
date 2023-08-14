import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle subheading={"From 11 AM to 10PM"} heading={"Order Online"}>
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img src={slide1} alt='slide' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Salads</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt='im' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Pizzas</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt='slide' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Soups</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} alt='slide' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Desserts</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide5} alt='slide' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Salads</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt='im' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Pizzas</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt='slide' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Soups</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} alt='slide' />
          <h2 className='uppercase text-2xl text-center -mt-10 text-[black] '>Desserts</h2>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Category;