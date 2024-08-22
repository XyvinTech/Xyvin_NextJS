import React from 'react'
import Image from 'next/image'
import RetentionRateCard from '../cards/RetentionRateCard'

const SeoHero = () => {

    const testimonial = "I have 5 years of industry experience, and xyvin is the best agency I’ve ever worked with."
    const author = "Dhilraj Soza"
    const ratings = [
        "Rated 4.8/5 stars on Google",
        "Rated 4.9/5 stars on Clutch"
    ]

    return (
        <>
            <div className="lg:h-[90px] h-[120px]" />
            <div className=' w-full h-screen bg-[url("/assets/img/seo_bg.svg")] bg-cover bg-no-repeat '>
                <div className=' container flex flex-col lg:flex-row justify-center h-full items-center'>
                    <div className=' lg:flex-1'>
                        <h1 className=' font-bold font-inter text-5xl m-0 lg:w-[500px] lg:text-6xl'>
                            SEO Services :
                            Drive Revenue with
                            SEO Agency
                        </h1>
                        <p className=' font-inter text-xl text-[#222222] m-0 mt-4'>
                            Boost your revenue from search — and prove its bottom-line
                            impact — with Xyvin SEO services. Blend talent and tech with our
                            custom strategies, conversion-to-close ROI tracking, and first-party
                            data activation. Request a proposal now to receive a best plan,
                            pricing, and strategy!
                        </p>

                        <div className=' flex flex-col mt-5 lg:flex-row lg:gap-2'>
                            <input type="text" className=' flex-1 border-2 rounded-sm p-2 placeholder:font-inter placeholder:font-medium placeholder:text-[#757575] lg:mt-2' placeholder='Enter your Phone Number' />
                            <button className=' flex-1 bg-[#7C56FE] p-2 rounded-sm text-white font-inter font-medium mt-2 lg:mt-0'>Send Me a Proposal</button>
                        </div>
                    </div>

                    <div className=' lg:flex-1 w-full flex justify-center items-center relative'>
                        <Image src='/assets/img/seo_bg_2.svg' className='hidden lg:block' width={500} height={300} alt='bg' />

                        <div className=' absolute top-0 left-0 w-full hidden lg:block z-10'>
                            <div className=' absolute top-8 left-36'>
                                <RetentionRateCard
                                    title='WHY IS OUR
                                    RETENTION RATE SO
                                    HIGH?'
                                    points={[
                                        'Scalable solutions',
                                        'Industry specialists',
                                        'Proven results',
                                    ]}
                                    backgroundColor='#1E2251' />
                            </div>
                            <div className=' absolute right-0 top-16'>
                                <RetentionRateCard
                                    title='WHY IS OUR
                                    RETENTION RATE SO
                                    HIGH?'
                                    points={[
                                        'Scalable solutions',
                                        'Industry specialists',
                                        'Proven results',
                                    ]}
                                    backgroundColor='#831980' />
                            </div>
                            <div className=' absolute right-[-80px] top-80'>
                                <RetentionRateCard
                                    title='WHY IS OUR
                                    RETENTION RATE SO
                                    HIGH?'
                                    points={[
                                        'Scalable solutions',
                                        'Industry specialists',
                                        'Proven results',
                                    ]}
                                    backgroundColor='#1E2251' />
                            </div>
                        </div>


                        <div className="bg-white shadow-lg rounded-lg p-6 mx-auto lg:w-[430px] lg:absolute lg:bottom-[-100px]">
                            <p className="text-xl font-semibold font-inter text-[#222222] m-0 ">“{testimonial}”</p>
                            <p className="text-gray-500 font-inter text-lg m-0">{author}</p>
                            <hr className="my-4" color='#000' />
                            <div className="space-y-2">
                                {ratings.map((rating, index) => (
                                    <div key={index} className="h-fit flex items-center gap-2">
                                        <div className="flex text-red-500 ">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.32 4.06a1 1 0 00.95.69h4.245c.969 0 1.371 1.24.588 1.81l-3.448 2.604a1 1 0 00-.364 1.118l1.321 4.06c.3.921-.755 1.688-1.54 1.118l-3.448-2.604a1 1 0 00-1.176 0l-3.448 2.604c-.784.57-1.838-.197-1.539-1.118l1.32-4.06a1 1 0 00-.364-1.118L2.196 9.487c-.783-.57-.38-1.81.588-1.81h4.245a1 1 0 00.95-.69l1.32-4.06z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="m-0 text-sm text-gray-600 font-inter font-semibold">{rating}</p>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div>

                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}

export default SeoHero