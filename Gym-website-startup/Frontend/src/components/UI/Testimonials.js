import React from 'react';
import '../../styles/Testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards"; 


import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide_items">
                <div className="slide_img-01"><img src={avatar01} alt="" /></div>
                <h4>Jhansi</h4>
                <p>Our gym trainer, Jhansi, is a highly skilled fitness expert with over a decade of experience in personal training. He specializes in strength training, cardiovascular fitness, and nutrition, providing our members with the knowledge and guidance they need to achieve their fitness goals.</p>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>  
              <div className="slide_items">
                <div className="slide_img-02"><img src={avatar02} alt="" /></div>
                <h4>Jesica Fernandes</h4>
                <p>Our gym trainer, Jesica, is a highly skilled fitness expert with over a decade of experience in personal training. He specializes in strength training, cardiovascular fitness, and nutrition, providing our members with the knowledge and guidance they need to achieve their fitness goals</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide_items">
                <div className="slide_img-03"><img src={avatar01} alt="" /></div>
                <h4>Jenny</h4>
                <p>Our gym trainer, Jenny, is a highly skilled fitness expert with over a decade of experience in personal training. He specializes in strength training, cardiovascular fitness, and nutrition, providing our members with the knowledge and guidance they need to achieve their fitness goals.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
