'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import portfolio_img_1 from '@/assets/img/case_study_2.jpg';
import portfolio_img_2 from '@/assets/img/case_study_3.jpg';
import portfolio_img_3 from '@/assets/img/case_study_4.jpg';

const portfolio_data = [
  {
    img: portfolio_img_1,
    title: "Project Task Management",
    subtitle: "Google Marketing",
  },
  {
    img: portfolio_img_2,
    title: "Project Task Management",
    subtitle: "Google Marketing",
  },
  {
    img: portfolio_img_3,
    title: "Project Task Management",
    subtitle: "Google Marketing",
  },
  {
    img: portfolio_img_1,
    title: "Project Task Management",
    subtitle: "Google Marketing",
  },
  {
    img: portfolio_img_2,
    title: "Project Task Management",
    subtitle: "Google Marketing",
  },
  {
    img: portfolio_img_3,
    title: "Project Task Management",
    subtitle: "Google Marketing",
  },
]


const PortfolioHomeFive = () => {
  return (
    <>
    <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Case Study
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Case Study We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper 
        loop={true}
        speed={1000}
        autoplay={false}
        slidesPerView="auto"  
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ el: ".cs_pagination", clickable: true }} 
        className="cs_slider cs_slider_5 anim_div_ShowDowns">

          {portfolio_data.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <Link key={i} href="/portfolio-details" className="cs_portfolio cs_style_2">
                <div className="cs_portfolio_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
                <div className="cs_portfolio_info">
                  <div className="cs_text cs_style_1">
                    <h6 className="cs_portfolio_title">
                      {item.title}
                    </h6>
                    <div className="cs_portfolio_subtitle">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )} 

        </Swiper>
        <div className="cs_height_100 cs_height_lg_60"></div>
        <div className="cs_section_heading_right cs_btn_anim text-lg-center container">
          <Link href="/portfolio-details" className="cs_btn cs_style_1">
            <span>View All Case Study</span>
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104
                12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                fill="currentColor"></path>
            </svg>
          </Link>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeFive;