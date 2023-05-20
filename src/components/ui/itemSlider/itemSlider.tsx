import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination, A11y } from "swiper";
import BlogItem from "../blogItem/blogItem";
import styles from "./itemSlider.module.scss"
register()

const ItemSlider = () => {
   return (
      <div className={styles.sliderWrapper}>
         <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={110}
            slidesPerView={3}
            navigation
         >
            <SwiperSlide>
               <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
               <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
               <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
               <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
               <BlogItem />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default ItemSlider;