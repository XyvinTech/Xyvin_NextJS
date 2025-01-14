
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeFour from '@/components/hero/HeroHomeFour';
import ServiceHomeFour from '@/components/service/ServiceHomeFour';
import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
import Testimonial from '@/components/testimonial/Testimonial';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';



export const metadata = {
  title: "Creative Protfolio Xyvin",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />         
      <div id="scrollsmoother-container">
        <HeroHomeFour />
        <ServiceHomeFour />
        <PortfolioHomeFour />
        <Testimonial />
        <BlogHomeOne style_2={true} />
        <AboutHomeFour />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;