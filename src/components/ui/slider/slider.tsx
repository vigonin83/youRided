import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import MainButton from '../buttons/mainButton/mainButton';
import MainButtonReverse from '../buttons/mainButtonReverse/mainButtonReverse';
import Image from 'next/image';
import Slide1 from "@/../public/images/scooter-slide1.jpg";
import Slide2 from "@/../public/images/scooter-slide2.jpg";
import Slide3 from "@/../public/images/scooter-slide3.jpg";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './slider.module.scss';


const Slider = () => {
   return (
      <div className={styles.sliderWrapper}>
         <Swiper
            modules={[Navigation, Pagination, A11y]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
         >
            <SwiperSlide>
               <Image src={Slide1} alt='Электросамокаты' />
               <div className={styles.content}>
                  <h1 className={styles.title}><span>Электросамокаты</span> - новый стандарт</h1>
                  <p className={styles.subTitle}>с использованием современных технологий</p>
                  <p className={styles.discount}>Скидки до  <span>30%</span></p>
                  <MainButton value={'Начни покупки'} link={'/escooter'} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <Image src={Slide2} alt='Самокаты для детей' />
               <div className={styles.content}>
                  <h1 className={styles.title}><span>Электросамокаты</span> - новый стандарт</h1>
                  <p className={styles.subTitle}>с использованием современных технологий</p>
                  <p className={styles.discount}>Скидки до  <span>30%</span></p>
                  <MainButton value={'Начни покупки'} link={'/scooter'} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <Image src={Slide3} alt='Экипировка' />
               <div className={styles.slideThreeWrapper}>
                  <div>
                  </div>
                  <div className={styles.slideThreeContent}>
                     <h2 className={styles.threeSlideTitle}><span>Экипировка</span> - всё для безопасной езды</h2>
                     <p className={styles.subTitle}>семейные скидки</p>
                     <p className={styles.threeSlideDiscount}>при покупке  <span>от 2-х комплектов</span></p>
                     <MainButtonReverse value={'Начни покупки'} link={'/equipment'} />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>);
}

export default Slider;