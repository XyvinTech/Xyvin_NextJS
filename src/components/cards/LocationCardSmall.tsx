import Link from 'next/link'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { IoChevronForward } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'

const LocationCardSmall = () => {
    return (
        <div className=' w-full lg:w-fit border border-black p-6'>
            <div className='flex h-fit items-center bg-[#1E2251] w-fit p-1 rounded-sm '>
                <MdOutlineLocationOn className="text-white text-xl" />
                <p className=' text-white uppercase font-inter text-[10px] m-0'>
                    REGIONAL HUB
                </p>
            </div>

            <h3 className="text-2xl font-extrabold  xtrabold font-inter text-[#374046] my-2">York, PA</h3>
            <p className="text-[#374046] m-0 font-inter text-sm">
                318 North George Street <br />
                York, PA 17401
            </p>
            <Link href="tel:" className="underline text-[#8C2CF4] font-inter text-sm m-0 font-semibold my-2 flex items-center md:justify-start">
                <FiPhoneCall color='#8C2CF4' className="mr-2" />
                888-601-5359
            </Link>

            <div className=' flex gap-2'>
                <button className=" bg-[#1E2251] flex h-fit items-center justify-between font-inter text-white font-semibold py-1 px-2 text-[12px] rounded-sm shadow-md hover:bg-[#22265C] transition duration-300">
                    Get Directions
                    <IoChevronForward className=' text-white' />
                </button>
                <button className=" bg-[#1E2251] flex h-fit items-center justify-between font-inter text-white font-semibold py-1 px-2 text-[12px] rounded-sm shadow-md hover:bg-[#22265C] transition duration-300">
                    View Services
                    <IoChevronForward className=' text-white' />
                </button>
            </div>

        </div>
    )
}

export default LocationCardSmall