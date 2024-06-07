
'use client';
import React, { useState } from 'react';
import VideoPopup from '../modals/VideoPopup';

const VideoHomeFive = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        <div className="cs_parallax">
          <a onClick={() => setIsVideoOpen(true)}
            className="cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
            style={{ backgroundImage: 'url(/assets/img/Thumbnail.jpg)', cursor: "pointer" }}>
            <span className="cs_player_btn cs_accent_color">
              <span></span>
            </span>
          </a>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
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

export default VideoHomeFive;