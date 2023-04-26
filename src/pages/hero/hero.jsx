import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import mainBg from "../../assets/img/main-bg.png"
import nextArrow from "../../assets/img/next-arrow.svg"
import prevArrow from "../../assets/img/prev-arrow.svg"
import 'swiper/css';
import 'swiper/css/pagination';
import "./hero.css"
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/button/button';
const Hero = () => {
  const swiperRef=useRef()
  const [getWindow,setWindow]=useState(576)
 window.addEventListener('resize',()=>{
   setWindow(window.innerWidth)
 })
  return <section className="hero pt-3">
    <div className="container">
      <div className="hero__slider relative">
      <Swiper
      modules={[Navigation,Pagination]}
      pagination={575>=getWindow ? {clickable:true} : false}
      onBeforeInit={(swiper)=>swiperRef.current=swiper}
      style={{
    "--swiper-pagination-color": "#FCEC41",
    "--swiper-pagination-bullet-inactive-color":"#8B8D92",
    "--swiper-pagination-bullet-inactive-opacity": "1",
  // --swiper-pagination-bullet-size: 8px;
  /*
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
      }}
    >
      <SwiperSlide className='hero__slide'>
        <div className="hero__slide__info">
          <h2 className="hero__slide__title font-serif font-bold">Специальные предложения</h2>
          <p className="hero__slide__txt font-serif font-normal text-black">на строительные материалы и товары для ремонта</p>
          <Button id="hero__slide__info__btn">Подробнее</Button>
        </div>
      <img src={mainBg} alt="an image" className='hero__slide__img' /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
    </Swiper>
     <div className={`hero__slider__btns absolute flex items-center ${575>=getWindow ? 'hidden':""}`}>
     <button className='hero__slider__btn inline-flex justify-center items-center' onClick={()=>swiperRef.current?.slidePrev()} ><img src={prevArrow} alt="arrow logo" /></button>
      <button className='hero__slider__btn inline-flex justify-center items-center ms-3' onClick={()=>swiperRef.current?.slideNext()} ><img src={nextArrow} alt="arrow logo" /></button>
     </div>
      </div>
    </div>
  </section>;
}
 
export default Hero;