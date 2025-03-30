import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import category1 from "../../assets/menu/banner3.jpg";
import category2 from "../../assets/menu/dessert-bg.jpeg";

import category4 from "../../assets/menu/pizza-bg.jpg";
import category5 from "../../assets/menu/salad-bg.jpg";
import category6 from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading="---From 11:00am to 10:00pm---"
        subHeading="ORDER NOW"
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-3"
      >
        <SwiperSlide>
          <img src={category1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={category4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={category6} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
