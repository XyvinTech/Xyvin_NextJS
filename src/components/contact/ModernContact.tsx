"use client";
import React, { useState } from "react";
import Link from "next/link";

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Our Office",
      details: [
        "dewSpace Business Center",
        "Ernakulam North, Kochi",
        "Kerala, India - 682018",
      ],
      action: "Get Directions",
      link: "https://www.google.com/maps",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: [
        "+91 813 891 6303",
        "Mon - Fri: 9AM - 6PM IST",
        "Response within 2 hours",
      ],
      action: "Call Now",
      link: "tel:+918138916303",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: [
        "+91 813 891 6303",
        "Quick support available",
        "24/7 chat support",
      ],
      action: "Chat Now",
      link: "https://wa.me/918138916303",
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: [
        "admin@xyvin.com",
        "Business inquiries",
        "Response within 24 hours",
      ],
      action: "Send Email",
      link: "mailto:admin@xyvin.com",
    },
  ];

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "ERP Solutions",
    "API Integration",
    "AI & ML Services",
    "Cloud Solutions",
    "IT Consulting",
    "Other",
  ];

  return (
    <section className="modern-contact">
      {/* Contact Hero */}
      <div className="contact-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-badge">
                <span className="badge-icon">🤝</span>
                Let's Connect
              </div>
              <h1 className="hero-title">
                Ready to Transform
                <span className="text-gradient"> Your Business?</span>
              </h1>
              <p className="hero-description">
                Get in touch with our team of experts to discuss your project
                requirements and discover how we can help you achieve your
                digital transformation goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="contact-info-section">
        <div className="container">
          <div className="row">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="contact-card">
                  <div className="card-icon">{info.icon}</div>
                  <h3 className="card-title">{info.title}</h3>
                  <div className="card-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                  <Link href={info.link} className="card-action">
                    {info.action} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="form-header text-center">
                <h2 className="section-title">Start Your Project</h2>
                <p className="section-description">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed proposal for your project.
                </p>
              </div>

              <div className="contact-form-card">
                {submitStatus === "success" ? (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Thank You!</h3>
                    <p>
                      Your message has been sent successfully. We'll get back to
                      you within 24 hours.
                    </p>
                    <button
                      className="btn-primary"
                      onClick={() => setSubmitStatus("idle")}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="company">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Project Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      />
                    </div>

                    <div className="form-actions">
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner"></span>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <span className="btn-icon">🚀</span>
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="form-note">
                        * Required fields. We respect your privacy and never
                        share your information.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-title">Need Something Specific?</h3>
              <div className="quick-links">
                <Link href="/Xyvin/portfolio" className="quick-link">
                  <span className="link-icon">🔍</span>
                  View Our Work
                </Link>
                <Link href="/Xyvin/service" className="quick-link">
                  <span className="link-icon">⚙️</span>
                  Explore Services
                </Link>
                <Link href="/Xyvin/blog" className="quick-link">
                  <span className="link-icon">📖</span>
                  Read Our Blog
                </Link>
                <Link href="/Xyvin/about" className="quick-link">
                  <span className="link-icon">👥</span>
                  About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-contact {
          padding-top: 80px;
        }

        .contact-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 0;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(150, 206, 180, 0.1);
          border: 1px solid #96ceb4;
          border-radius: 50px;
          padding: 8px 20px;
          color: #96ceb4;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .text-gradient {
          background: linear-gradient(45deg, #96ceb4, #4ecdc4);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-info-section {
          padding: 80px 0;
          background: white;
        }

        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          height: 100%;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .card-details p {
          color: #666;
          margin-bottom: 5px;
          font-size: 0.95rem;
        }

        .card-action {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #96ceb4;
          font-weight: 600;
          text-decoration: none;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        .card-action:hover {
          color: #4ecdc4;
          transform: translateX(5px);
        }

        .contact-form-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .form-header {
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
        }

        .contact-form-card {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
        }

        .contact-form .row {
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #96ceb4;
          box-shadow: 0 0 0 3px rgba(150, 206, 180, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-actions {
          text-align: center;
          margin-top: 30px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          background: linear-gradient(45deg, #96ceb4, #4ecdc4);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(150, 206, 180, 0.3);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .form-note {
          font-size: 0.9rem;
          color: #666;
          margin-top: 15px;
          margin-bottom: 0;
        }

        .success-message {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .success-message h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .success-message p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 30px;
        }

        .quick-links-section {
          padding: 80px 0;
          background: white;
        }

        .quick-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .quick-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          color: #666;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .quick-link:hover {
          background: #96ceb4;
          border-color: #96ceb4;
          color: white;
          transform: translateY(-2px);
        }

        .link-icon {
          font-size: 1.2rem;
        }

        @media (max-width: 767px) {
          .contact-hero {
            padding: 60px 0;
          }

          .contact-form-card {
            padding: 30px 20px;
          }

          .quick-links {
            flex-direction: column;
            align-items: center;
          }

          .contact-info-section,
          .contact-form-section,
          .quick-links-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernContact;
