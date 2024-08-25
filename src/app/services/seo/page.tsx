import PricingTable from '@/components/Table/PricingTable';
import SeoFaq from '@/components/faq/SeoFaq';
import Partners from '@/components/gellary/Partners';
import SeoHero from '@/components/hero/SeoHero';
import Pricing from '@/components/pricing/pricing';
import SeoServiceOverview from '@/components/service/SeoServiceOverview';
import SeoServices from '@/components/service/SeoServices';
import TestimonialHighlight from '@/components/testimonial/TestimonialHighlight';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export const metadata = {
  title: "Service Vixan - Digital  Creative Agency Next js Template",
};

const images = [
  "/assets/img/partners/meta.png",
  "/assets/img/partners/amazon.png",
  "/assets/img/partners/millenials.png",
  "/assets/img/partners/meta.png",
  "/assets/img/partners/amazon.png",
  "/assets/img/partners/millenials.png",
  "/assets/img/partners/meta.png",
  "/assets/img/partners/amazon.png",
  "/assets/img/partners/millenials.png",
]

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <SeoHero />
        <Partners images={images}/>
        <Pricing/>
        <SeoServiceOverview/>
        <PricingTable/>
        <SeoFaq/>
        <TestimonialHighlight/>
        <FooterOne/>
      </div>
    </Wrapper>
  );
};

export default index;