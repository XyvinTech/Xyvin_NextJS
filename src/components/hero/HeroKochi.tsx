import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroKochi = () => {
    return (
        <>
            <div className="lg:h-[90px] h-[120px]"></div>
            <div className=" mx-auto container">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-5/12 h-[600px] flex flex-col justify-center">
                        <h1 className="font-inter font-black text-5xl leading-[64px] text-[#1E2251] lg:w-[400px] sm:w-fit m-0">
                            Kochi City Web Design Services
                        </h1>
                        <div className="flex flex-col gap-6 mt-8">
                            <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                                Get an attractive and fast website that ranks well in search results, plus drives leads and sales with our web design agency in Kochi City.
                            </p>
                            <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                                With more than 50 design awards won, our in-house design, development, and project management team knows how to combine form with function.
                            </p>
                            <p className="text-[#152035] text-lg font-normal font-inter leading-7 m-0">
                                If you want to expand your online reach and earn more revenue, we can help. <Link className="text-[#7C56FE] underline" href="#">Contact us online</Link> or call <Link className="text-[#7C56FE] underline" href="tel:813 891 6303">813 891 6303</Link> to speak with one of our experts today!
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-7/12 lg:h-[800px] h-[400px] flex items-center justify-center">
                        <Image src="/assets/img/rocket.png" alt="hero" width={792} height={590} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroKochi
