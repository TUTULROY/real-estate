import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';




import slide5 from '../assets/slide5.jpg'
import slide6 from '../assets/slide6.jpg'
import slide7 from '../assets/slide7.jpg'
import slide8 from '../assets/slide8.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
            // <div className='max-w-6xl'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
            <img  src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  src={slide8} alt="" />
        </SwiperSlide>
       
      </Swiper>
    //   </div>
    );
};

export default Banner;