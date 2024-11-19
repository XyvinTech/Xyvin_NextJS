

import React from 'react';
import About from '@/components/about/About';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BannerAbout from '@/components/brand/BannerAbout';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Gellary from '@/components/gellary/Gellary';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
// import Sticky from '@/components/sticky/Sticky';

export const metadata = {
  title: "About Xyvin - Digital  Creative Agency Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <BannerAbout />
        {/* <VideoHomeOne style_2={true} /> */}
        <FunFactHomeOne style_3={true} />
        <About />
        <TeamHomeTwo style_2={true} style_3={true} />
        <AwardsHomeOne style_2={true} />
        <Testimonial />
        <Gellary />
        <BrandHomeOne  />
        <FooterOne />
        {/* <Sticky/> */}
      </div>
    </Wrapper>
  );
};

export default index;