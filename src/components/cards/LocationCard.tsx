import Link from 'next/link';
import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";

const LocationCard = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Left side - Address and contact info */}
            <div className="flex-1 md:text-left">
                <div className='flex h-fit items-center bg-[#1E2251] w-fit p-1 rounded-sm '>
                    <MdOutlineLocationOn className="text-white text-xl" />
                    <p className=' text-white uppercase font-inter text-sm m-0'>
                        REGIONAL HUB
                    </p>
                </div>
                <h3 className="text-2xl font-extrabold font-inter text-[#374046] my-2">York, PA</h3>
                <p className="text-[#374046] m-0 font-inter text-sm">
                    318 North George Street <br />
                    York, PA 17401
                </p>
                <Link href="tel:" className="underline text-[#8C2CF4] font-inter text-sm m-0 font-semibold mt-4 flex items-center md:justify-start">
                    <FiPhoneCall color='#8C2CF4' className="mr-2" />
                    888-601-5359
                </Link>
                <div className="mt-4 flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row justify-center md:justify-start">
                    <button className="bg-[#1E2251] flex h-fit items-center justify-between font-inter text-white font-semibold py-2 px-4 text-sm rounded-sm shadow-md hover:bg-[#22265C] transition duration-300">
                        View Office
                        <IoChevronForward className=' text-white' />
                    </button>
                    <button className="bg-[#1E2251] flex h-fit items-center justify-between font-inter text-white font-semibold py-2 px-4 text-sm rounded-sm shadow-md hover:bg-[#22265C] transition duration-300">
                        Get Directions
                        <IoChevronForward className=' text-white' />
                    </button>
                    <button className="bg-[#1E2251] flex h-fit items-center justify-between font-inter text-white font-semibold py-2 px-4 text-sm rounded-sm shadow-md hover:bg-[#22265C] transition duration-300">
                        View Services
                        <IoChevronForward className=' text-white' />
                    </button>
                </div>
            </div>

            {/* Right side - Map */}
            <div className="flex-1">
                <iframe
                    className="w-full h-64 rounded-lg shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.587221106044!2d-76.7285720846067!3d39.96259877941844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c88f2c5a4f1ff9%3A0xa5a57512c1c5e6f9!2s318%20N%20George%20St%2C%20York%2C%20PA%2017401%2C%20USA!5e0!3m2!1sen!2sin!4v1620657728839!5m2!1sen!2sin"
                    loading="lazy"
                    title="Google Maps - York, PA"
                ></iframe>
            </div>
        </div>
    );
};

export default LocationCard;
