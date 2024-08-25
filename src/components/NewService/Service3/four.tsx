"use client"

import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    heading: "Marketing",
    paragraph: "Elevate your marketing strategy by orchestrating event-triggered, personalized campaigns seamlessly across various marketing and advertising channels. Leverage data-driven insights to refine your targeting and deliver compelling content that resonates with your audience, ultimately maximizing the impact of your marketing efforts.",
    logo: "/assets/img/CRM/marketing.png" 
  },
  {
    heading: "Lead Capture",
    paragraph: "Effortlessly integrate your CRM with all lead generation sources, eliminating manual lead registration and streamlining the lead capture process. Enhance lead data accuracy and completeness by automating the capture of critical information, ensuring your sales team has a comprehensive view to convert leads into valuable customers.",
    logo: "/assets/img/CRM/Lead Capture.png" 
  },
  {
    heading: "Sales",
    paragraph: "Optimize lead processing speed and quality with live AI assistance, gaining end-to-end visibility into the sales pipeline. Empower your sales team with efficiency in daily tasks, such as automated follow-ups and personalized interactions, enabling them to focus on building meaningful relationships and closing deals.",
    logo: "/assets/img/CRM/Sales.png" 
  },
  {
    heading: "Customer Service",
    paragraph: "Establish an efficient contact center with multi-channel case capture, rule-based case routing, and rapid access to a knowledge base for your agents. Improve customer satisfaction by providing timely and informed responses, turning customer interactions into positive experiences that foster loyalty and brand advocacy.",
    logo: "/assets/img/CRM/Customer Service.png" 
  },
  {
    heading: "Call Center",
    paragraph: "Automate inbound call routing, schedule outbound calls, and record calls for further analysis and service improvement. Enhance the customer experience by reducing wait times, increasing agent productivity, and gaining valuable insights into call trends and customer preferences.",
    logo: "/assets/img/CRM/Call Center.png"
  },
  {
    heading: "Field Service",
    paragraph: "Maximize efficiency in on-site visits for your field workers, ensuring smooth operations during every interaction. Equip your field service team with mobile tools that facilitate real-time communication, scheduling, and access to essential information, enhancing their ability to deliver exceptional service.",
    logo: "/assets/img/CRM/Field Service.png"
  },
  {
    heading: "Customer Self-Service",
    paragraph: "Create a customer-centric space for quick answers to common challenges, reducing the workload on your customer service team. Implement self-service portals and knowledge bases to empower customers with instant solutions, enhancing their overall experience and freeing up resources for more complex queries.",
    logo: "/assets/img/CRM/Customer Self-Service.png"
  },
  {
    heading: "CPQ and Billing",
    paragraph: "Take control of pricing data, including multiple price books, seasonal discounting, and multi-tier pricing. Automate quote and invoice generation for a streamlined billing process, reducing errors and ensuring accurate and timely financial transactions that enhance customer trust and satisfaction.",
    logo: "/assets/img/CRM/CPQ and Billing.png" 
  },
  {
    heading: "Order Fulfillment",
    paragraph: `
    Support various order fulfillment scenarios, optimize order routes with intelligent
allocation to different inventory locations, and manage order returns efficiently.
Improve order accuracy and fulfillment speed by implementing automated
workflows and real-time tracking, ensuring a seamless and reliable supply chain
process.
    
    `,
    logo: "/assets/img/CRM/Order Fulfillment.png" 
  },  {
    heading: "Customer Feedback Management",
    paragraph: `Implement surveys for feedback collection and analyze real-time customer
sentiment to enhance your business's responsiveness. Act on customer feedback
to continuously improve products, services, and customer interactions,
demonstrating a commitment to customer satisfaction and loyalty.`,
    logo: "/assets/img/CRM/CPQ and Billing.png" 
  },
  {
    heading: "Reporting",
    paragraph: `Spot optimization opportunities and foster data-driven business planning with
intuitive reports, enabling informed decision-making for your organization.
Leverage customizable dashboards and analytics to track key performance
indicators, identify trends, and align your strategies with business goals for
sustained growth and success.`,
    logo: "/assets/img/CRM/CPQ and Billing.png" 
  }
];


