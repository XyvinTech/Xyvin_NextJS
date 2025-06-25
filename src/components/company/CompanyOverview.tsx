"use client";
import React from "react";
import Link from "next/link";

const CompanyOverview = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "💼" },
    { number: "24/7", label: "Support", icon: "⏰" },
  ];

  const features = [
    {
      icon: "💡",
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies to build solutions that drive digital transformation.",
    },
    {
      icon: "🎯",
      title: "Client-Focused",
      description:
        "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    },
    {
      icon: "⚡",
      title: "Agile Delivery",
      description:
        "Fast, iterative development process that ensures quick time-to-market without compromising quality.",
    },
  ];

  return (
    <section className="company-overview-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="overview-content">
              <div className="section-badge">
                <span className="badge-icon">🏢</span>
                About Xyvin Tech
              </div>

              <h2 className="section-title">
                Building Tomorrow's
                <span className="highlight"> Digital Solutions</span> Today
              </h2>

              <p className="section-description">
                At Xyvin Tech, we're passionate about transforming businesses
                through innovative technology solutions. From custom software
                development to AI-powered applications, we deliver excellence
                that drives growth.
              </p>

              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overview-actions">
                <Link href="/Xyvin/about" className="btn-primary">
                  Learn More About Us
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/Xyvin/contact" className="btn-outline">
                  Let's Discuss Your Project
                </Link>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="col-lg-6">
            <div className="stats-container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="visual-element">
                <div className="floating-card">
                  <div className="card-header">
                    <div className="dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="card-title">Code Quality</div>
                  </div>
                  <div className="card-body">
                    <div className="progress-item">
                      <span>Frontend</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span>Backend</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span>DevOps</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .company-overview-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .company-overview-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(0, 245, 255, 0.1) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }

        .overview-content {
          padding-right: 40px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 245, 255, 0.1);
          border: 1px solid rgba(0, 245, 255, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #0099cc;
          margin-bottom: 24px;
        }

        .badge-icon {
          font-size: 16px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .highlight {
          color: #00b4d8;
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #00b4d8, #0099cc);
          border-radius: 2px;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 40px;
        }

        .features-grid {
          display: grid;
          gap: 24px;
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          font-size: 24px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 180, 216, 0.1);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .feature-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .feature-content p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        .overview-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(45deg, #00b4d8, #0099cc);
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 180, 216, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 180, 216, 0.4);
          color: white;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #0099cc;
          border: 2px solid #0099cc;
          padding: 12px 26px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: #0099cc;
          color: white;
          transform: translateY(-2px);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .stats-container {
          position: relative;
          padding-left: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          padding: 30px 20px;
          text-align: center;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: #00b4d8;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 500;
        }

        .floating-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f0f0f0;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff5f57;
        }

        .dots span:nth-child(2) {
          background: #ffbd2e;
        }

        .dots span:nth-child(3) {
          background: #28ca42;
        }

        .card-title {
          font-weight: 600;
          color: #1a1a1a;
        }

        .progress-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .progress-item span {
          font-size: 0.9rem;
          color: #666;
          min-width: 70px;
        }

        .progress-bar {
          width: 120px;
          height: 6px;
          background: #f0f0f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00b4d8, #0099cc);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        @media (max-width: 991px) {
          .overview-content {
            padding-right: 0;
            margin-bottom: 60px;
          }

          .stats-container {
            padding-left: 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .overview-actions {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 767px) {
          .company-overview-section {
            padding: 80px 0;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .overview-actions {
            width: 100%;
          }

          .btn-primary,
          .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyOverview;
