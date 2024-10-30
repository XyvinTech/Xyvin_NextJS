
import ContactArea from '@/components/contact/ContactArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export const metadata = {
  title: "Team Details Xyvin - Digital  Creative Agency Next js Template",  
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <ContactArea />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;