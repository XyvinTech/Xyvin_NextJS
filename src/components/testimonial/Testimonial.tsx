"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import avatar_img1 from "@/assets/img/teamsimg1.jpeg";
import avatar_img2 from "@/assets/img/testimonial_logo1.png";
import avatar_img3 from "@/assets/img/testimonial_logo2.png";
import avatar_img4 from "@/assets/img/testimonial_logo3.png";
import avatar_img5 from "@/assets/img/testimonial_logo4.png";
import avatar_img6 from "@/assets/img/testimonial_logo5.png";
import avatar_img7 from "@/assets/img/testimonial_logo6.png";
import avatar_img8 from "@/assets/img/testimonial_logo7.png";

import testimonial_thumb from "@/assets/img/Testimonial_thumb_1.png";
import Image, { StaticImageData } from "next/image";

interface DataType {
  img: StaticImageData;
  name: string;
  location: string;
  des: string;
}
[];
const testimonial_data: DataType[] = [
  {
    img: avatar_img1,
    name: `Ashin Amanulla`,
    location: `Founder`,
    des: `“Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design and development to digital marketing agency”`,
  },
  {
    img: avatar_img2,
    name: `Pg Ramnath`,
    location: `Founder of GOEC, India, UAE`,
    des: `“We have build a strong and long term relationship 
with Xyvin and AS a tech partner we continuously
 with them for all our requirements.”`,
  },
  {
    img: avatar_img3,
    name: `Mr Suresh`,
    location: `Founder of Skyber tech`,
    des: `“For years, Xyvin Tech has been a trusted partner, offering innovative solutions that enhance my products and exceed my clients' expectations.”`,
  },
  {
    img: avatar_img4,
    name: `Double Horse`,
    location: `Chairman of Double horse , India`,
    des: `“Xyvin Tech boosted our Doublehorse sales with a store revamp! Happy partnership continues.”`,
  },
  {
    img: avatar_img5,
    name: `JP Kujil`,
    location: `Director at Azavista , UK, Netherland`,
    des: `“The team has great skill for simplifying the Complex software solutions , They are doing great for my Event management tech software.”`,
  },
  {
    img: avatar_img6,
    name: `Dr. Vikram jayaprakash`,
    location: `CS at Atlantis Medicals, Austrailia`,
    des: `“The team did an extraordinary job in bringing life for my dream website. Highly recommend their service.”`,
  },
  {
    img: avatar_img7,
    name: `Raghav Arora`,
    location: `CEO at Zeon, Delhi`,
    des: `“From product concept to UI ? UX these guys have
it all covered.Great pleasure working with them.”`,
  },
  {
    img: avatar_img8,
    name: `Kk Janardhana`,
    location: `Founder`,
    des: `“The team has strong and a long term vision and has vital growth of Thrissur It park Coworking in Thrissur. ”`,
  },
];

const Testimonial = ({ style_service }: any) => {
  return (
    <>
      <section
        className={`${style_service ? "cs_shape_wrap_3" : "cs_primary_bg cs_shape_wrap_2"
          } `}
      >
        {style_service ? null : (
          <>
            <div className="cs_shape_1">
              <svg
                width="1041"
                height="1005"
                viewBox="0 0 1041 1005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.3"
                  cx="538.5"
                  cy="502.5"
                  r="501.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="501.5"
                  cy="526.5"
                  r="458.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="453"
                  cy="570"
                  r="424"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="396"
                  cy="591"
                  r="377"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="330"
                  cy="630"
                  r="329"
                  stroke="#454545"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="cs_shape_2">
              <svg
                width="149"
                height="149"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#454545"
                  />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#454545"
                  />
                </g>
              </svg>
            </div>
          </>
        )}

        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-4">
              <div>
                <Image src={testimonial_thumb} alt="" className="w-100" />
              </div>
            </div> */}
            <div className="col-lg-7 offset-lg-1">
              <div
                className={`cs_testimonial ${style_service ? "cs_style_2" : "cs_style_1 cs_color_1"
                  } `}
              >
                <h2 className="cs_testimonial_title">
                  Some Of Our Respected Happy Clients Says
                </h2>
                <Swiper
                  loop={true}
                  speed={1000}
                  autoplay={true}
                  modules={[Autoplay]}
                  pagination={{
                    el: ".cs_pagination",
                    clickable: true,
                  }}
                  className="cs_slider cs_slider_4"
                >
                  {testimonial_data.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="cs_testimonial_box">
                        <div className="cs_testimonial_quote_icon">
                          <svg
                            width="62"
                            height="45"
                            viewBox="0 0 62 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 26.5003H13.4844L4.82807 43.6431H17.8125L26.4689 26.5003V0.786133H0.5V26.5003Z"
                              fill="#8C2CF4"
                            />
                            <path
                              d="M35.125 0.786133V26.5003H48.1094L39.4531 43.6431H52.4375L61.0939 26.5003V0.786133H35.125Z"
                              fill="#8C2CF4"
                            />
                          </svg>
                        </div>
                        <blockquote className="cs_testimonial_text">
                          {item.des}
                        </blockquote>
                        <div className="cs_testimonial_meta">
                          <div className="cs_testimonial_avatar">
                            <Image src={item.img} alt="Avatar" width={80} height={80}/>
                          </div>
                          <div className="cs_testimonial_meta_right">
                            <h3 className="cs_testimonial_avatar_name">
                              {item.name}
                            </h3>
                            <div className="cs_testimonial_avatar_designation">
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="cs_pagination cs_style1"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {style_service ? null : (
          <div className="cs_height_150 cs_height_lg_60"></div>
        )}
      </section>
      {style_service ? null : (
        <div className="cs_height_115 cs_height_lg_60"></div>
      )}
    </>
  );
};

export default Testimonial;
