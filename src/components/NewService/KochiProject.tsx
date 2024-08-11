import Link from 'next/link'
import React from 'react'
import VideoPlayer from '../player/VideoPlayer'
import { MdAddCall } from "react-icons/md";

const KochiProject = () => {
    return (
        <div className=' w-full h-screen bg-[url("/assets/img/backgrounds/kochi_bg.png")] bg-no-repeat bg-cover'>
            <div className=' container'>
                <h1 className='text-3xl font-inter font-black lg:text-4xl text-[#374046] lg:text-center lg:mb-9'>Get started with your Kochi city web design project</h1>
                <div className=' flex flex-col lg:flex-row'>
                    <div className="flex flex-col gap-6 lg:mt-8 w-full lg:w-6/12">
                        <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                            No matter your industry, impressive website design is important in today’s digital age.
                        </p>
                        <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                            If you’re looking to take your Kochi City to the next level, you need a <Link className="text-[#7C56FE] underline" href="#">custom web design</Link> to help you attract and convert more customers.
                        </p>
                        <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                            Xyvin is a leading Kochi based <Link className="text-[#7C56FE] underline" href="#">web design</Link> agency, and we deliver stunning, <Link className="text-[#7C56FE] underline" href="#">responsive designs</Link> that are created with conversion in mind.
                        </p>
                        <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                            On this page, we’ll take a look at our web design plans and what makes Xyvin different from other web design agencies. Keep reading to learn more, and give us a call at <Link className="text-[#7C56FE] underline" href="#">+91 813 891 6303</Link>.
                        </p>
                    </div>
                    <div className=' w-full lg:w-6/12 flex items-center justify-center mt-10 lg:mt-0'>
                        <div>
                            <VideoPlayer
                                videoId='dQw4w9WgXcQ'
                                thumbnail='/assets/img/kochi_service.png'
                            />
                            <div className=' lg:w-[635px] lg:h-[180px] w-full h-[100px] bg-[#1E2251]'>
                                <div className=' bg-[url("/assets/img/kochi_call_icon.png")] h-full bg-cover flex'>
                                    <div className=' h-full flex items-center w-[80%] justify-center'>
                                        <MdAddCall size={40} color='#fff' />
                                    </div>
                                    <div className='h-full flex flex-col justify-center gap-2'>
                                        <p className='m-0 font-inter font-medium text-xs text-white lg:font-bold lg:text-base px-[2px]'>
                                            If you'd like to speak directly with a specialist about
                                            web design and development for your Kochi city  business, give us a ring at:
                                        </p>
                                        <Link href='tel:+918138916303' className=' font-inter font-black textxl text-[#5AE15A] m-0'>+91 8138916303</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KochiProject