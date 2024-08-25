// pages/index.js
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Img from '@/assets/img/backgrounds/obj1.png';
import Bg from '@/assets/img/backgrounds/bg.png';
import CardComponent from './card';
import Three from './three';
import Two from './two';
import Four from './four'

export default function Service() {
  return (
    <div
      className="flex h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Bg.src})` }}
    >
      {/* Left Division */}
      <div className="w-1/2 flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Custom CRM Software Development</h1>
        <h3 className="text-2xl font-bold mb-4 text-green-600">Focus Your Processes on Customers</h3>
        <p className="text-lg text-gray-700">
          Transform customer relationships with our custom CRM software development
          expertise. From seamless communication to efficient data management, our CRM
          development company is here to enhance every interaction. Elevate satisfaction,
          streamline processes, and boost your business success.
        </p>
        <div className="w-full flex flex-row justify-center items-center">
          <input 
            type="text" 
            placeholder="Enter your Website" 
            className="m-2 p-3 rounded-sm border border-gray-300 focus:outline-none focus:border-violet-700 flex-1"
            style={{ height: '48px' }}
          />
          <button 
            className="m-2 p-3 rounded-sm bg-violet-700 text-white flex items-center justify-center"
            style={{ height: '48px' }}
          >
            Send me a proposal
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Right Division */}
      <div className="w-1/2 relative">
        <Image
          src={Img} 
          alt="Image"
          objectFit="cover"
          height={600}
        />
      </div>

    
      <CardComponent />
      {/* <Two/> */}
      {/* <Three/> */}
      {/* <Four/> */}
     
     
    </div>
  );
}
