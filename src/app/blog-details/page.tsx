

import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogDetails from '@/components/details/BlogDetails';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



export const metadata = {
  title: "Blog Details Xyvin - Digital  Creative Agency Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
         <BlogDetails />
        <AboutHomeFour />
        <FooterOne />
      </div>      
    </Wrapper>
  );
};

export default index;