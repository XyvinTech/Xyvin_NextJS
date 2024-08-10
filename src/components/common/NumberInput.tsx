'use client'

import React from 'react'
import { MoveRight } from 'lucide-react'

const NumberInput = () => {
    return (
        <div className='container px-4 my-10'>
            <div className='w-full px-6 py-8 md:px-14 md:py-10 rounded-md bg-[#1E2251] flex flex-col md:flex-row h-fit items-center justify-between gap-6 md:gap-10 shadow-sm'>
                <h2 className='m-0 font-inter font-black text-2xl md:text-4xl text-white text-center md:text-left'>
                    Let’s Get Started!
                </h2>
                <form className='flex-1 flex h-fit items-center w-full bg-white rounded-md p-1'>
                    <input
                        placeholder='Enter your Phone No'
                        className='rounded-md w-3/5 lg:w-3/4 p-2 md:p-4 font-inter font-medium text-base md:text-lg focus:outline-none'
                        type='text'
                    />
                    <button className='flex w-2/5 lg:w-1/4 bg-[#7C56FE] p-2 md:p-4 rounded-md font-inter font-medium text-base md:text-lg text-white gap-2 items-center justify-center hover:bg-[#6a48e0] transition-colors duration-300'>
                        Get a call
                        <MoveRight size={20} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NumberInput
