import SeoHero from '@/components/hero/SeoHero';
import SeoServices from '@/components/service/SeoServices';
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
        <SeoHero />
        <SeoServices />
      </div>
    </Wrapper>
  );
};

export default index;