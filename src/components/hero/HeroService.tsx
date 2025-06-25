
import React from 'react';
import Link from 'next/link';


interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data:DataType[] = [
  {
    id: 1,
    title: "Custom Software Solutions",
    description: "At Xyvin, we build custom software solutions that solve real business problems. Whether you need a tool to manage operations, automate tasks, or improve user experience, our solutions are crafted to fit your goals. With smart technology and AI support, we help you work faster, smarter, and more efficiently.",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Your website is your digital face — and we make it intelligent. Our web development services focus on performance, design, and user engagement. At Xyvin, we create responsive, secure, and scalable websites that reflect your brand and are powered to grow with AI-backed insights and modern web standards.",
  },
  {
    id: 3,
    title: "ERP Development ",
    description: "Xyvin delivers efficient ERP systems to simplify and streamline business processes. From managing inventory to handling finances and HR, our ERP solutions bring everything under one smart dashboard. With AI-powered automation and analytics, we help you save time and make better business decisions.",
  },
  {
    id: 4,
    title: "API Integration Services",
    description: "Connect your tools, apps, and systems effortlessly. Our API integration services enable smooth data flow and automation across platforms. Whether it’s third-party apps or internal systems, Xyvin ensures secure, fast, and AI-compatible integrations that help you run smarter operations with less manual effort.",
  },
  {
    id: 5,
    title: "AI Agent Service ",
    description: "Boost productivity and customer engagement with Xyvin’s AI Agent Services. We build smart virtual agents and chatbots that can interact, assist, and learn — 24/7. From handling customer support to automating internal tasks, our AI agents adapt to your needs and deliver faster, more accurate service.",
  },

]

const HeroService = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_word_writting">
                 Next-Gen Digital Services Backed by the Power of AI
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) =>
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
                <div className="cs_card_left">
                  <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('/assets/img/hero_img_1.jpg')` }}>
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">{item.title}
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                {/* <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div> */}
              </div>
            )} 

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroService;