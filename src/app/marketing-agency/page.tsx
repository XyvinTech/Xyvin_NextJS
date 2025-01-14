
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeFive from '@/components/hero/HeroHomeFive';
import VideoHomeFive from '@/components/video/VideoHomeFive';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import FeatureHomeTwo from '@/components/feature/FeatureHomeTwo';
import ServiceHomeFive from '@/components/service/ServiceHomeFive';
import PortfolioHomeFive from '@/components/portfolio/PortfolioHomeFive';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';



export const metadata = {
  title: "Marketing Agency Xyvin",
};



const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <HeroHomeFive />
        <VideoHomeFive />
        <ServiceHomeFive />
        <FeatureHomeTwo style_2={true} />
        <PortfolioHomeFive />
        <FunFactHomeOne style_2={true} />
        {/* <AwardsHomeOne /> */}
        <Testimonial />
        <TeamHomeTwo style_2={true} />
        <BrandHomeOne style_2={true}  />
        <BlogHomeOne style_2={true} />
        <AboutHomeFour />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;