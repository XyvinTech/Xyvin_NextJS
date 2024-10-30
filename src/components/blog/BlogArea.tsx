"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface User {
  name: string;
  username: string;
  profile_image: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover_image: string;
  published_at: string;
  reading_time_minutes: number;
  user: User;
}

const BlogArea: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3); 
  const [totalPosts, setTotalPosts] = useState(3);

  useEffect(() => {
    const fetchTotalPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=admin_xyvin_ba2f4f68096"
        );
        const data: Blog[] = await response.json();
        setTotalPosts(data.length); 
      } catch (error) {
        console.error("Error fetching total posts:", error);
      }
    };

    fetchTotalPosts();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=admin_xyvin_ba2f4f68096&page=${currentPage}&per_page=${blogsPerPage}`
        );
        const data: Blog[] = await response.json();
        setBlogs((prevBlogs) => [...prevBlogs, ...data]); // Append new blogs to existing ones
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, blogsPerPage]); // Dependency array includes currentPage

  const loadMoreBlogs = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment current page
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  New Day <br /> New Inspiration
                </h2>
                {totalPosts !== null && <p>Total Posts: {totalPosts}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
            {blogs.map((item, i) => (
              <div
                key={item.id}
                className={`col-md-4 ${i % 3 === 1 ? "mt-0 mt-md-5" : ""} ${
                  i % 3 === 2 ? "mt-0 mt-md-5" : ""
                }`}
              >
                <div className="anim_div_ShowDowns">
                  <Link
                    href={`/blog-details/${item.slug}`}
                    className="cs_blog cs_style_1"
                  >
                    <div>
                      <Image
                        src={item.cover_image}
                        alt={item.title}
                        width={300}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">{item.title}</h6>
                      <p className="cs_blog_subtitle">{item.description}</p>
                      <div className="cs_blog_meta">
                        <span>
                          By {item.user.name} | {item.reading_time_minutes} min
                          read
                        </span>
                        <br />
                        <span>
                          {new Date(item.published_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                {blogs.length < totalPosts && (
                  <button
                    onClick={loadMoreBlogs}
                    className="cs_hero_btn cs_round_btn btn-item"
                  >
                    <span></span> Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
