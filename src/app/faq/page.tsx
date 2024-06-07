
import FaqArea from '@/components/faq/FaqArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



export const metadata = {
  title: "Faq Vixan - Digital  Creative Agency Next js Template",  
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <FaqArea />
        <FooterOne />
      </div>      
    </Wrapper>
  );
};

export default index;