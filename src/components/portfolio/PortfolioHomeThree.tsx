'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ImagePopup from '../modals/ImagePopup';
import portfolio_data from '@/data/portfolio_data';

const portfolio_content = {
  sub_title: "Portfolio",
  title: "Some Recent Project We Successfully Done",
}
const { sub_title, title } = portfolio_content

const PortfolioHomeThree = () => {


  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.img.src);


  return (
    <>
      <section className="cs_primary_bg">
        <div className="cs_height_100 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_color_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {sub_title}
              </div>
              <h2 className="cs_section_title cs_white_color anim_heading_title">
                {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="project_successfull" id="animated-thumbnails-gallery">
            {portfolio_data.slice(0, 5).map((item, i) => (
              <a key={i}
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(i)}
                className={`cs_portfolio project_successfull_${i + 1} cs_style_1`}>
                <div className="cs_portfolio_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
                <div className="cs_portfolio_overlay"></div>
                <div className="cs_portfolio_info">
                  <h2 className="cs_portfolio_title">{item.title}</h2>
                  <div className="cs_portfolio_subtitle cs_color_1">
                    {item.des}
                  </div>
                </div>
              </a>
            ))}

          </div>
          <div className="cs_height_70 cs_height_lg_60"></div>
          <div className="text-center cs_center">
            <Link href="/portfolio" className="cs_btn cs_style_1 cs_color_1">
              <span>View All Project</span>
              <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                  fill="currentColor"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_60"></div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>


      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  );
};

export default PortfolioHomeThree;