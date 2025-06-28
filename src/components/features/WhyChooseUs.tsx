"use client";
import React from "react";
import { 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Users, 
  Headphones,
  Star,
  CheckCircle
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Development",
      description:
        "Agile methodology and cutting-edge tools ensure rapid delivery without compromising quality.",
      color: "#45b7d1",
      gradient: "linear-gradient(135deg, #45b7d1, #4ecdc4)"
    },
    {
      icon: Target,
      title: "Result-Driven Approach",
      description:
        "We focus on delivering measurable business outcomes and ROI for every project.",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #45b7d1)"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Military-grade security protocols and compliance with industry standards.",
      color: "#45b7d1",
      gradient: "linear-gradient(135deg, #45b7d1, #4ecdc4)"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description:
        "Future-proof architecture that grows with your business needs and user base.",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #45b7d1)"
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "5+ years of experience with certified professionals and industry experts.",
      color: "#45b7d1",
      gradient: "linear-gradient(135deg, #45b7d1, #4ecdc4)"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock support and maintenance to ensure seamless operations.",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #45b7d1)"
    },
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Happy Clients" },
    { number: "150+", label: "Projects Delivered" },
    { number: "24/7", label: "Technical Support" }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Star size={16} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            Why Leading Companies
            <span className="highlight"> Trust Xyvin Tech</span>
          </h2>
          <p className="section-description">
            We combine technical expertise with business acumen to deliver
            solutions that drive real results and sustainable growth for our clients.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="card-inner">
                  <div className="feature-icon-container">
                    <div 
                      className="feature-icon"
                      style={{ background: feature.gradient }}
                    >
                      <IconComponent size={28} />
                    </div>
                  </div>
                  
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>

                  <div className="feature-check">
                    <CheckCircle size={20} style={{ color: feature.color }} />
                  </div>
                </div>

                <div
                  className="feature-bg"
                  style={{
                    background: `${feature.color}08`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-description">
              Join 50+ companies that have accelerated their growth with our solutions.
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                Get Started Today
                <Rocket size={18} />
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-choose-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8fafb 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        .why-choose-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(69, 183, 209, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #45b7d1, #4ecdc4);
          color: white;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(69, 183, 209, 0.3);
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #0f172a;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #45b7d1, #4ecdc4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Stats Bar */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          margin: 60px 0 80px;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #45b7d1, #4ecdc4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 500;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .feature-card {
          position: relative;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.4s ease;
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
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .feature-card:hover .feature-bg {
          opacity: 1;
        }

        .card-inner {
          padding: 40px 32px;
          position: relative;
          z-index: 2;
        }

        .feature-icon-container {
          margin-bottom: 24px;
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(69, 183, 209, 0.3);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 40px rgba(69, 183, 209, 0.4);
        }

        .feature-content {
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .feature-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .feature-check {
          display: flex;
          justify-content: flex-end;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover .feature-check {
          opacity: 1;
        }

        .feature-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 24px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #45b7d1, #4ecdc4);
          border-radius: 24px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 32px;
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #45b7d1;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 14px 30px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 991px) {
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
          }

          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            padding: 32px;
          }
        }

        @media (max-width: 767px) {
          .why-choose-section {
            padding: 80px 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-bar {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 24px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .card-inner {
            padding: 32px 24px;
          }

          .cta-section {
            padding: 40px 24px;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;