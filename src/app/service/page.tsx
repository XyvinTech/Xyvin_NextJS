import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import Service from '@/components/service/Service';
import Testimonial from '@/components/testimonial/Testimonial';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Sticky from '@/components/sticky/Sticky';


export const metadata = {
  title: "Service Vixan - Digital  Creative Agency Next js Template",  
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <HeroService />
        <Service />
        <Testimonial style_service={true} />
        <AboutHomeFour />
        <FooterOne />
      </div>
      <Sticky />
    </Wrapper>
  );
};

export default index;