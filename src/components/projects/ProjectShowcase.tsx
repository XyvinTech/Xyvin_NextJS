"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rocket, ExternalLink } from "lucide-react";

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
      image: "/assets/img/portfolio_1.jpg",
      link: "https://doublehorse.in/",
      type: "Website",
    },
    {
      id: 2,
      title: "Smart Healthcare App",
      category: "Mobile Apps",
      image: "/assets/img/portfolio_2.jpg",
      link: "https://www.goecworld.com/",
      type: "Mobile App",
    },
    {
      id: 3,
      title: "AI Document Analysis",
      category: "AI/ML",
      image: "/assets/img/portfolio_3.jpg",
      link: "https://basariopticals.com/",
      type: "AI Solution",
    },
    {
      id: 4,
      title: "Manufacturing ERP",
      category: "ERP Systems",
      image: "/assets/img/portfolio_4.jpg",
      link: "https://buzinessconnect.com/",
      type: "Enterprise",
    },
    {
      id: 5,
      title: "Real Estate Portal",
      category: "Web Development",
      image: "/assets/img/portfolio_5.jpg",
      link: "https://www.special40.com/",
      type: "Website",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile Apps",
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
            <Rocket className="badge-icon" size={18} />
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

        <div className="projects-grid" data-count={filteredProjects.length}>
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
                    <ExternalLink className="link-icon" size={16} />
                    View Project
                  </Link>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
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
          background: linear-gradient(135deg, #f8fdff 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .project-showcase-section::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .project-showcase-section::after {
          content: "";
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
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
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.1), rgba(0, 180, 216, 0.15));
          border: 2px solid rgba(0, 180, 216, 0.2);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: #00b4d8;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .section-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 180, 216, 0.15);
        }

        .badge-icon {
          color: #00b4d8;
          filter: drop-shadow(0 2px 4px rgba(0, 180, 216, 0.3));
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #1a1a1a;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .highlight {
          color: #00b4d8;
          position: relative;
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #00b4d8, #48cae4);
          border-radius: 2px;
          opacity: 0.7;
        }

        .section-description {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #555;
          font-weight: 400;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 60px;
          flex-wrap: wrap;
          padding: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 60px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 180, 216, 0.1);
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .filter-tab {
          padding: 12px 24px;
          border: none;
          background: transparent;
          border-radius: 50px;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          font-size: 14px;
        }

        .filter-tab:hover {
          color: #00b4d8;
          transform: translateY(-1px);
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          color: white;
          box-shadow: 0 4px 20px rgba(0, 180, 216, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(300px, 400px));
          gap: 30px;
          margin-bottom: 80px;
          justify-content: center;
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Handle different numbers of cards */
        .projects-grid[data-count="1"] {
          grid-template-columns: 400px;
        }

        .projects-grid[data-count="2"] {
          grid-template-columns: repeat(2, 400px);
          max-width: 850px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 180, 216, 0.1);
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
          backdrop-filter: blur(10px);
          width: 100%;
          max-width: 400px;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 180, 216, 0.15);
          border-color: rgba(0, 180, 216, 0.3);
        }

        .project-image {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f9ff, #e0f7fa);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 180, 216, 0.85),
            rgba(0, 119, 182, 0.9)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(5px);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-type {
          background: rgba(255, 255, 255, 0.25);
          padding: 8px 20px;
          border-radius: 25px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-type {
          transform: translateY(0);
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: #00b4d8;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
          transform: translateY(10px);
          border: 2px solid transparent;
        }

        .project-card:hover .project-link {
          transform: translateY(-2px);
        }

        .project-link:hover {
          background: #00b4d8;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 180, 216, 0.4);
        }

        .link-icon {
          transition: transform 0.3s ease;
          color: currentColor;
        }

        .project-link:hover .link-icon {
          transform: rotate(45deg);
        }

        .project-content {
          padding: 32px 24px 24px;
          background: white;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .project-category {
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.1), rgba(0, 180, 216, 0.15));
          color: #00b4d8;
          padding: 6px 16px;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          border: 1px solid rgba(0, 180, 216, 0.2);
        }

        .showcase-cta {
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.05), rgba(0, 180, 216, 0.02));
          padding: 60px 50px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
          border: 2px solid rgba(0, 180, 216, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .showcase-cta::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .cta-content p {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #00b4d8;
          border: 2px solid #00b4d8;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 15px;
        }

        .btn-outline:hover {
          background: #00b4d8;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 180, 216, 0.3);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 20px rgba(0, 180, 216, 0.3);
          font-size: 15px;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 180, 216, 0.4);
          color: white;
        }

        .btn-arrow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 16px;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 991px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 820px;
          }

          .projects-grid:has(.project-card:only-child) {
            grid-template-columns: 400px;
          }

          .projects-grid:has(.project-card:nth-child(2):last-child) {
            grid-template-columns: repeat(2, 1fr);
          }

          .showcase-cta {
            flex-direction: column;
            text-align: center;
            padding: 50px 40px;
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
            max-width: 400px;
            margin: 0 auto 80px;
          }

          .projects-grid:has(.project-card:only-child) {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .filter-tabs {
            margin-bottom: 40px;
            padding: 6px;
            gap: 8px;
          }

          .filter-tab {
            padding: 10px 18px;
            font-size: 13px;
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

          .showcase-cta {
            padding: 40px 24px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }

          .projects-grid {
            max-width: 100%;
          }

          .project-card {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectShowcase;