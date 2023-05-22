import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Scrollbar, A11y, EffectCoverflow } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "../css/Slider.css";
import Baba from "../img-list/babaStudio.jpg";
import Dicoding1 from "../img-list/dicoding.png";
import DicodingFrontend from "../img-list/dicoding-frontend.png";
import CodingStudio from "../img-list/codingStudio.png";
import Progate from "../img-list/progate NodeJS.png";
import ProgateJs from "../img-list/progateJs.png";

SwiperCore.use([Autoplay, Navigation, Scrollbar, A11y, EffectCoverflow]);

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={5}
        initialSlide={0}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            initialSlide: 1,
          },
        }}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -50,
          depth: 100,
          modifier: 0.5,
          slideShadows: true,
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src={Baba} alt="BabaStudio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Dicoding1} alt="Dicoding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DicodingFrontend} alt="Dicoding" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CodingStudio} alt="CodingStudio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Progate} alt="Progate" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ProgateJs} alt="Progate" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
