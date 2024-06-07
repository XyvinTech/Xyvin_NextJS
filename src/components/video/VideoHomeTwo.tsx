'use client';

import React, { useState } from 'react';
import VideoPopup from '../modals/VideoPopup';

const VideoHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="cs_parallax">
        <a onClick={() => setIsVideoOpen(true)}  
          className="cs_digital_agency cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
          style={{ backgroundImage: `url(/assets/img/video_block_2.jpg)`,  cursor: "pointer" }}>
          <span className="cs_player_btn cs_accent_color">
            <span></span>
          </span>
        </a>
      </div>
       {/* video modal start */}
       <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}

    </>
  );
};

export default VideoHomeTwo;