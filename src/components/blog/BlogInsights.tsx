"use client";
import React from "react";
import Link from "next/link";

const BlogInsights = () => {
  return (
    <section className="blog-insights-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">📝</span>
            Latest Insights
          </div>
          <h2 className="section-title">
            Stay Updated with Our
            <span className="highlight"> Latest Insights</span>
          </h2>
          <p className="section-description">
            Discover the latest trends, tips, and insights from the world of
            technology and digital innovation.
          </p>
        </div>

        <div className="blog-cta">
          <h3>Explore Our Knowledge Hub</h3>
          <p>
            Stay informed with our latest articles, tutorials, and industry
            insights.
          </p>
          <Link href="/Xyvin/blog" className="cta-button">
            Read Our Blog
            <span className="button-arrow">→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .blog-insights-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(150, 206, 180, 0.1);
          border: 1px solid rgba(150, 206, 180, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #96ceb4;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .highlight {
          color: #96ceb4;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .blog-cta {
          text-align: center;
          background: white;
          padding: 50px 40px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto;
        }

        .blog-cta h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .blog-cta p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(45deg, #96ceb4, #4ecdc4);
          color: white;
          padding: 14px 28px;
          border: 2px solid grey;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(150, 206, 180, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(150, 206, 180, 0.4);
          color: white;
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 767px) {
          .blog-insights-section {
            padding: 80px 0;
          }

          .blog-cta {
            padding: 40px 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogInsights;
