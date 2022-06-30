import React from "react";
import  { ProductCard } from "../ProductCard";
// Swiper 
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css";

export const Carousel = ({products}) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        fadeEffect={true}
        grabCursor={true}
        breakpoints={
          {
            0:{
              slidesPerView: 1
            },
            520:{
              slidesPerView: 2
            },
            950:{
              slidesPerView: 3
            },
            1200:{
              slidesPerView: 4
            }
          }
        }
      >
        {products.length > 0 ?
          (products.map((product, key) => { return <SwiperSlide key={key}><ProductCard product={product}/></SwiperSlide>}))
          : ("")}    
      </Swiper>
    </>
  );
}