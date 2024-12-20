"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface BlogDetailsData {
  title: string;
  body_html: string;
  tags: string;
  cover_image: string;
  user: { name: string };
  published_timestamp: string;
}

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState<BlogDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const fetchBlogDetails = async () => {
        try {
          const response = await fetch(
            `https://dev.to/api/articles/admin_xyvin_ba2f4f68096/${id}`
          );
          if (!response.ok) throw new Error("Failed to fetch data");
          const data = await response.json();
          setBlogDetails(data);
          setLoading(false);
        } catch (error) {
          setError("Error fetching blog details");
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

  const { title, body_html, tags, cover_image, user, published_timestamp } =
    blogDetails;

  // Function to share post on different social media platforms
  const handleShare = (platform: string) => {
    const currentUrl = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "Twitter":
        shareUrl = `https://twitter.com/share?url=${currentUrl}&text=${title}`;
        break;
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        break;
      case "LinkedIn":
        shareUrl = `https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${title}`;
        break;
      case "Instagram":
        navigator.clipboard.writeText(currentUrl);
        alert(
          "Link copied! You can add this to your Instagram story or message."
        );
        return;
      default:
        break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container" style={{ textAlign: "center" }}>
        {cover_image && (
          <div className="cs_img_box cs_style_1">
            <Image
              src={cover_image}
              alt="Cover Image"
              width={800}
              height={400}
              style={{ objectFit: "cover", width: "100%", maxWidth: "800px", marginLeft:"auto", marginRight:"auto" }}
            />
          </div>
        )}
      </div>

      <div className="cs_height_65 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_word_writting">{title}</h2>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="cs_text_style_1">
                      <p className="cs_headed_text">Published Date</p>
                      <h6 className="cs_title_text">
                        {new Date(published_timestamp).toLocaleDateString()}
                      </h6>
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
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <h4 className="cs_heading_text anim_heading_title">{title}</h4>
              <div dangerouslySetInnerHTML={{ __html: body_html }} />
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
              <p className="cs_andrew_jackson_text_body cs_font_26">{tags}</p>
            </div>
            <p className="cs_footer_text cs_color_1">{user.name}</p>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="cs_hr_design"></div>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_50"></div>

      <div className="container">
        <div className="row">
          <div className="cs_share_post anim_div_ShowDowns">
            <h6 className="m-0">SHARE POST</h6>
            <div>
              <div className="cs_share_btn_g">
                {["Twitter", "Facebook", "LinkedIn", "Instagram"].map(
                  (platform) => (
                    <div
                      key={platform}
                      className="col cs_share_btn cs_center"
                      onClick={() => handleShare(platform)}
                    >
                      {platform}
                    </div>
                  )
                )}
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
