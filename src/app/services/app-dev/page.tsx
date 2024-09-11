import AppHero from '@/components/hero/AppHero';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export const metadata = {
  title: "Service Vixan - Digital  Creative Agency Next js Template",  
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <AppHero/>
        
      </div>
    </Wrapper>
  );
};

export default index;