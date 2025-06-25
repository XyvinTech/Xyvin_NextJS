"use client";
import React, { useState } from "react";
import Link from "next/link";

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: "🚀",
      title: "Custom Software Development",
      shortDesc: "Tailored solutions for your unique business needs",
      description:
        "We create custom software applications from scratch, designed specifically for your business requirements and scalable for future growth.",
      technologies: ["React", "Node.js", "Python", "Cloud"],
      color: "#FF6B6B",
    },
    {
      id: 2,
      icon: "🌐",
      title: "Web Development",
      shortDesc: "Modern, responsive, and high-performance websites",
      description:
        "From corporate websites to complex web applications, we build responsive, SEO-optimized, and user-friendly digital experiences.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "API"],
      color: "#4ECDC4",
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform mobile solutions",
      description:
        "iOS and Android applications that deliver exceptional user experiences with seamless performance across all devices.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "#45B7D1",
    },
    {
      id: 4,
      icon: "⚙️",
      title: "ERP Solutions",
      shortDesc: "Streamline your business operations",
      description:
        "Comprehensive ERP systems that integrate all your business processes, from inventory management to financial reporting.",
      technologies: ["SAP", "Oracle", "Custom ERP", "Integration"],
      color: "#96CEB4",
    },
    {
      id: 5,
      icon: "🔗",
      title: "API Development & Integration",
      shortDesc: "Connect and automate your systems",
      description:
        "Build robust APIs and integrate third-party services to create seamless data flow and automation across your platforms.",
      technologies: ["REST API", "GraphQL", "Microservices", "Integration"],
      color: "#FFEAA7",
    },
    {
      id: 6,
      icon: "🤖",
      title: "AI & Machine Learning",
      shortDesc: "Intelligent solutions for the future",
      description:
        "Leverage artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications.",
      technologies: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      color: "#DDA0DD",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">💼</span>
            Our Services
          </div>
          <h2 className="section-title">
            Comprehensive IT Solutions for
            <span className="highlight"> Every Business Need</span>
          </h2>
          <p className="section-description">
            From concept to deployment, we provide end-to-end technology
            services that drive innovation and growth for businesses of all
            sizes.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${
                hoveredService === service.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-short-desc">{service.shortDesc}</p>

                <div className="service-expanded">
                  <p className="service-description">{service.description}</p>

                  <div className="technologies">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-tag"
                        style={{ borderColor: service.color }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="service-footer">
                  <Link href="/Xyvin/service" className="service-link">
                    Learn More
                    <span className="link-arrow">→</span>
                  </Link>
                  <div className="service-number">0{service.id}</div>
                </div>
              </div>

              <div
                className="service-bg"
                style={{
                  background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need a custom solution?</h3>
            <p>
              Let's discuss your project requirements and create something
              amazing together.
            </p>
          </div>
          <Link href="/Xyvin/contact" className="cta-button">
            Start Your Project
            <span className="button-icon">🚀</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 120px 0;
          background: #ffffff;
          position: relative;
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
          background: rgba(69, 183, 209, 0.1);
          border: 1px solid rgba(69, 183, 209, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #45b7d1;
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
          color: #45b7d1;
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #45b7d1, #4ecdc4);
          border-radius: 2px;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
          border-color: transparent;
        }

        .service-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .service-card:hover .service-bg {
          opacity: 1;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 24px;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-content {
          position: relative;
          z-index: 2;
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .service-short-desc {
          font-size: 1rem;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .service-expanded {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .service-card:hover .service-expanded {
          max-height: 200px;
          opacity: 1;
        }

        .service-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tech-tag {
          padding: 4px 12px;
          border: 1px solid;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #666;
          background: white;
          transition: all 0.2s ease;
        }

        .service-card:hover .tech-tag {
          transform: translateY(-2px);
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 20px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #45b7d1;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: #369fb8;
          transform: translateX(4px);
        }

        .link-arrow {
          transition: transform 0.3s ease;
        }

        .service-link:hover .link-arrow {
          transform: translateX(4px);
        }

        .service-number {
          font-size: 2rem;
          font-weight: 700;
          color: #f0f0f0;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-number {
          color: #e0e0e0;
        }

        .services-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #45b7d1, #4ecdc4);
          padding: 40px 50px;
          border-radius: 20px;
          color: white;
          flex-wrap: wrap;
          gap: 20px;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .cta-content p {
          font-size: 1rem;
          opacity: 0.9;
          margin: 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #45b7d1;
          padding: 14px 28px;
          border: 2px solid grey;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          color: #45b7d1;
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
          }

          .service-card {
            padding: 30px 25px;
          }

          .services-cta {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }
        }

        @media (max-width: 767px) {
          .services-section {
            padding: 80px 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
