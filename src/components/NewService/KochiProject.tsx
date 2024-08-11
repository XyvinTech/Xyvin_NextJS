import Link from 'next/link'
import React from 'react'
import VideoPlayer from '../player/VideoPlayer'
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

const KochiProject = () => {
    return (
        <div className=' w-full h-fit bg-[url("/assets/img/backgrounds/kochi_bg.png")] bg-no-repeat bg-cover'>
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


            <div className="container lg:mt-[200px]">
                <div className=' shadow-lg rounded-lg flex flex-col-reverse my-10 lg:flex-row'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.1365688917185!2d76.31053664151985!3d10.011218525890056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa61914d7e8b597b9%3A0xf409a763ef2bafc8!2sAcute%20Endeavors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717833369050!5m2!1sen!2sin"
                        allowFullScreen={true}
                        className=' flex-1 rounded-tr-none rounded-tl-none rounded-lg lg:rounded-lg lg:rounded-tr-none lg:rounded-tl-none'
                    />
                    <div className=' flex-1 h-[620px] py-6 px-2'>
                        <div className=' h-full flex flex-col gap-4 lg:justify-center lg:px-10'>
                            <h2 className='text-3xl font-inter font-black lg:text-5xl text-[#0B1720] m-0'>Local Success</h2>
                            <p className=' m-0 font-inter text-lg mt-6 lg:text-xl'>
                                Xyvin has partnered with numerous local
                                businesses in Kochi to help them grow with web
                                design. We’ve helped to implement many services
                                like SEO, Web design, App development, and beyond.
                            </p>
                            <div className='bg-[#1E2251] w-full rounded-lg h-fit p-4'>
                                <h3 className=' m-0 font-inter font-black text-xl text-white'>Xyvin Kochi</h3>
                                <div className=' flex mt-2'>
                                    <div className=' mt-1'>
                                        <FaLocationDot size={20} color='#dadada' />
                                    </div>
                                    <div className='ml-1'>
                                        <p className=' font-inter text-base lg:text-lg text-white m-0'>dewSpace Business Center, Paramara Road,
                                            Near North Railway Station, Kochi, Kerala - 682018
                                        </p>
                                        <Link href="#" className=' flex h-fit items-center text-[#7C56FE] font-inter font-bold text-base lg:text-lg'>
                                            Get Directions
                                            <FaChevronRight size={15} color='#7C56FE' />
                                        </Link>
                                    </div>
                                </div>

                                <div className=' flex mt-4'>
                                    <div className=' mt-1'>
                                        <IoMdCall size={20} color='#dadada' />
                                    </div>

                                    <Link href="#" className=' flex h-fit items-center text-[#7C56FE] font-inter font-bold text-base lg:text-lg ml-1'>
                                        +91 813 891 6303
                                    </Link>
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