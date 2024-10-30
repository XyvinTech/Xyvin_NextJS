
import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogArea from '@/components/blog/BlogArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



export const metadata = {
  title: "Blog Xyvin - Digital  Creative Agency Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <BlogArea />
        <AboutHomeFour />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;