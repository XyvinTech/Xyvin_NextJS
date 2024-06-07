
import Image from 'next/image';
import React from 'react';

import journey_img_1 from "@/assets/img/Journey_story_1.png";
import journey_img_2 from "@/assets/img/Journey_story_2.png";
import journey_img_3 from "@/assets/img/Journey_story_3.png";
import journey_img_4 from "@/assets/img/Journey_story_4.png";

const JourneyHomeThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_journey_stary">
            <div className="anim_div_ShowZoom">
              <h6>Our Journey Story</h6>
            </div>

            <div className="cs_height_50"></div>

            <h2 className="cs_line_height_85 anim_text">
              Welcome to
              <span><Image src={journey_img_1} alt="Journey_story_1" /></span> our design
              studio! We create visually stunning designs
              <span><Image src={journey_img_2} alt="Journey_story_2" /></span> for print,
              digital
              <span><Image src={journey_img_3} alt="Journey_story_3" /></span> ndenvironmental
              mediums. Let's bring your vision to
              <span><Image src={journey_img_4} alt="Journey_story_4" /></span> life together
            </h2>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default JourneyHomeThree;