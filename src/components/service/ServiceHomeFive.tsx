
'use client'

import React from 'react';
import Link from 'next/link';
import service_data from '@/data/service_data';
import { Swiper, SwiperSlide } from 'swiper/react';


const ServiceHomeFive = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Services
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Digital Marketing Strategy <br />Transformation
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <Swiper 
          loop={true}
          speed={1000}
          autoplay={false}
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{ el: ".cs_pagination", clickable: true }} 
          className="cs_slider cs_slider_3 cs_row_slider anim_blog">
            {service_data.map((item, i) =>
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cs_post cs_style_2">
                  <div className="cs_post_info">
                    <h6 className="cs_post_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h6>
                    <p className="cs_m0 cs_color_1">
                      {item.description}
                    </p>
                    <div className="cs_section_heading_right">
                      <Link href="/service-details" className="cs_btn cs_style_1 cs_color_1">
                        <span>View More</span>
                        <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355
                                                        12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                            fill="currentColor"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )} 
          </Swiper>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ServiceHomeFive;