import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialHighlight = () => {
  return (
    <div className=' mx-4 my-16'>
      <div className="bg-[url('/assets/img/testimonals_bg.svg')] bg-cover bg-no-repeat bg-center w-full text-white rounded-lg p-6 md:flex md:justify-between md:items-center space-y-4 md:space-y-0 container">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold font-inter mb-2 text-white lg:w-[675px]">
            WebFX has <span className="text-yellow-400">thousands of reviews</span> praising our transparency, communication, and results.
          </h2>
          <a
            href="#"
            className="inline-block w-full lg:w-fit font-inter bg-white text-[#8C2CF4] font-bold py-2 px-4 mt-4 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Check out our client testimonials &rarr;
          </a>
        </div>
        <div className="bg-purple-600 p-4 rounded-lg md:w-1/3 flex flex-col justify-center items-center">
          <p className="text-center font-inter text-lg text-white font-bold uppercase m-0">WEBFX AGENCY RATING</p>
          <div className=' flex w-full justify-center'>
            <FaStar color='#FFD12D' size={15} />
            <FaStar color='#FFD12D' size={15} />
            <FaStar color='#FFD12D' size={15} />
            <FaStar color='#FFD12D' size={15} />
            <FaStar color='#FFD12D' size={15} />
          </div>
          <p className="text-4xl font-bold text-center font-inter text-2xl text-white font-bold py-4 m-0">4.9/5</p>
          <p className="text-center font-inter text-lg text-white font-bold uppercase text-center lg:w-[300px] w-[235px] m-0">Based on over 550 third-party reviews</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHighlight;
