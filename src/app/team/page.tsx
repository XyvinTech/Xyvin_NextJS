

import AboutHomeFour from '@/components/about/AboutHomeFour';
import TeamArea from '@/components/team/TeamArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
// import Sticky from '@/components/sticky/Sticky';


export const metadata = {
  title: "Team Vixan - Digital  Creative Agency Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <TeamArea />
        <AboutHomeFour />
        <FooterOne />
      </div>
      {/* <Sticky /> */}
    </Wrapper>
  );
};

export default index;