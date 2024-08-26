import React from 'react'
import { MdOutlineDone } from "react-icons/md";

const ServiceCard = () => {
    return (
        <div className='flex lg:gap-4 gap-2'>
            <div className=' lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center bg-[#8C2CF4]'>
                <MdOutlineDone color='#fff' className=' text-sm lg:text-md'/>
            </div>
            <p className=' font-inter text-md font-light text-black lg:w-[440px] m-0'>
                <span className=' font-normal'>
                    Manufacturing.
                </span>
                Arranging production, setting timetables,
                and keeping control, possibly with sub-modules for product
                life cycle and quality assurance.
            </p>
        </div>
    )
}

export default ServiceCard