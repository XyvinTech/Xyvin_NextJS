"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getRelatedPosts, getAllBlogPosts } from "@/data/blog_data";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  slug: string;
  image: string;
  authorImage?: string;
}

interface BlogDetailPageProps {
  post: BlogPost;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
  const relatedPosts = getRelatedPosts(post.slug, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);
  const shareText = encodeURIComponent(post.excerpt);

  return (
    <article className="blog-detail">
      {/* Blog Header */}
      <section className="blog-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <nav className="breadcrumb-nav">
                <Link href="/Xyvin/blog" className="breadcrumb-link">
                  ← Back to Blog
                </Link>
              </nav>

              <div className="article-meta">
                <span className="category-badge">{post.category}</span>
                <div className="meta-info">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="separator">•</span>
                  <span className="read-time">{post.readTime}</span>
                  <span className="separator">•</span>
                  <span className="author">By {post.author}</span>
                </div>
              </div>

              <h1 className="article-title">{post.title}</h1>
              <p className="article-excerpt">{post.excerpt}</p>

              {/* Tags */}
              <div className="tags-container">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="featured-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="image-container">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="article-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="content-wrapper">
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="author-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="author-card">
                <div className="author-avatar">
                  {post.authorImage && (
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={80}
                      height={80}
                      className="avatar-image"
                    />
                  )}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{post.author}</h4>
                  <p className="author-bio">
                    Expert software developer and technology consultant with
                    years of experience in building scalable applications and
                    digital solutions.
                  </p>
                  <div className="author-social">
                    <a href="#" className="social-link" title="LinkedIn">
                      <span>💼</span>
                    </a>
                    <a href="#" className="social-link" title="Twitter">
                      <span>🐦</span>
                    </a>
                    <a href="#" className="social-link" title="GitHub">
                      <span>👨‍💻</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <section className="social-share">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="share-container">
                <h4 className="share-title">Share this article</h4>
                <div className="share-buttons">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                  >
                    <span className="icon">🐦</span>
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                  >
                    <span className="icon">💼</span>
                    LinkedIn
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn facebook"
                  >
                    <span className="icon">📘</span>
                    Facebook
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(shareUrl)}
                    className="share-btn copy"
                  >
                    <span className="icon">🔗</span>
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h3 className="section-title">Related Articles</h3>
                <div className="related-grid">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/Xyvin/blog/${relatedPost.slug}`}
                      className="related-card"
                    >
                      <div className="card-image">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={400}
                          height={200}
                          className="related-image"
                        />
                      </div>
                      <div className="card-content">
                        <span className="card-category">
                          {relatedPost.category}
                        </span>
                        <h4 className="card-title">{relatedPost.title}</h4>
                        <p className="card-excerpt">{relatedPost.excerpt}</p>
                        <div className="card-meta">
                          <span className="read-time">
                            {relatedPost.readTime}
                          </span>
                          <span className="date">
                            {formatDate(relatedPost.date)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        .blog-detail {
          padding-top: 120px;
        }

        .blog-header {
          padding: 60px 0;
        }

        .breadcrumb-nav {
          margin-bottom: 30px;
        }

        .breadcrumb-link {
          color: #4ecdc4;
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s ease;
        }

        .breadcrumb-link:hover {
          color: #45b7d1;
        }

        .article-meta {
          margin-bottom: 30px;
        }

        .category-badge {
          background: linear-gradient(45deg, #4ecdc4, #45b7d1);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .meta-info {
          margin-top: 12px;
          color: #666;
          font-size: 0.9rem;
        }

        .separator {
          margin: 0 8px;
          color: #ccc;
        }

        .article-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin: 30px 0;
        }

        .article-excerpt {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 30px;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .tag {
          background: #f8f9fa;
          color: #4ecdc4;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #e9ecef;
        }

        .featured-image {
          margin-bottom: 60px;
        }

        .image-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .article-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .article-content {
          padding: 60px 0;
        }

        .content-wrapper {
          background: white;
          padding: 60px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .prose {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333;
        }

        .prose h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 40px 0 20px;
          border-bottom: 2px solid #4ecdc4;
          padding-bottom: 10px;
        }

        .prose h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 30px 0 15px;
        }

        .prose h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 25px 0 12px;
        }

        .prose p {
          margin-bottom: 20px;
        }

        .prose ul,
        .prose ol {
          margin: 20px 0;
          padding-left: 30px;
        }

        .prose li {
          margin-bottom: 8px;
        }

        .prose pre {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          overflow-x: auto;
          font-family: "Monaco", "Courier New", monospace;
          font-size: 0.9rem;
        }

        .prose code {
          background: #f8f9fa;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: "Monaco", "Courier New", monospace;
          font-size: 0.9em;
        }

        .prose pre code {
          background: none;
          padding: 0;
        }

        .prose strong {
          font-weight: 600;
          color: #1a1a1a;
        }

        .author-section {
          padding: 60px 0;
          background: #f8f9fa;
        }

        .author-card {
          display: flex;
          gap: 20px;
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .author-avatar {
          flex-shrink: 0;
        }

        .avatar-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .author-bio {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .author-social {
          display: flex;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #f8f9fa;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #4ecdc4;
          transform: translateY(-2px);
        }

        .social-share {
          padding: 60px 0;
        }

        .share-container {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .share-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 25px;
        }

        .share-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .share-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          text-decoration: none;
          color: #666;
          background: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .share-btn:hover {
          border-color: #4ecdc4;
          color: #4ecdc4;
          transform: translateY(-2px);
        }

        .share-btn.copy {
          cursor: pointer;
        }

        .related-posts {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 50px;
          text-align: center;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .related-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .related-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          color: inherit;
        }

        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .related-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .related-card:hover .related-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 25px;
        }

        .card-category {
          background: rgba(78, 205, 196, 0.1);
          color: #4ecdc4;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 15px 0 10px;
          line-height: 1.4;
        }

        .card-excerpt {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 15px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .blog-detail {
            padding-top: 100px;
          }

          .content-wrapper {
            padding: 30px 20px;
          }

          .author-card {
            flex-direction: column;
            text-align: center;
          }

          .share-buttons {
            flex-direction: column;
            align-items: center;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </article>
  );
};

export default BlogDetailPage;
