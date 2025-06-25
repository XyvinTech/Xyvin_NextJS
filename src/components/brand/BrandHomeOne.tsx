'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';


type DataType = StaticImageData[];
import brand_img_1 from "@/assets/img/new_brand1.svg"
import brand_img_2 from "@/assets/img/new_brand2.svg"
import brand_img_3 from "@/assets/img/new_brand3.svg"
import brand_img_4 from "@/assets/img/new_brand4.svg"
import brand_img_5 from "@/assets/img/new_brand5.svg"
import brand_img_6 from "@/assets/img/new_brand6.svg"
import brand_img_7 from "@/assets/img/new_brand7.svg"
import brand_img_8 from "@/assets/img/new_brand8.svg"
import brand_img_9 from "@/assets/img/new_brand9.svg"
import brand_img_10 from "@/assets/img/ACKAF.png"
import brand_img_11 from "@/assets/img/HEF.png"
import brand_img_12 from "@/assets/img/ITCC (1).png"
import brand_img_13 from "@/assets/img/IPA (1).png"
import brand_img_14 from "@/assets/img/Khedmah (1).png"
import brand_img_15 from "@/assets/img/KSSIA.png"
import brand_img_16 from "@/assets/img/Skopick.png"
const brand_data: DataType = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  brand_img_9,
  brand_img_10,
  brand_img_11,
  brand_img_12,
  brand_img_13,
  brand_img_14,
  brand_img_15,
  brand_img_16

]

import brand_thumb_1 from "@/assets/img/new_brand10.svg"
import brand_thumb_2 from "@/assets/img/new_brand1.svg"
import brand_thumb_3 from "@/assets/img/new_brand2.svg"
import brand_thumb_4 from "@/assets/img/new_brand3.svg"
import brand_thumb_5 from "@/assets/img/new_brand4.svg"
import brand_thumb_6 from "@/assets/img/new_brand5.svg"
import brand_thumb_7 from "@/assets/img/new_brand6.svg"
import brand_thumb_8 from "@/assets/img/new_brand7.svg"
import brand_thumb_9 from "@/assets/img/new_brand8.svg"
import brand_thumb_10 from "@/assets/img/ACKAF.png"
import brand_thumb_11 from "@/assets/img/HEF.png"
import brand_thumb_12 from "@/assets/img/ITCC (1).png"
import brand_thumb_13 from "@/assets/img/IPA (1).png"
import  brand_thumb_14 from "@/assets/img/Khedmah (1).png"
import brand_thumb_15 from "@/assets/img/KSSIA.png"
import brand_thumb_16 from "@/assets/img/Skopick.png"


const brand_thumb_data: DataType = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_3,
  brand_thumb_4,
  brand_thumb_5,
  brand_thumb_6,
  brand_thumb_7,
  brand_thumb_8,
  brand_thumb_9,
  brand_thumb_10,
  brand_thumb_11,
  brand_thumb_12,
  brand_thumb_13,
  brand_thumb_14,
  brand_thumb_15,
  brand_thumb_16
]


const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <> 
      
      {style_2 ?
        <>
          <div className="cs_height_150 cs_height_lg_60"></div>
          <p className="text-center cs_font_18 cs_normal">
            130+ Our Client & Partner We Are Working Together
          </p>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </>
        :
        <div className="cs_height_140 cs_height_lg_70"></div>
      }
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_45 cs_height_lg_45"></div>
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
      <div className="cs_height_140 cs_height_lg_70"></div>
    </>
  );
};

export default BrandHomeOne;