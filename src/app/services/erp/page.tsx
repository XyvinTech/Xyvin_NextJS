import Service from '@/components/NewService/Service4/hero';
import ErpCard from '@/components/cards/ErpCard';
import ServiceCard from '@/components/cards/ServiceCard';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "Service Vixan - Digital  Creative Agency Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="scrollsmoother-container" className=' bg-[#F5F6FA]'>
        <Service />

        <div className="container mx-auto p-4 mt-10 lg:mt-[100px]">
          <h1 className=' text-center text-3xl text-[#222222] font-inter font-semibold m-0 lg:text-5xl'>
            Belitsoft ERP Development Services
          </h1>
          <p className='text-center text-xl text-[#222222] font-inter mt-4 font-light'>
            Our ERP software development company can develop ERP into a web application with complete operation capabilities and a mobile app with intuitive
            UX and optimized dashboards for fast decision-making. Our ERP developers have extensive experience in designing and deploying software that
            merges all your business operations into a single, user-friendly, custom ERP solution.
          </p>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 p-2">
              <ErpCard />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <ErpCard />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <ErpCard />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <ErpCard />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <ErpCard />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <ErpCard />
            </div>


            <div className="w-full flex justify-center lg:w-1/2 p-2">
              <div className=' w-[90%] bg-[#1E2251] p-5 rounded-sm flex flex-col gap-4 items-start'>
                <h3 className=' font-inter font-semibold text-white m-0 text-2xl'>Can't find the service you wanted?</h3>
                <p className='font-inter text-white text-xl m-0'>Don't worry, we are here to help</p>
                <button className='bg-[#8C2CF4] font-inter text-white text-md px-4 py-2 rounded-sm'>
                  Get a Tailored Solution
                </button>
              </div>
            </div>


          </div>
        </div>


        <div className=' w-full bg-[#F6F3FF] py-14'>
          <h1 className=' text-center text-3xl text-[#222222] font-inter font-semibold m-0 lg:text-5xl'>
            The Most Popular ERP Modules Belitsoft Builds
          </h1>

          <div className='container lg:flex w-full justify-between gap-10 mt-5'>
            <div className=' bg-white rounded-lg flex-1 flex flex-col items-center gap-8 py-4'>
              <div>
                <ServiceCard />
              </div>
              <div>
                <ServiceCard />
              </div>
              <div>
                <ServiceCard />
              </div>
              <div>
                <ServiceCard />
              </div>
            </div>
            <div className=' bg-white rounded-lg flex-1 flex flex-col items-center gap-8 py-4'>
              <div>
                <ServiceCard />
              </div>
              <div>
                <ServiceCard />
              </div>
              <div>
                <ServiceCard />
              </div>
              <div>
                <ServiceCard />
              </div>
            </div>
          </div>


          <div className=' container'>
            <h1 className=' text-center text-3xl text-[#222222] font-inter font-semibold my-5 lg:text-5xl'>
              Hire ERP developers
            </h1>

            <div>
              <p className=' font-inter text-md font-light text-black m-0'>
                Our company offers you an ERP development team with expertise in the industry and product-related knowledge, including experienced ERP
                developers, QA-engineers, project managers, business analysts, and IT consultants. We meet with your staff to understand your business processes
                and requirements. Our analysts analyze company info to prepare documentation. Then our well-versed ERP developers create a custom ERP system
                tailored to your organization's needs, for example <span className=' underline text-[#8C2CF4]'>Custom ERP for Automotive Repair Industry</span>. They resolve functionality issues, work on databases,
                test software, hold technical meetings, and provide constant communication.
              </p>

              <div>
                <h4 className=' font-inter text-sm font-normal text-black m-0 my-3'>Responsibilities of Belitsoft’s ERP Developers:</h4>
                <ul className=' font-inter text-md font-light text-black m-0 list-none'>
                  <li>Plan, analyze, design, and implement ERP systems</li>
                  <li>Provide support and work on improvements for ERP applications</li>
                  <li>Create and maintain ERP designs</li>
                  <li>Manage client reports and develop optimization solutions</li>
                  <li>
                    Enhance ERP software capabilities through
                    <Link className=' underline text-[#8C2CF4]' href='#'> API integrations</Link>
                  </li>
                  <li>Run gap/fit analysis for current processes</li>
                  <li>Validate custom ERP objects</li>
                  <li>Collaborate with the product team to comprehend business requirements</li>
                  <li>Follow industry best practices and standards</li>
                </ul>
              </div>

              <div>
                <h4 className=' font-inter text-sm font-normal text-black m-0 my-3'>Skills and Qualifications of Belitsoft’s ERP Developers:</h4>
                <ul className=' font-inter text-md font-light text-black m-0 list-none'>
                  <li>Proficiency in the development of enterprise business applications</li>
                  <li>Experience in ERP implementation and API connections</li>
                  <li>Demonstrated expertise in designing application tables, reports, and new modules for client systems</li>
                  <li>Knowledge of custom ERP elements and objects</li>
                  <li>Familiarity with database design principles</li>
                  <li>Problem-solving skills and team spirit</li>
                </ul>
              </div>
            </div>
          </div>

        </div>


        <div className='py-8 lg:py-16 bg-white'>

          <div className="container flex flex-col w-full">
            <h1 className=' text-center text-3xl text-[#222222] font-inter font-semibold my-4 lg:text-5xl'>Choose Your ERP Development Services Option</h1>

            <div className=' lg:flex'>
              <div className='px-2 py-4 lg:px-5 lg:py-10'>
                <h3 className=' font-inter text-xl font-normal lg:text-2xl m-0'>Custom ERP Development</h3>
                <p className=' bg-[#EBF1F8] m-0 rounded-md px-3 py-2 text-md font-normal font-inter mt-3'>
                  Creating a custom ERP system from scratch, including
                  business analysis, end-to-end software development, data
                  migration, integrations, quality assurance, and post-
                  implementation support.
                </p>
              </div>
              <div className=' w-[1px] bg-[#EBF1F8] hidden lg:block' />
              <div className='px-2 py-4 lg:px-5 lg:py-10'>
                <h3 className=' font-inter text-xl font-normal lg:text-2xl m-0'>Custom ERP Development</h3>
                <p className=' bg-[#EBF1F8] m-0 rounded-md px-3 py-2 text-md font-normal font-inter mt-3'>
                  Creating a custom ERP system from scratch, including
                  business analysis, end-to-end software development, data
                  migration, integrations, quality assurance, and post-
                  implementation support.
                </p>
              </div>
            </div>

            <div className='w-full flex justify-center lg:mt-5'>
              <button className='	bg-[#8C2CF4] w-full py-2 font-inter text-md text-white rounded-sm lg:w-fit lg:px-[100px]'>
                Discuss Your Case with an Expert
              </button>
            </div>


          </div>
        </div>


        <div className="container">
          <div className=' w-full bg-[#F6F3FF] py-14'>
            <h1 className=' text-center text-3xl text-[#222222] font-inter font-semibold m-0 lg:text-5xl'>
              Benefits of Custom ERP Development Services
            </h1>
            <p className=' text-center font-inter text-md font-light text-black my-4'>
              A custom Enterprise Resource Planning (ERP) system fulfills organizational needs. This ERP offers custom features not found in off-the-shelf ERP
              solutions and has an optimized TCO in the long run.
            </p>

            <div className='container lg:flex w-full justify-between gap-10 mt-5'>
              <div className=' bg-white rounded-lg flex-1 flex flex-col items-center gap-8 py-4'>
                <div>
                  <ServiceCard />
                </div>
                <div>
                  <ServiceCard />
                </div>
                <div>
                  <ServiceCard />
                </div>
                <div>
                  <ServiceCard />
                </div>
              </div>
              <div className=' bg-white rounded-lg flex-1 flex flex-col items-center gap-8 py-4'>
                <div>
                  <ServiceCard />
                </div>
                <div>
                  <ServiceCard />
                </div>
                <div>
                  <ServiceCard />
                </div>
                <div>
                  <ServiceCard />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </Wrapper>
  );
};

export default index;