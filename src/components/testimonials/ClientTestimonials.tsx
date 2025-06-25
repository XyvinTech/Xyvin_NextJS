"use client";
import React from "react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      content:
        "Xyvin Tech transformed our business with their innovative solutions. Their team is professional, skilled, and truly understands our needs.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO, StartupX",
      content:
        "Outstanding work! They delivered our project on time and exceeded all expectations. Highly recommend their services.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      position: "Product Manager, InnovateCo",
      content:
        "The best IT partner we have worked with. Their expertise in AI and modern technologies is remarkable.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">💬</span>
            Testimonials
          </div>
          <h2 className="section-title">
            What Our <span className="highlight">Clients Say</span> About Us
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our services.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 120px 0;
          background: #ffffff;
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

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .highlight {
          color: #45b7d1;
        }

        .section-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
        }

        .testimonial-content {
          margin-bottom: 30px;
        }

        .rating {
          margin-bottom: 20px;
        }

        .star {
          font-size: 1.2rem;
          margin-right: 4px;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          font-style: italic;
          margin: 0;
        }

        .testimonial-author {
          border-top: 1px solid #f0f0f0;
          padding-top: 20px;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 5px;
        }

        .author-position {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        @media (max-width: 991px) {
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .testimonial-card {
            padding: 30px 25px;
          }
        }

        @media (max-width: 767px) {
          .testimonials-section {
            padding: 80px 0;
          }

          .testimonials-grid {
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

export default ClientTestimonials;
