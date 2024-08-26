// pages/index.js
import Image from 'next/image';
import Bg from '@/assets/img/backgrounds/bg.png';


export default function Service() {
    return (
        <>
            <div className="lg:h-[90px] h-[120px]" />
            <div style={{ backgroundImage: `url(${Bg.src})` }}
                className=' w-full h-screen bg-[url("/assets/img/seo_bg.svg")] bg-cover bg-no-repeat '>
                <div className=' container flex flex-col lg:flex-row lg:justify-center h-full items-center'>
                    <div className=' lg:flex-1'>
                        <h3 className=' uppercase font-inter text-sm text-[#1E2251] mb-4 font-normal mt-4'>home / CRM Software Development</h3>
                        <h1 className=' font-bold font-inter text-5xl m-0 lg:w-[500px] lg:text-6xl'>
                            Reliable ERP Development Company
                        </h1>
                        <p className=' font-inter font-bold text-xl text-[#219653] m-0 mt-4'>Focus Your Processes on Customers</p>
                        <p className=' font-inter text-xl text-[#222222] m-0 mt-4'>
                            Transform customer relationships with our custom CRM software development
                            expertise. From seamless communication to efficient data management, our CRM
                            development company is here to enhance every interaction. Elevate satisfaction,
                            streamline processes, and boost your business success.
                        </p>

                        <div className=' flex flex-col mt-5 lg:flex-row lg:gap-2'>
                            <input type="text" className=' flex-1 border-2 rounded-sm p-2 placeholder:font-inter placeholder:font-medium placeholder:text-[#757575] lg:mt-2' placeholder='Enter your Phone Number' />
                            <button className=' flex-1 bg-[#7C56FE] p-2 rounded-sm text-white font-inter font-medium mt-2 lg:mt-0'>Send Me a Proposal</button>
                        </div>
                    </div>

                    <div className=' lg:flex-1 w-full flex justify-center items-center'>
                        <Image src='/assets/img/erp_img.png' className='hidden lg:block w-full mt-10' width={500} height={300} alt='bg' />
                    </div>
                </div>

            </div>
        </>
    );
}
