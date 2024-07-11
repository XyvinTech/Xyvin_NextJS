import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroService from '@/components/hero/HeroService';
import Service from '@/components/service/Service';
import Service1 from '@/components/NewService/Service1/service';
// import Service2 from '@/components/NewService/Service2/Service2';
// import Service3 from '@/components/NewService/Service3/Service3';
// import Service4 from '@/components/NewService/Service4/Service4';
// import Service5 from '@/components/NewService/Service5/Service5';
// import Service6 from '@/components/NewService/Service6/Service6';
import Testimonial from '@/components/testimonial/Testimonial';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
// import Sticky from '@/components/sticky/Sticky';


export const metadata = {
  title: "Service Vixan - Digital  Creative Agency Next js Template",  
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        {/* <HeroService /> */}
        <Service1 />
        {/* <Service2 /> */}
        {/* <Service3 /> */}
        {/* <Service4 /> */}
        {/* <Service5 /> */}
        {/* <Service6 /> */}
        
        <Service />
        <Testimonial style_service={true} />
        <AboutHomeFour />
        <FooterOne />
      </div>
      {/* <Sticky /> */}
    </Wrapper>
  );
};

export default index;