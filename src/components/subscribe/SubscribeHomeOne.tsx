'use client'
import React from 'react';

const SubscribeHomeOne = () => {

  const handleSuubmit = (e : any) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="container">
        <div className="cs_newsletter cs_style_1 cs_primary_bg cs_shape_wrap_1 cs_parallax">
          <div className="cs_shape_1">
            <svg width="149" height="150" viewBox="0 0 149 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.23">
                <path
                  d="M54.7532 1.2627C47.1932 42.3276 41.0646 48.4558 0 56.0158C41.065 63.5757 47.1932 69.7039 54.7532 110.769C62.3131 69.7039 68.4414 63.5757 109.506 56.0158C68.4414 48.4558 62.3128 42.3276 54.7532 1.2627Z"
                  fill="#454545" />
                <path
                  d="M114.179 78.2979C109.372 104.413 105.474 108.311 79.3584 113.119C105.474 117.926 109.372 121.824 114.179 147.939C118.987 121.824 122.885 117.926 149 113.119C122.884 108.311 118.987 104.413 114.179 78.2979Z"
                  fill="#454545" />
              </g>
            </svg>
          </div>
          <div className="cs_shape_2">
            <svg width="149" height="150" viewBox="0 0 149 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.23">
                <path
                  d="M54.7532 1.2627C47.1932 42.3276 41.0646 48.4558 0 56.0158C41.065 63.5757 47.1932 69.7039 54.7532 110.769C62.3131 69.7039 68.4414 63.5757 109.506 56.0158C68.4414 48.4558 62.3128 42.3276 54.7532 1.2627Z"
                  fill="#454545" />
                <path
                  d="M114.179 78.2979C109.372 104.413 105.474 108.311 79.3584 113.119C105.474 117.926 109.372 121.824 114.179 147.939C118.987 121.824 122.885 117.926 149 113.119C122.884 108.311 118.987 104.413 114.179 78.2979Z"
                  fill="#454545" />
              </g>
            </svg>
          </div>
          <div className="cs_section_heading cs_style_1 cs_color_1 text-center">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_upanddowns">
                Stay Ahead With Our Top Notch <br />Digital Services
              </h2>
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_40"></div>
          <form className="cs_newsletter_form" onSubmit={handleSuubmit}>
            <input type="text" className="cs_newsletter_input" placeholder="Enter Your Email" />
            <button className="cs_newsletter_btn">
              <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.6063 0.212923C29.3188 0.00917327 28.9413 -0.0183267 28.6288 0.145423L0.503806 14.8329C0.171306 15.0067 -0.0249444 15.3617 0.0025556 15.7354C0.0313056 16.1104 0.280056 16.4304 0.633806 16.5517L8.45256 19.2242L25.1038 4.98667L12.2188 20.5104L25.3226 24.9892C25.4201 25.0217 25.5226 25.0392 25.6251 25.0392C25.7951 25.0392 25.9638 24.9929 26.1126 24.9029C26.3501 24.7579 26.5113 24.5142 26.5526 24.2404L29.9901 1.11542C30.0413 0.765423 29.8938 0.417923 29.6063 0.212923Z"
                  fill="currentColor" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubscribeHomeOne;