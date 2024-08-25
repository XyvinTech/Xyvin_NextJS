'use client'

import React, { useState } from 'react'
import { cn } from '@/utils/twmerge'

// type ServiceTabsTypes 
//     = "SEO audits"
//     | "Keyword research"
//     | "Link building"
//     | "On-page SEO"
//     | "Off-page SEO"
//     | "Technical SEO"
//     | "Content creation and"
//     | "optimization"
//     | "And more!"

const SeoServices = () => {
    const serviceTabs = [
        "SEO audits",
        "Keyword research",
        "Link building",
        "On-page SEO",
        "Off-page SEO",
        "Technical SEO",
        "Content creation and",
        "optimization",
        "And more!",
    ]
    const [selectedtab, setSelectedtab] = useState("SEO audits")

    const selectTab = (e: any) => {
        setSelectedtab(e.target.innerText)
    }

    return (
        <div className=' container py-16'>
            <div className=' px-10 flex flex-col lg:flex-row h-fit  w-full lg:justify-center lg:items-center lg:gap-6'>
                <p className=' m-0 font-inter text-base uppercase font-bold text-[#222222] text-center py-2'>50+ digital experts</p>
                <div className=' w-full h-[1px] bg-black lg:hidden' />
                <p className='hidden lg:block m-0'>|</p>
                <p className=' m-0 font-inter text-base uppercase font-bold text-[#222222] text-center py-2'>5-year track record</p>
                <div className=' w-full h-[1px] bg-black lg:hidden' />
                <p className='hidden lg:block m-0'>|</p>
                <p className='m-0 font-inter text-base uppercase font-bold text-[#222222] text-center py-2'>In-house technology</p>
            </div>

            <div className='mt-10'>
                <h2 className=' text-center font-black text-[#222222] font-inter text-4xl'>What do our SEO services include?</h2>
                <p className=' text-center font-inter text-xl'>Whether you’re looking for SEO solutions, our customizable search engine optimization services can help.
                    Learn more about our custom plans for capturing organic search traffic and turning it into revenue.</p>
            </div>

            <div className=' w-full container flex h-56 my-16'>
                <div className=' w-1/5 '>
                    {serviceTabs.map((tab, index) => {
                        return (
                            <p onClick={selectTab} key={index} className={cn(
                                'border-b-2 w-full p-4 py-4 cursor-pointer text-[#CED4DA] font-inter text-xl font-semibold m-0',
                                selectedtab === tab && 'text-[#7C56FE] border-[#7C56FE]'
                            )}>
                                {tab}
                            </p>
                        )
                    })}

                </div>
                <div className=' w-4/5 '>
                    <h2 className=' font-inter text-[#8C2CF4] font-extrabold text-3xl'>{selectedtab}</h2>
                </div>
            </div>
        </div>
    )
}

export default SeoServices