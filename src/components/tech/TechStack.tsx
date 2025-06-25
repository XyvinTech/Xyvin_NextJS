"use client";
import React from "react";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "#FF6B6B",
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "Vue.js", logo: "🔷" },
        { name: "Angular", logo: "🅰️" },
        { name: "TypeScript", logo: "📘" },
        { name: "Tailwind CSS", logo: "🎨" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "#4ECDC4",
      technologies: [
        { name: "Node.js", logo: "🟢" },
        { name: "Python", logo: "🐍" },
        { name: "Java", logo: "☕" },
        { name: "PHP", logo: "🐘" },
        { name: "C#", logo: "🔷" },
        { name: "Go", logo: "🔵" },
      ],
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "#45B7D1",
      technologies: [
        { name: "MongoDB", logo: "🍃" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MySQL", logo: "🐬" },
        { name: "Redis", logo: "🔴" },
        { name: "Firebase", logo: "🔥" },
        { name: "Elasticsearch", logo: "🔍" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      color: "#96CEB4",
      technologies: [
        { name: "AWS", logo: "☁️" },
        { name: "Azure", logo: "🔷" },
        { name: "Docker", logo: "🐳" },
        { name: "Kubernetes", logo: "⚓" },
        { name: "Jenkins", logo: "🏗️" },
        { name: "Terraform", logo: "🏗️" },
      ],
    },
    {
      category: "Mobile",
      icon: "📱",
      color: "#FFEAA7",
      technologies: [
        { name: "React Native", logo: "📱" },
        { name: "Flutter", logo: "🦋" },
        { name: "iOS", logo: "🍎" },
        { name: "Android", logo: "🤖" },
        { name: "Ionic", logo: "⚡" },
        { name: "Xamarin", logo: "🔷" },
      ],
    },
    {
      category: "AI/ML",
      icon: "🤖",
      color: "#DDA0DD",
      technologies: [
        { name: "TensorFlow", logo: "🧠" },
        { name: "PyTorch", logo: "🔥" },
        { name: "OpenAI", logo: "🤖" },
        { name: "Scikit-learn", logo: "📊" },
        { name: "Pandas", logo: "🐼" },
        { name: "NumPy", logo: "🔢" },
      ],
    },
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">🛠️</span>
            Technology Stack
          </div>
          <h2 className="section-title">
            Powered by
            <span className="highlight"> Cutting-Edge Technologies</span>
          </h2>
          <p className="section-description">
            We use the latest and most reliable technologies to build robust,
            scalable, and future-proof solutions for our clients.
          </p>
        </div>

        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="tech-category"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>

              <div className="technologies-list">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="tech-item"
                    style={{
                      animationDelay: `${index * 0.1 + techIndex * 0.05}s`,
                    }}
                  >
                    <span className="tech-logo">{tech.logo}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div
                className="category-bg"
                style={{
                  background: `linear-gradient(135deg, ${category.color}15, ${category.color}05)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="tech-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Modern Stack</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Continuous Learning</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-stack-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }

        .tech-stack-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e9ecef" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .container {
          position: relative;
          z-index: 2;
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
          background: rgba(150, 206, 180, 0.1);
          border: 1px solid rgba(150, 206, 180, 0.3);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #96ceb4;
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
          color: #96ceb4;
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #96ceb4, #4ecdc4);
          border-radius: 2px;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .tech-category {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 30px;
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

        .tech-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.12);
        }

        .category-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .tech-category:hover .category-bg {
          opacity: 1;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }

        .category-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .tech-category:hover .category-icon {
          transform: scale(1.1);
        }

        .category-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .technologies-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-item:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .tech-logo {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .tech-name {
          font-size: 0.9rem;
          font-weight: 500;
          color: #555;
        }

        .tech-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .stat-item {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-3px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #45b7d1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: #666;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .tech-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .tech-category {
            padding: 25px;
          }

          .technologies-list {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 10px;
          }
        }

        @media (max-width: 767px) {
          .tech-stack-section {
            padding: 80px 0;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            margin-bottom: 60px;
          }

          .tech-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .tech-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
