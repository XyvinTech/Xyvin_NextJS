
'use client'

import React from 'react';
import gellary_img_1 from "@/assets/img/about_gallery_1.jpg";
import gellary_img_2 from "@/assets/img/about_gallery_2.jpg";
import gellary_img_3 from "@/assets/img/about_gallery_3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


const gellary_data = [
  gellary_img_1,
  gellary_img_2,
  gellary_img_3,
  gellary_img_1,
  gellary_img_2,
  gellary_img_3,
]


const Gellary = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">Gallery</div>
              <h2 className="cs_section_title anim_heading_title">
                Inspiring Creativity A Gallery of Work from Our Creative Agency
              </h2>
            </div>
          </div>
          <div className="cs_height_150 cs_height_lg_60"></div>
        </div>
        <Swiper 
        loop={true}
        speed={1000}
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{ el: ".cs_pagination", clickable: true }}
        className="cs_slider cs_slider_6">
          {gellary_data.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <Image src={item} className="card-img" alt="image-here" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Gellary;