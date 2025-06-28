"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "/assets/img/mission1.png",
    sub_title: "Our Mission",
    title: `Transforming Ideas with AI and Creativity`,
    // des: `To create cutting-edge, innovative software solutions that drive digital transformation for businesses across diverse industries, ensuring efficiency, scalability, and a competitive edge in the market.`,
    des: `At Xyvin, we blend creativity and AI to build smarter websites, apps, and digital solutions. Whether it’s design, development, or marketing — we use smart tools to help your business grow online, faster and better.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Mission",
    title: `Building Smart Solutions Around You `,
    des: `We focus on your business needs and use AI to create better, faster, and more efficient software. Our smart systems help you solve real problems, improve user experience, and keep growing with ease.`,
  },
  {
    img: "/assets/img/about_gallery_3.jpg",
    sub_title: "Our Mission",
    title: `Empowering Growth with AI Technology`,
    des: `We use the power of AI to make your business stronger. From automating daily tasks to creating smart tools that adapt and learn, we help you stay ahead in the digital world — with confidence and clarity.`,
  },
];

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        autoplay={{
          delay: 3000, // 4 seconds delay between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
          pauseOnMouseEnter: true, // Pause autoplay when mouse enters
        }}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${" / "}
             <span class="${totalClass}"></span>`;
          },
        }}
        className="cs_slider cs_slider_2"
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div
                className="cs_about_bg cs_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title">{item.title}</h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">{item.des}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_prev"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_next"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;
