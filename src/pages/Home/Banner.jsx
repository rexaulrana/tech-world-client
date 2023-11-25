import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      //   navigation={true}
      pagination={{
        clickable: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="">
        <div>
          <img className="relative  " src={slide3} />

          {/* <p className="absolute top-80 bg-green-900">Rana</p> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
