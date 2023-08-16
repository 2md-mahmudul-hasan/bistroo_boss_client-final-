import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { BiSolidQuoteLeft } from 'react-icons/bi';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// import required modules
import { Navigation } from 'swiper/modules';

const Testimonalias = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div>
      <SectionTitle className="mt-20 py-20" heading={"Testimonial"} subheading={"What our client say."}></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className='m-20 px-10 flex flex-col items-center'>
              <h3 className='text-7xl dark:text-black'><BiSolidQuoteLeft /></h3>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className='text-4xl text-orange-950'>{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonalias;