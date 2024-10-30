"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

// Import Images
import portfolio_img_1 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_2 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_3 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_4 from "@/assets/img/portfolio_4.jpg";
import portfolio_img_5 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_6 from "@/assets/img/portfolio_6.jpg";
import portfolio_img_7 from "@/assets/img/portfolio_7.jpg";
import portfolio_img_8 from "@/assets/img/portfolio_8.jpg";
import portfolio_img_9 from "@/assets/img/portfolio_9.jpg";
import portfolio_img_10 from "@/assets/img/portfolio_10.jpg";
import portfolio_img_11 from "@/assets/img/portfolio_11.jpg";

// Define the data type correctly
interface PortfolioItem {
  img: StaticImageData;
  title: string;
  category: string;
  link: string;
}

// Array of portfolio items
const portfolio_slider: PortfolioItem[] = [
  {
    img: portfolio_img_1,
    title: `Project Task Management`,
    category: `Digital Services / App Design`,
    link: `https://doublehorse.in/`,
  },
  {
    img: portfolio_img_2,
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
    link: `https://www.goecworld.com/`,
  },
  {
    img: portfolio_img_3,
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
    link: `https://basariopticals.com/`,
  },
  {
    img: portfolio_img_4,
    title: `Project Task Management`,
    category: `Digital Services / App Design`,
    link: `/portfolio/project-task-management-app-design-2`,
  },
  {
    img: portfolio_img_5,
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
    link: `https://www.special40.com/`,
  },
  {
    img: portfolio_img_6,
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
    link: `https://www.workoindia.com/`,
  },
  {
    img: portfolio_img_7,
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
    link: `https://www.azavista.com/`,
  },
  {
    img: portfolio_img_8,
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
    link: `/portfolio/project-task-management-figma-design-3`,
  },
  {
    img: portfolio_img_9,
    title: `Project Task Management`,
    category: `Digital Services / App Design`,
    link: `/portfolio/project-task-management-app-design-3`,
  },
  {
    img: portfolio_img_10,
    title: `Project Task Management`,
    category: `Digital Services / Web Design`,
    link: `/portfolio/project-task-management-web-design-4`,
  },
  {
    img: portfolio_img_11,
    title: `Project Task Management`,
    category: `Digital Services / Figma Design`,
    link: `/portfolio/project-task-management-figma-design-4`,
  },
];

const PortfolioHomeOne = () => {
  return (
    <div className="cs_horizontal_scroll_wrap">
      <div className="cs_height_145 cs_height_lg_60"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_2">
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle anim_div_ShowZoom">
              Portfolio
            </div>
            <h2 className="cs_section_title anim_heading_title">
              Some Recent Projects We Successfully Completed
            </h2>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_60"></div>
      </div>
      <Swiper
        loop={true}
        speed={1000}
        slidesPerView="auto"
        pagination={{
          el: ".cs_pagination",
          clickable: true,
        }}
        className="cs_horizontal_scrolls anim_div_ShowDowns"
      >
        {portfolio_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Link href={item.link} className="cs_horizontal_scroll">
              <div className="cs_portfolio cs_style_1">
                <div className="cs_portfolio_img">
                  <Image src={item.img} alt={item.title} />
                </div>
                <div className="cs_portfolio_overlay"></div>
                <div className="cs_portfolio_info bg-[#3131316e]">
                  <h2 className="cs_portfolio_title">{item.title}</h2>
                  <div className="cs_portfolio_subtitle">{item.category}</div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </div>
  );
};

export default PortfolioHomeOne;
