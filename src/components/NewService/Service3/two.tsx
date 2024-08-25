// components/FAQComponent.tsx
"use client"
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons for dropdown

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "What is your return policy?", answer: "Our return policy allows returns within 30 days of purchase." },
  { question: "Do you offer technical support?", answer: "Yes, we offer 24/7 technical support for all our products." },
  { question: "How do I track my order?", answer: "You can track your order using the tracking link provided in your confirmation email." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards and PayPal." },
  { question: "Can I change my shipping address after placing an order?", answer: "Yes, you can update your shipping address within 24 hours of placing the order." },
  { question: "Do you ship internationally?", answer: "Yes, we offer international shipping to most countries." }
];

export default function Two() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Division */}
      <div className="md:w-1/3 flex flex-col justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-700">
          Find answers to the most common questions about our products and services.
        </p>
      </div>

      {/* Right Division */}
      <div className="md:w-2/3">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <div className="p-4 bg-violet-100">
                <p className="text-gray-800">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
