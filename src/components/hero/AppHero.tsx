// pages/index.js
import Image from 'next/image';
import Bg from '@/assets/img/backgrounds/bg.png';


const Point = ({ content }: {
    content: React.ReactElement | string
}) => {
    return (
        <div className=' flex h-fit items-center'>
            <Image src="/assets/img/app/app_arrow.png" width={24} height={24} alt='arrow' />
            <p className=' text-[#222222] font-inter font-medium text-base lg:text-xl m-0 gap-1'>
                {content}
            </p>
        </div>
    );
}


export default function AppHero() {
    return (
        <>
            <div className="lg:h-[90px] h-[120px]" />
            <div style={{ backgroundImage: `url(${Bg.src})` }}
                className=' w-full h-screen bg-[url("/assets/img/seo_bg.svg")] bg-cover bg-no-repeat bg-right'>

                <div className=' container flex flex-col lg:flex-row justify-center h-full items-center'>
                    <div className=' lg:flex-1 flex flex-col gap-20 lg:gap-32'>
                        <div>
                            <h3 className=' uppercase font-inter text-sm text-[#1E2251] mb-4 font-normal mt-4'>home / CRM Software Development</h3>
                            <h1 className=' font-bold font-inter text-4xl m-0 lg:text-6xl'>
                                App Developers New York
                            </h1>
                            <p className=' font-inter text-lg lg:text-xl font-light text-[#222222] m-0 mt-4'>
                                iQlance is one of the Top mobile app development
                                companies in New York. The apps and software
                                developed by iQlance help deliver seamless experiences
                                across different devices and platforms. We develop
                                software for different OS. Being a reputed mobile app
                                development company New York as well as Canada, we
                                are known to come up with something unique and out-
                                of-the-box every time.
                            </p>
                            <div className=' flex flex-col gap-6 mt-4'>
                                <Point content='Industry Specific Dedicated Developers' />
                                <Point content='Customized App with Affordable Price' />
                                <Point content="Provide Risk-Free trial for 1 Week" />
                                <Point content='Flexible engagement models' />
                                <Point content="Flexible engagement models" />
                            </div>
                            <div className=' flex flex-1 flex-col mt-5 lg:flex-row lg:gap-2'>
                                <input type="text" className=' flex-1 border-2 rounded-sm p-2 placeholder:font-inter placeholder:font-medium placeholder:text-[#757575] lg:mt-2' placeholder='Enter your Phone Number' />
                                <button className=' flex-1 bg-[#7C56FE] p-2 rounded-sm text-white font-inter font-medium mt-2 lg:mt-0'>Send Me a Proposal</button>
                            </div>
                        </div>

                    </div>

                    <div className=' lg:flex-1 w-full flex justify-center items-center'>
                        <Image src='/assets/img/app/app_1.png' className='hidden lg:block w-full mt-10' width={900} height={900} alt='bg' />
                    </div>
                </div>

            </div>
        </>
    );
}