const additionalCards = [
    {
      heading: "Perfect Business-Technology Fit",
      paragraph: `Achieve harmony between your business processes and
                  technology with a tailored CRM system. We ensure a
                  seamless integration that fits like a glove, enhancing
                  efficiency, reducing friction, and promoting a smoother
                  workflow tailored to your specific requirements.`,
    },
    {
      heading: "Feature-Packed Tech Suite",
      paragraph: `Tailored CRM software goes beyond the one-size-fits-all
                  approach, offering a feature-packed tech suite. Enjoy
                  functionalities designed specifically for your industry,
                  ensuring that every tool and capability serves a purpose in
                  driving your business forward.`,
    },
    {
      heading: "Stable Performance",
      paragraph: `Stable Performance
                  Experience stability in your operations with a customized
                  CRM solution. Our development focuses on delivering
                  robust and reliable performance, minimizing downtime
                  and ensuring that your system functions smoothly, even in
                  the face of increasing demands.`,
    },
  ];

  const caseStudies = [
    {
      image: "/assets/img/CRM/carousel1.png",
      heading: "ERP and Remote Patient Monitoring Integration",
      description: `A healthcare provider hired our team to build a custom RPM system to support
                      process automation for care teams and health personnel. We delivered a fully
                      tailored comprehensive software suite that, among other things, supports
                      planning and resource management.`,
     link:"#"
    },
    {
      image: "/assets/img/CRM/carousel1.png",
      heading: "ERP and Remote Patient Monitoring Integration",
      description:`A healthcare provider hired our team to build a custom RPM system to support
                    process automation for care teams and health personnel. We delivered a fully
                    tailored comprehensive software suite that, among other things, supports
                    planning and resource management.`,
      link:"#"
    },
    {
        image: "/assets/img/CRM/carousel1.png",
        heading: "ERP and Remote Patient Monitoring Integration",
        description: `A healthcare provider hired our team to build a custom RPM system to support
                      process automation for care teams and health personnel. We delivered a fully
                      tailored comprehensive software suite that, among other things, supports
                      planning and resource management.`,
        link:"#"
      },
    // Add more case studies here
  ];

  export default function CardComponent() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handlePrev = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? caseStudies.length - 1 : prevSlide - 1
      );
    };
  
    const handleNext = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === caseStudies.length - 1 ? 0 : prevSlide + 1
      );
    };

    const goToSlide = (index:number) => {
        setCurrentSlide(index);
      };
    
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 mt-3 pt-28">
        {/* Original Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Building CRM from Scratch with Unique Functionality Set</h1>
          <p className="text-lg text-gray-700">
            Unlock the potential of your business with our custom CRM solutions...
          </p>
        </div>
  
        <div className="w-full max-w-full space-y-4">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-950 h-[150px] flex items-center p-4 shadow-md">
              <div className="flex-shrink-0 w-16 h-16  bg-white  flex items-center justify-center mr-4">
                <Image src={service.logo} alt={`${service.heading} Logo`} width={64} height={64} className="object-cover" />
              </div>
              <div className="flex flex-row justify-center items-center flex-grow">
                <h2 className="text-lg font-semibold text-white mb-2 mr-3">{service.heading}</h2>
                <p className="text-white ml-2">{service.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* New Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Benefits of Our Tailored CRM Software Development</h2>
          <p className="text-lg text-gray-700 mb-8">
            Being a mature custom CRM development company, we help companies...
          </p>
  
          <div className="flex justify-center space-x-4">
            {additionalCards.map((card, index) => (
              <div key={index} className="border-2 border-violet-500 rounded-lg p-6 w-1/3 text-center">
                <h3 className="text-xl font-semibold text-violet-700 mb-4">{card.heading}</h3>
                <p className="text-black mt-6">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Case Studies Section */}
        <div className="mt-24 text-center">
          <h2 className="text-5xl font-bold mb-4 tracking-[.02em]">Client Success</h2>
          <p className="text-lg text-gray-700 mb-4">Our results speak louder than words</p>
          <div className="text-xl font text-violet-700 mb-8 flex justify-center items-center cursor-pointer">
            See All Case Studies
            <span className="ml-2 text-violet-500">&gt;</span>
          </div>
        </div>
  
        {/* Carousel */}
        <div className="w-full max-w-5xl mx-auto mt-12 relative bg-violet-100 p-8 rounded-lg">
          <div className="flex">
            {/* Left Side - Image */}
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={caseStudies[currentSlide].image}
                alt={caseStudies[currentSlide].heading}
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
  
            {/* Right Side - Explanation */}
          <div className="w-1/2 flex flex-col justify-between pl-8">
            <div>
              <h3 className="text-2xl font-bold text-violet-700 mb-4">
                {caseStudies[currentSlide].heading}
              </h3>
              <p className="text-gray-700">{caseStudies[currentSlide].description}</p>
            </div>
            <div className="text-right mt-4">
              <a
                href={caseStudies[currentSlide].link}
                className="text-violet-700 font-bold hover:underline"
              >
                VIEW MORE &gt;
              </a>
            </div>
          </div>
        </div>
  
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white p-2 rounded-full"
          >
            &gt;
          </button>

      
        </div>

              {/* Dots */}
              <div className="flex justify-center mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-2 rounded-full ${
                currentSlide === index ? 'bg-violet-700' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  }