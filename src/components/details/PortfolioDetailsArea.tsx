"use client";


import React from 'react';

import Image from 'next/image';

import protfolio_details_1 from "@/assets/img/protfolio_details_1.jpg"; 
import protfolio_details_2 from "@/assets/img/portfoliodetails_2.jpg"; 
import protfolio_details_3 from "@/assets/img/portfoliodetails_1.jpg"; 
import protfolio_details_4 from "@/assets/img/portfolio_solution_1.jpg"; 
import protfolio_details_5 from "@/assets/img/portfolio_solution_2.jpg"; 
import protfolio_details_6 from "@/assets/img/portfolio_solution_3.jpg"; 



const PortfolioDetailsArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Aske - Task Management Web And Mobile Application
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <div className="cs_btn cs_style_2 anim_div_ShowZoom">
                <a target='_blank' href="https://behance.com"   className="col cs_center">Behance</a>
                <a target='_blank' href="https://dribbble.com"   className="col cs_center">Dribbble</a>
                <a target='_blank' href="https://github.com"   className="col cs_center">Github</a>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_100 cs_height_lg_60"></div>
 
      <section>
        <div className="container">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Client</p>
                    <h6 className="cs_title_text">
                      Faulsk Company Inc <br /> Canada
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Services</p>
                    <h6 className="cs_title_text">
                      UX Research, Wireframing,<br /> UI Design
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Date</p>
                    <h6 className="cs_title_text">
                      05 Dec 2022 - 01 Jan 2023 <br /> 1 Month
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_75 cs_height_lg_45"></div>
 
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={protfolio_details_1} alt="protfolio_details_1" />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">Challanges</h4>
                <p className="cs_text_style_body">
                  Welcome to our digital agency! We specialize in helping businesses like yours succeed
                  online. From website design and development to digital marketing and adver tising, we
                  have the tools and expertise to elevate your online presence. Welcome to our digital
                  agency! We specialize in helping businesses like yours online. From website design and
                  development to digital marketing and advertising, we have the tools and expertise to
                  elevate your online presence. Welcome to our digital
                  agency! We specialize in helping businesses like yours succeed online.
                </p>
              </div>
              <div className="cs_ul_ml">
                <ul>
                  <li>Design Welcome to our digital agency!</li>
                  <li>
                    Dev online. From website design Implementation world of digital.
                  </li>
                  <li>
                    Implementation evolving world of digital Design Welcome to our digital agency!
                  </li>
                  <li>
                    Launch growth and reach your goals. Implementation evolving world of digital.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_75 cs_height_lg_45"></div>
 
      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div className="reveal">
            <Image src={protfolio_details_2} alt="portfoliodetails_2" />
          </div>
          <div className="reveal">
            <Image src={protfolio_details_3} alt="portfoliodetails_1" />
          </div>
        </div>
      </div> 
      <div className="cs_height_150 cs_height_lg_60"></div>
 
      <section>
        <div>
          <div className="container">
            <div className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                <div>
                  <h4 className="cs_heading_text anim_heading_title">
                    Solutions
                  </h4>
                  <p className="cs_text_style_body">
                    Welcome to our digital agency! We specialize in helping businesses like yours
                    succeed online. From website design and development to digital marketing and adver
                    tising, we have the tools and expertise to elevate your online presence. Welcome to
                    our digital
                    agency! We specialize in helping businesses like yours online. From website design
                    and development to digital marketing and advertising, we have the tools and
                    expertise to elevate your online presence.
                  </p>
                </div>
                <div className="cs_solutions_section_img_show">
                  <div className="portfolio_solution_1 reveal">
                    <Image src={protfolio_details_4} alt="portfolio_solution_1" />
                  </div>
                  <div className="portfolio_solution_2 reveal">
                    <Image src={protfolio_details_5} alt="portfolio_solution_2" />
                  </div>
                  <div className="portfolio_solution_3 reveal">
                    <Image src={protfolio_details_6} alt="portfolio_solution_3" />
                  </div>
                </div>
                <div className="cs_img_footer_title cs_color_1 anim_text_upanddowns">
                  <p>The End - thank you stay with us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
 
      <div className="container">
        <div className="cs_portfolio_details">
          <div className="cs_section_next_prv anim_div_ShowZoom">
            <div className="cs_prv_btn">
              <a href="#">Previous</a>
            </div>
            <div>|</div>
            <div className="cs_next">
              <a href="#">Next Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;