"use client";
import React from "react";

const PortfolioHero = () => {
  return (
    <section className="portfolio-hero">
      <div className="container">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-badge">
              <span className="badge-icon">💼</span>
              Our Work Portfolio
            </div>
            <h1 className="hero-title">
              Projects That
              <span className="text-gradient"> Define Excellence</span>
            </h1>
            <p className="hero-description">
              Discover our portfolio of innovative IT solutions that have
              transformed businesses across industries. From cutting-edge web
              applications to intelligent automation systems.
            </p>
            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-text">Award-Winning Projects</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-text">Scalable Solutions</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-text">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 120px 0 80px;
          position: relative;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid #ff6b6b;
          border-radius: 50px;
          padding: 8px 20px;
          color: #ff6b6b;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .badge-icon {
          font-size: 16px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .text-gradient {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-highlights {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 12px 20px;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
        }

        .highlight-icon {
          font-size: 18px;
        }

        .highlight-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: #333;
        }

        @media (max-width: 767px) {
          .portfolio-hero {
            padding: 80px 0 60px;
          }

          .hero-highlights {
            gap: 15px;
          }

          .highlight-item {
            padding: 10px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioHero;
