"use client";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast Development",
      description:
        "Agile methodology and cutting-edge tools ensure rapid delivery without compromising quality.",
      color: "#FF6B6B",
    },
    {
      icon: "🎯",
      title: "Result-Driven Approach",
      description:
        "We focus on delivering measurable business outcomes and ROI for every project.",
      color: "#4ECDC4",
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description:
        "Military-grade security protocols and compliance with industry standards.",
      color: "#45B7D1",
    },
    {
      icon: "🚀",
      title: "Scalable Solutions",
      description:
        "Future-proof architecture that grows with your business needs and user base.",
      color: "#96CEB4",
    },
    {
      icon: "💼",
      title: "Expert Team",
      description:
        "5+ years of experience with certified professionals and industry experts.",
      color: "#FFEAA7",
    },
    {
      icon: "🔄",
      title: "24/7 Support",
      description:
        "Round-the-clock support and maintenance to ensure seamless operations.",
      color: "#DDA0DD",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">⭐</span>
            Why Choose Us
          </div>
          <h2 className="section-title">
            Why Leading Companies
            <span className="highlight"> Trust Xyvin Tech</span>
          </h2>
          <p className="section-description">
            We combine technical expertise with business acumen to deliver
            solutions that drive real results for our clients.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div
                className="feature-bg"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-choose-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #ffd700;
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
          color: #ff6b6b;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .feature-card {
          position: relative;
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 1px solid #f0f0f0;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
        }

        .feature-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .feature-card:hover .feature-bg {
          opacity: 1;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .feature-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          position: relative;
          z-index: 2;
          margin: 0;
        }

        @media (max-width: 991px) {
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .feature-card {
            padding: 30px 25px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-section {
            padding: 80px 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
