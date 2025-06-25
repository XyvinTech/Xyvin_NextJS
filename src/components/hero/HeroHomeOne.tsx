'use client'
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const hero_slider = [
  {
    img: `/assets/img/new-home2.png`,
    sub_title: "",
    title: "AI-Powered Solutions Designed for You ",
    des: `From automation to prediction — we build intelligent software that adapts, learns, and delivers unmatched performance for your business needs.`
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: "",
    title: "Smarter Web & ERP Platforms with AI at the Core",
    des: ` Empower your operations with intelligent web systems and AI-enabled ERP platforms designed to streamline processes and boost decision-making.`
  },
  {
    img: `/assets/img/hero_img_1.jpg`,
    sub_title: "",
    title: "Connected by APIs. Driven by AI Agents.",
    des: `Seamlessly integrate smart APIs and deploy AI-powered agents to automate workflows, deliver insights, and enhance customer interactions.`
  },
]

const HeroHomeOne = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        className="cs_slider cs_slider_1">
        {hero_slider.map((item, index) =>
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_hero cs_style1 cs_center cs_parallax">
              <div 
                className="cs_hero_bg cs_bg cs_parallax_bg" 
                style={{ 
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100vh',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: -1
                }}
              ></div>
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_mini_title">
                    <svg width="134" height="12" viewBox="0 0 134 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010" />
                    </svg>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title">
                    {item.title}
                  </h1>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle">
                      {item.des}
                    </div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link href="/Xyvin/portfolio"
                          className="cs_hero_btn cs_round_btn btn-item"><span></span>
                          Our
                          Projects</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>
    </>
  );
};

export default HeroHomeOne;