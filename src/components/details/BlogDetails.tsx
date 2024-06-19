'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import BlogHomeOne from '../blog/BlogHomeOne';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useParams();
  const id = router.id;

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined' && id) {
      const fetchBlogDetails = async () => {
        try {
          const response = await fetch(`https://darkorange-albatross-944944.hostingersite.com/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          setBlogDetails(data);
          setLoading(false);
        } catch (error) {
          setError('Error fetching blog details');
          setLoading(false);
        }
      };

      fetchBlogDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blogDetails) {
    return <p>No blog details found</p>;
  }

  const { title, content, excerpt, featured_media, author, date } = blogDetails as { title: { rendered: string }, content: { rendered: string }, excerpt: { rendered: string }, featured_media: { source_url: string }, author: string, date: string };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_word_writting">
              {title.rendered}
            </h2>
          </div>
        </div>
      </div>
      <div className="cs_height_65 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details">
              <div className="col-lg-6">
                <div className="row">
                  
                  <div className="col-md-4">
                    <div className="cs_text_style_1">
                      <p className="cs_headed_text">Published Date</p>
                      <h6 className="cs_title_text">{new Date(date).toLocaleDateString()}</h6>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_65 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="cs_portfolio_details">
           
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <h4 className="cs_heading_text anim_heading_title">
                {title.rendered}
              </h4>
              <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="anim_div_ShowDowns">
          <div className="cs_andrew_jackson">
            <div className="cs_hr_design"></div>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="anim_div_ShowDowns">
              <p className="cs_andrew_jackson_text_body cs_font_26">
                {excerpt.rendered.split('<p>')[1].split('[&hellip;]')[0]}
              </p>
            </div>
            <p className="cs_footer_text cs_color_1">{author}</p>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="cs_hr_design"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cs_img_box cs_style_1">
          {/* Add any additional images if needed */}
        </div>
        <div className="cs_height_50 cs_height_lg_50"></div>
      </div>

      <div className="cs_height_100 cs_height_lg_50"></div>

      <div className="container">
        <div className="row">
          <div className="cs_share_post anim_div_ShowDowns">
            <h6 className="m-0">SHARE POST</h6>
            <div>
              <div className="cs_share_btn_g">
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://twitter.com/">Twitter</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://www.facebook.com/">Facebook</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://www.linkedin.com/">Linkedin</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://dribbble.com/">Dribbble</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://www.instagram.com/">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_35"></div>
        <div className="cs_hr_design anim_div_ShowDowns"></div>
      </div>

      <div className="cs_height_100 cs_height_lg_50"></div>

    

    </>
  );
};

export default BlogDetails;
