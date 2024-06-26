'use client';

import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is your process for starting a new project?", answer: "Our process includes an initial consultation to understand your needs, followed by a proposal, project planning, development, testing, and deployment. We also offer ongoing support and maintenance." },
    { question: "What makes your IT services different from others?", answer: "Our services stand out due to our commitment to innovation, personalized solutions, and a team of expert engineers who ensure the highest quality in every project." },
    { question: "Do you work with startups and small businesses?", answer: "Yes, we work with businesses of all sizes, from startups to large enterprises, providing scalable solutions tailored to their specific needs." },
    { question: "What industries do you specialize in?", answer: "We have experience working with a variety of industries, including healthcare, finance, education, retail, and more." },
    { question: "How do you stay updated with the latest technology trends?", answer: "We have a top-notch team of experts who are passionate about current trends and technologies. They are continuously learning through regular training, certifications, and active participation in industry forums and tech communities. Our commitment to innovation is driven by our team's dedication to staying ahead in the ever-evolving tech landscape." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.question} onClick={() => handleToggle(index)}>
            {faq.question}
          </div>
          <div
            style={{
              ...styles.answer,
              maxHeight: activeIndex === index ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.5s ease',
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
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize:'28px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  question: {
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#454545',
  },
  answer: {
    marginTop: '10px',
    color: '#555',
  },
};

export default Accordion;
