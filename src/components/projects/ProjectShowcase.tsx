"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Development",
    "Mobile Apps",
    "AI/ML",
    "ERP Systems",
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Modern e-commerce solution with AI-powered recommendations and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/assets/img/portfolio_1.jpg",
      link: "https://doublehorse.in/",
      type: "Website",
    },
    {
      id: 2,
      title: "Smart Healthcare App",
      category: "Mobile Apps",
      description:
        "Mobile application for healthcare management with appointment booking and telemedicine features.",
      technologies: ["React Native", "Express", "PostgreSQL", "WebRTC"],
      image: "/assets/img/portfolio_2.jpg",
      link: "https://www.goecworld.com/",
      type: "Mobile App",
    },
    {
      id: 3,
      title: "AI Document Analysis",
      category: "AI/ML",
      description:
        "Machine learning solution for automated document processing and intelligent data extraction.",
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenCV"],
      image: "/assets/img/portfolio_3.jpg",
      link: "https://basariopticals.com/",
      type: "AI Solution",
    },
    {
      id: 4,
      title: "Manufacturing ERP",
      category: "ERP Systems",
      description:
        "Comprehensive ERP system for manufacturing with inventory, production, and quality management.",
      technologies: ["React", "Java", "Oracle", "Spring Boot"],
      image: "/assets/img/portfolio_4.jpg",
      link: "https://buzinessconnect.com/",
      type: "Enterprise",
    },
    {
      id: 5,
      title: "Real Estate Portal",
      category: "Web Development",
      description:
        "Property listing platform with virtual tours, mortgage calculator, and CRM integration.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/assets/img/portfolio_5.jpg",
      link: "https://www.special40.com/",
      type: "Website",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile Apps",
      description:
        "Multi-vendor food delivery application with real-time tracking and payment integration.",
      technologies: ["Flutter", "Firebase", "Google Maps", "Razorpay"],
      image: "/assets/img/portfolio_6.jpg",
      link: "https://www.workoindia.com/",
      type: "Mobile App",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="project-showcase-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">🚀</span>
            Our Projects
          </div>
          <h2 className="section-title">
            Showcasing Our
            <span className="highlight"> Success Stories</span>
          </h2>
          <p className="section-description">
            Explore our portfolio of successful projects that demonstrate our
            expertise across various industries and technologies.
          </p>
        </div>

        <div className="filter-tabs">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-tab ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-type">{project.type}</div>
                  <Link
                    href={project.link}
                    className="project-link"
                    target="_blank"
                  >
                    <span className="link-icon">🔗</span>
                    View Project
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="showcase-cta">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>
              Let's discuss your ideas and turn them into reality with our
              expert team.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/Xyvin/portfolio" className="btn-outline">
              View All Projects
            </Link>
            <Link href="/Xyvin/contact" className="btn-primary">
              Start Your Project
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-showcase-section {
          padding: 120px 0;
          background: #ffffff;
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
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #ff6b6b;
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
          color: #ff6b6b;
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #ff6b6b, #ff8e8e);
          border-radius: 2px;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .filter-tab {
          padding: 10px 20px;
          border: 2px solid #e9ecef;
          background: white;
          border-radius: 50px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-tab:hover {
          border-color: #ff6b6b;
          color: #ff6b6b;
        }

        .filter-tab.active {
          background: #ff6b6b;
          border-color: #ff6b6b;
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
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

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.3)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-type {
          background: rgba(255, 255, 255, 0.2);
          padding: 6px 16px;
          border-radius: 20px;
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #1a1a1a;
          padding: 10px 20px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: #ff6b6b;
          color: white;
          transform: translateY(-2px);
        }

        .link-icon {
          font-size: 1rem;
        }

        .project-content {
          padding: 30px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 16px;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.3;
        }

        .project-category {
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .project-description {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 4px 12px;
          background: #f8f9fa;
          color: #555;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .tech-tag:hover {
          background: #e9ecef;
          transform: translateY(-1px);
        }

        .showcase-cta {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          padding: 50px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .cta-content p {
          font-size: 1rem;
          color: #666;
          margin: 0;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #ff6b6b;
          border: 2px solid #ff6b6b;
          padding: 12px 26px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: #ff6b6b;
          color: white;
          transform: translateY(-2px);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
          color: white;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          color: white;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
          }

          .showcase-cta {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
          }

          .cta-actions {
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .project-showcase-section {
            padding: 80px 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .filter-tabs {
            margin-bottom: 40px;
          }

          .cta-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-outline,
          .btn-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectShowcase;
