"use client";

import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your process for starting a new project?",
      answer:
        "Our process includes an initial consultation to understand your needs, followed by a proposal, project planning, development, testing, and deployment. We also offer ongoing support and maintenance.",
    },
    {
      question: "What makes your IT services different from others?",
      answer:
        "Our services stand out due to our commitment to innovation, personalized solutions, and a team of expert engineers who ensure the highest quality in every project.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes, we work with businesses of all sizes, from startups to large enterprises, providing scalable solutions tailored to their specific needs.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience working with a variety of industries, including healthcare, finance, education, retail, and more.",
    },
    {
      question: "How do you stay updated with the latest technology trends?",
      answer:
        "We have a top-notch team of experts who are passionate about current trends and technologies. They are continuously learning through regular training, certifications, and active participation in industry forums and tech communities. Our commitment to innovation is driven by our team's dedication to staying ahead in the ever-evolving tech landscape.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.question} onClick={() => handleToggle(index)}>
            {faq.question}
            <span style={styles.icon}>{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div
            style={{
              ...styles.answer,
              maxHeight: activeIndex === index ? "200px" : "0",
              padding: activeIndex === index ? "10px 0" : "0",
              opacity: activeIndex === index ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.5s ease, opacity 0.3s ease",
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#444",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "32px",
    fontWeight: "bold",
  },
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    marginBottom: "15px",
    padding: "15px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s",
  },
  question: {
    cursor: "pointer",
    fontWeight: "600",
    color: "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
  },
  icon: {
    fontSize: "20px",
    color: "#888",
    marginLeft: "10px",
  },
  answer: {
    marginTop: "10px",
    color: "#555",
    lineHeight: "1.6",
    transition: "padding 0.3s ease",
  },
};

export default Accordion;
