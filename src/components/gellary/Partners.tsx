'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type PartnersProps = {
  images: string[]
}

const Partners = ({ images }: PartnersProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of images to display at a time
  const imagesToShow = 7;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextButton();
    }, 2000); // 1000ms = 1 second

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNextButton = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  const handlePreviousButton = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const initialImage = images.slice(currentIndex, currentIndex + imagesToShow);

  return (
    <div className='w-full container flex items-center'>

      <button
        className='w-6 h-6 lg:w-10 lg:h-10 bg-[#B9B9B9] rounded-full flex justify-center items-center hover:bg-[#dadada]'
        onClick={handlePreviousButton}
      >
        <FaArrowLeft className='w-5 lg:w-10' color='#fff' />
      </button>

      <div className='flex-1 flex h-fit justify-center items-center gap-3 overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out ml-4'
          style={{ transform: `translateX(-${currentIndex * (100 / imagesToShow)}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt='partner' className='object-contain w-[400px] lg:w-[200px]' />
          ))}
        </div>
      </div>

      <button
        className='w-6 h-6 lg:w-10 lg:h-10 bg-[#B9B9B9] rounded-full flex justify-center items-center hover:bg-[#dadada]'
        onClick={handleNextButton}
      >
        <FaArrowRight className='w-5 lg:w-10' color='#fff' />
      </button>

    </div>
  );
};

export default Partners;
