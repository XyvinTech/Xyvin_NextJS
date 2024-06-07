import Link from 'next/link';
import React from 'react';


type DataType = {
  title_1: string;
  title_2: string;
  des: string;
  links: {
      title: string;
  }[];
}

const hero_data: DataType = {
  title_1: `Creative`,
  title_2: `Design Studio`,
  des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.`,
  links: [
    { title: 'Facebook'},
    { title: 'Behance'},
    { title: 'Dribbble'},
  ]
}
const { title_1, title_2, des, links } = hero_data

const HeroHomeThree = () => {
  return (
    <>
      <section>
        <div className="cs_hero cs_style2">
          <div className="cs_hero_bg cs_bg cs_parallax_bg" style={{ backgroundImage: 'url(/assets/img/design_banner.jpg)' }}></div>
          <div className="textupdowns">
            <div className="cs_left_text">
              <span className="cs_arrow">
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
                </svg></span>
              <p>SCROLL DOWN</p>
            </div>
          </div>

          <div className="container">
            <div className="cs_hero_text">
              <div className="anim_banner_text_left">
                <h1 className="cs_hero_title cs_hero_title_lg">{title_1}</h1>
              </div>
              <div className="anim_banner_text_right">
                <h1 className="cs_hero_title cs_hero_title_lg">{title_2}</h1>
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_hero_subtitle">
                <div className="anim_subtext">
                  <p className="cs_hero_mini_details">
                    {des}
                  </p>
                </div>
                <div className="cs_section_heading_right cs_btn_anim">
                  <Link href="/portfolio" className="cs_btn cs_style_1 cs_color_1">
                    <span>View Project</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_right_text">
            {links.map((link) => (
              <p className="colorChanegs t1">{link.title}</p>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_0"></div>
    </>
  );
};

export default HeroHomeThree;