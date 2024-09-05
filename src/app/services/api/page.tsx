import ApiHero from '@/components/hero/ApiHero';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Image from 'next/image';
import React from 'react';
import { MdOutlineDone } from "react-icons/md";

export const metadata = {
  title: "Service Vixan - Digital  Creative Agency Next js Template",
};

const index = () => {

  const DBPoint = ({ text }: {
    text: string
  }) => {
    return (
      <div className=' flex h-fit items-center gap-2'>
        <div className=' bg-[#707070] w-4 h-4 rounded-full flex justify-center items-center'>
          <MdOutlineDone className=' text-white' size={14} />
        </div>
        <p className=' font-inter text-md text-[#707070] m-0'>
          {text}
        </p>
      </div>
    )
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container">
        <ApiHero />

        <div className='bg-[#F5F6FA] w-full p-4'>
          <div className=' lg:flex container'>
            <div className=' flex-1'>
              <h2 className=' font-inter text-black font-extrabold text-2xl lg:text-3xl'>What Is API Integration Services?</h2>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                API integration service is the process of programmatically connecting
                different platforms or applications to communicate and share critical data.
                Let's connect your apps, ecommerce store, accounting systems, shipping
                fulfillment,
                <span className=' underline text-[#8C2CF4]'>ERP/CRM services</span>,
                <span className=' underline text-[#8C2CF4]'>merchant payment</span>,
                <span className=' underline text-[#8C2CF4]'>POS retail</span>,
                They resolve functionality issues, work on databases,
                test software, hold technical meetings, and provide constant communication.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                Our team helps your business work smoothly by connecting your apps or
                platform with other services. This makes your work flow better and meets
                your customers' needs more effectively.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                We work with REST, GraphQL, SOAP, EDI or XML services to connect your
                business. Sunrise Integration is experienced in custom back-end API
                programming for high-speed, large-scale API projects including AI
                services, like ChatGPT, and Machine Learning.
              </p>

            </div>
            <div className='flex-1 flex justify-center items-center mt-8'>
              <Image className='object-contain' src="/assets/img/api_integration.png" width={435} height={370} alt='api_img' />
            </div>
          </div>
        </div>


        <div className='bg-white w-full p-4'>
          <div className="container lg:flex gap-3">

            <div className=' lg:flex-1 lg:flex flex-col justify-center'>
              <h2 className=' font-inter text-black font-extrabold text-2xl lg:text-3xl m-0'>What Can We Do?</h2>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                We can implement or connect internal
                and external API services for mobile,
                PC/desktop, platform or web apps.
                Consume or share data with third-parties
                around the world in real-time.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8 mx-4'>
                API Integration: REST, SOAP,<br />
                XML, GraphQL <br />
                EDI sync with big-box <br />
                retailers <br />
                AI and Machine Learning + <br />
                ChatGPT API <br />
                Recurring data sync services <br />
                Ecommerce orders <br />
                Middleware platform apps <br />
                Real-time inventory sync tool <br />
                Internal API development <br />
                Support and chat services <br />
                Video and streaming services <br />
                Google API services <br />
                Headless commerce API <br />
                integration <br />
                Big Data and analytics <br />
              </p>

            </div>
            <div className=' my-2 lg:flex-1'>
              <div>
                <Image alt='api_img' className=' object-contain ' src="/assets/img/services/api_1.png" width={435} height={500} />
              </div>

              <div className=' flex justify-center items-center'>
                <Image alt='api_img' className=' object-contain' src="/assets/img/services/api_2.png" width={300} height={300} />
              </div>
            </div>
            <div className=' lg:flex-1 lg:flex flex-col justify-center'>
              <h2 className=' font-inter text-black font-extrabold text-2xl lg:text-3xl'>Why Choose Us?</h2>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                <b>Seamless Integration:</b>Our team of
                skilled developers ensures seamless API
                integration, allowing you to access a
                range of functionalities and third-party
                services without compromising
                performance.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                <b>Scalable Solutions: </b>
                We understand that
                your business needs evolve. Our API
                integration services are designed to
                scale with your growth, making it easy to
                adapt and expand.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                <b>
                  Customized Approach:
                </b>
                Every business is
                unique, and so are its integration
                requirements. Our experts work closely
                with you to understand your specific
                needs and deliver tailor-made API
                solutions.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                <b>
                  Reliable Support:
                </b>
                We believe in building
                long-lasting relationships with our clients.
                Our dedicated support team is always
                available to assist you with any API-
                related issue.
              </p>
            </div>

          </div>
        </div>


        <div className=' bg-[#1E2251] w-full py-14'>
          <h1 className=' text-center font-inter font-black text-3xl lg:text-5xl text-white m-0'>API Integration for Ecommerce</h1>
        </div>



        <div className='bg-white w-full p-4'>
          <div className=' container h-fit lg:flex items-center'>
            <div className=' flex-1'>
              <p className=' font-inter text-md text-[#707070] mt-8'>
                A successful ecommerce system requires connections with
                multiple data sources and third-party platforms. Let the API
                experts at Sunrise Integration synchronize your ecommerce
                services with inventory management systems, product feeds,
                order management, international shipping, payment gateways,
                gift card loyalty services,
                <span className=' underline text-[#8C2CF4]'>ERP/CRM systems</span>,
                cart management and more.
              </p>

              <p className=' font-inter text-md text-[#707070] mt-8'>
                Our API experts will help develop secure and high-capacity
                connections that sync your business with the world. Use API
                services to:
              </p>

              <div className=' flex flex-col gap-2'>
                <DBPoint text='Send ecommerce data to your ERP/CRM' />
                <DBPoint text='Connect your mobile app to external services' />
                <DBPoint text='Take orders with custom payment gateways' />
                <DBPoint text='Share sales data with your accounting system' />
                <DBPoint text='Send orders to your warehouse for fulfillment' />
                <DBPoint text='Automatically post sales to your social media' />
                <DBPoint text='Provide chat and support tickets' />
                <DBPoint text='Real time GPS for your delivery app' />
                <DBPoint text='Integrate Google and Apple services' />
                <DBPoint text='Synchronize your retail POS customers' />
                <DBPoint text='Headless commerce integration' />
                <DBPoint text='ML (Machine Learning) API integration' />
                <DBPoint text='AI / ChatGPT text services' />
              </div>


            </div>
            <div className=' flex-1 flex justify-center items-center'>
              <Image alt='double_horse' className=' object-contain' src="/assets/img/services/double_horse.png" width={800} height={1051} />
            </div>
          </div>

          <div className=' container'>
            <div className=' w-[1000px]'>
              <h2 className=' font-inter text-black font-extrabold text-2xl lg:text-3xl m-0'>Headless commerce with total API customization</h2>
              <p className=' font-inter text-md text-black'>
                Headless ecommerce gives your brand the look and feel you want with an
                API approach to your services. Using headless commerce, you can deliver a
                faster, more agile, and unique shopping experience for your customers. Using
                a <span className=' underline text-[#8C2CF4]'>MACH Architecture</span>,
                our team will design a headless platform to rock your ecommerce business goals.
              </p>
            </div>

          </div>


        </div>


        <div className=' bg-[#1E2251] w-full py-14'>
          <h1 className=' text-center font-inter font-black text-3xl lg:text-5xl text-white m-0'>
            API Integration for Ecommerce
          </h1>
        </div>

      </div>
    </Wrapper>
  );
};

export default index;