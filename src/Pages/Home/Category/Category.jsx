import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/ScetionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subheading={"From 11:00am to 10:00pm"}
        heading={"Order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl text-center -mt-16 text-white">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl text-center -mt-16 text-white">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl text-center -mt-16 text-white">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl text-center -mt-16 text-white">Deserts</h2>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl text-center -mt-16 text-white">Pizza</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
