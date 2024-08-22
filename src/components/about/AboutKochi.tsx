import Link from 'next/link'
import React from 'react'

const AboutKochi = () => {
    return (
        <div className='w-full bg-[#F3EFFF] px-5'>
            <div className='container flex w-full justify-center'>
                <div className=' lg:w-[900px]'>
                    <h1 className=' font-inter text-4xl font-black text-[#0B1720]'>Xyvin  is a top Kochi  City web design company</h1>
                    <p className=' font-inter text-xl leading-9 text-[#0B1720]'>Xyvin offers a number of personalized
                        <Link className="text-[#7C56FE] underline" href="#">
                            web design services
                        </Link>
                        to meet the needs and
                        budget of your Kochi City business.</p>
                    <p className='font-inter text-xl leading-9 text-[#0B1720]'>Let’s take a look at a few reasons why WebFX is a leading web design company.</p>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutKochi