import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Image
import { img1, img3, img4, img5 } from "../../assets";

const Carousel = () => {
  return (
    <div className="w-full md:h-[500px] sm:h-fit">
      <Swiper
        slidesPerView={1}
        autoplay={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <img src={img1} alt="posterImg1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="posterImg3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="posterImg4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="posterImg5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
