"use client";
import React from "react";
import Image from "next/image";
import team_data from "@/data/team_data";

const TeamSection = () => {
  // Get first 4 team members for the showcase
  const featuredTeam = team_data.slice(0, 4);

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">👥</span>
            Our Team
          </div>
          <h2 className="section-title">
            Meet the <span className="highlight">Experts Behind</span> Your
            Success
          </h2>
          <p className="section-description">
            Our diverse team of passionate professionals brings years of
            experience and expertise to every project.
          </p>
        </div>

        <div className="team-grid">
          {featuredTeam.map((member, index) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <Image
                  src={member.img}
                  alt={member.avatar_name}
                  width={300}
                  height={300}
                  className="member-photo"
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3 className="member-name">{member.avatar_name}</h3>
                <p className="member-role">{member.designation}</p>
                <div className="member-bio">
                  <p>
                    Leading with innovation and expertise to drive your business
                    forward.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-cta">
          <h3>Want to work with our amazing team?</h3>
          <p>
            We're always looking for talented individuals to join our growing
            family.
          </p>
          <a href="/Xyvin/contact" className="cta-button">
            Join Our Team
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .team-section {
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
          color: #4ecdc4;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .team-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .team-card:hover .member-photo {
          transform: scale(1.05);
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(78, 205, 196, 0.8),
            rgba(69, 183, 209, 0.8)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .team-social {
          display: flex;
          gap: 15px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          color: #4ecdc4;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #4ecdc4;
          color: white;
          transform: translateY(-2px);
        }

        .team-info {
          padding: 30px 25px;
          text-align: center;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .member-role {
          font-size: 0.95rem;
          color: #4ecdc4;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .member-bio {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
        }

        .team-cta {
          text-align: center;
          background: white;
          padding: 50px 40px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto;
        }

        .team-cta h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .team-cta p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 30px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(45deg, #4ecdc4, #45b7d1);
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
          color: white;
        }

        .button-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 80px 0;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
          }

          .team-image {
            height: 250px;
          }

          .team-info {
            padding: 25px 20px;
          }

          .team-cta {
            padding: 40px 30px;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
