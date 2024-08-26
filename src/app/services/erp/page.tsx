import Service from '@/components/NewService/Service4/hero';
import ErpCard from '@/components/cards/ErpCard';
import ServiceCard from '@/components/cards/ServiceCard';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
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

        </div>

      </div>
    </Wrapper>
  );
};

export default index;