
import React from 'react';
const title = `Elevating brands through inspired design`

const MarqueeAreaHomeThree = () => {
  return (
    <>
      <div className="cs_moving_section_wrap cs_bold cs_primary_bg py-4">
        <div className="cs_moving_section_in">
          <h4 className="cs_moving_section mb-0 cs_white_color">
            {title}&nbsp;
            <span className="cs_accent_color">
              &bull; {title} &bull;
            </span> &nbsp; {title}
            <span className="cs_accent_color">
              &bull; {title} &bull;
            </span>
          </h4>
          <h4 className="cs_moving_section mb-0 cs_white_color">
            {title}&nbsp;
            <span className="cs_accent_color">
              &bull; {title} &bull;
            </span> &nbsp; {title}
            <span className="cs_accent_color">
              &bull; {title} &bull;
            </span>
          </h4>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default MarqueeAreaHomeThree;