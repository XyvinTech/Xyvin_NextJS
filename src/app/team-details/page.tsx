
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ServiceTeam from '@/components/service/ServiceTeam';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import TeamDetailsArea from '@/components/details/TeamDetailsArea';
import Sticky from '@/components/sticky/Sticky';


export const metadata = {
  title: "Team Details Xyvin",
};

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <TeamDetailsArea />
        <ServiceTeam />
        <AboutHomeFour />
        <FooterOne />
      </div>
      {/* <Sticky /> */}
    </Wrapper>
  );
};

export default index;