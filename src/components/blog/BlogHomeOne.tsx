"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import blog_img_4 from "@/assets/img/post_4.jpg";
import blog_img_5 from "@/assets/img/post_5.jpg";
import blog_img_6 from "@/assets/img/post_6.jpg";
import blog_img_7 from "@/assets/img/post_7.jpg";
import blog_img_8 from "@/assets/img/post_8.jpg";
import blog_img_9 from "@/assets/img/post_9.jpg";
import Image, { StaticImageData } from "next/image";

interface Post {
  id: number;
  cover_image: string;
  title: string;
  description: string;
  slug: string;
}

const blog_data: {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}[] = [
  {
    id: 1,
    img: blog_img_1,
    title: "Reasons Business Needs an Agency",
    des: "Explores creative thinking.",
  },
  {
    id: 2,
    img: blog_img_2,
    title: "How a Creative Agency Can Help?",
    des: "Explores creative thinking.",
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Maximizing Your Marketing Budget",
    des: "Explores creative thinking.",
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Reasons Business Needs an Agency",
    des: "Explores creative thinking.",
  },
  {
    id: 5,
    img: blog_img_5,
    title: "How a Creative Agency Can Help?",
    des: "Explores creative thinking.",
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Maximizing Your Marketing Budget",
    des: "Explores creative thinking.",
  },
  {
    id: 7,
    img: blog_img_7,
    title: "Reasons Business Needs an Agency",
    des: "Explores creative thinking.",
  },
  {
    id: 8,
    img: blog_img_8,
    title: "How a Creative Agency Can Help?",
    des: "Explores creative thinking.",
  },
  {
    id: 9,
    img: blog_img_9,
    title: "Maximizing Your Marketing Budget",
    des: "Explores creative thinking.",
  },
];

const BlogHomeOne = ({
  style_2,
  style_3,
}: {
  style_2?: boolean;
  style_3?: boolean;
}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=admin_xyvin_ba2f4f68096"
        );
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPosts();
  }, []);

  return (
    <section>
      <div className="container">
        {style_3 ? (
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_heading_title">
                Related News <br /> New Day New Inspiration
              </h2>
            </div>
          </div>
        ) : (
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Blog
              </div>
              <h2 className="cs_section_title anim_heading_title">
                New Day <br /> New Inspiration
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/Xyvin/blog" className="cs_btn cs_style_1">
                <span>View All Blogs</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        )}
        <div className="cs_height_100 cs_height_lg_60"></div>
        <Swiper
          loop={true}
          speed={1000}
          spaceBetween={30}
          slidesPerView="auto"
          pagination={{ el: ".cs_pagination", clickable: true }}
          className={`cs_slider cs_slider_3 anim_blog ${
            style_2 ? "" : "style_slider"
          }`}
        >
          {posts.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_post cs_style_1">
                <Link
                  href={`/blog-details/${item.slug}`}
                  className="cs_post_thumb"
                >
                  <Image
                    src={item.cover_image}
                    alt="Blog Image"
                    width={300}
                    height={200}
                  />
                </Link>
                <div className="cs_post_info">
                  <h2 className="cs_post_title">
                    <Link href={`/blog-details/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="cs_m0">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!style_2 && !style_3 && (
        <div className="cs_height_150 cs_height_lg_60"></div>
      )}
    </section>
  );
};

export default BlogHomeOne;
