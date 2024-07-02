
import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogArea from '@/components/blog/BlogArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Sticky from '@/components/sticky/Sticky';
import BlogHomeOne from '@/components/blog/BlogHomeOne';


export const metadata = {
  title: "Blog Vixan - Digital  Creative Agency Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <BlogArea />
        <AboutHomeFour />
        {/* <BlogHomeOne/> */}
        <FooterOne />
      </div>
      <Sticky/>
    </Wrapper>
  );
};

export default index;