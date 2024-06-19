"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Blog {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  mediaUrl: string; // Add the mediaUrl property
}

interface Media {
  guid: {
    rendered: string;
  };
}

const BlogArea: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://darkorange-albatross-944944.hostingersite.com/wp-json/wp/v2/posts?_=${new Date().getTime()}`);
        const data: Blog[] = await response.json();

        // Fetch media details for each post
        const blogPostsWithMedia = await Promise.all(
          data.map(async (blog) => {
            if (blog.featured_media) {
              const mediaResponse = await fetch(`/wp-json/wp/v2/media/${blog.featured_media}`);
              const mediaData: Media = await mediaResponse.json();
              return {
                ...blog,
                mediaUrl: mediaData.guid.rendered,
              };
            } else {
              return {
                ...blog,
                mediaUrl: '/default-image.jpg',
              };
            }
          })
        );

        setBlogs(blogPostsWithMedia);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
              <div key={item.id} className={`col-md-4 ${i % 3 === 1 ? 'mt-0 mt-md-5' : ''} ${i % 3 === 2 ? 'mt-0 mt-md-5' : ''}`}>
                <div className="anim_div_ShowDowns">
                  <Link href={`/blog-details/${item.id}`} className="cs_blog cs_style_1">
                    <div>
                      <Image
                        src={item.mediaUrl}
                        alt={item.title.rendered}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                      <p className="cs_blog_subtitle" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
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
                <a href="#" className="cs_hero_btn cs_round_btn btn-item"><span></span> Load More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
