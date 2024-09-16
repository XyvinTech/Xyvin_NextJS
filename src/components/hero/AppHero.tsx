// pages/index.js
import Image from 'next/image';
import Bg from '@/assets/img/backgrounds/bg.png';


type AppHeroProps = {
    title: string
    description: string
    points: string[]
    subheading?: string
    image?: string
}


const Point = ({ content }: {
    content: React.ReactElement | string
}) => {
    return (
        <div className=' flex h-fit items-center'>
            <Image src="/assets/img/app/app_arrow.png" width={24} height={24} alt='arrow' />
            <p className=' text-[#222222] font-poppins font-medium text-base m-0 gap-1'>
                {content}
            </p>
        </div>
    );
}


export default function AppHero({ title, description, points, subheading, image }: AppHeroProps) {
    return (
        <>
            <div className="lg:h-[90px] h-[120px]" />
            <div style={{ backgroundImage: `url(${Bg.src})` }}
                className=' w-full h-screen bg-[url("/assets/img/seo_bg.svg")] bg-cover bg-no-repeat bg-right'>

                <div className=' container flex flex-col lg:flex-row justify-center h-full items-center'>
                    <div className=' lg:flex-1 flex flex-col gap-20 lg:gap-32'>
                        <div>
                            <h1 className=' font-bold font-poppins text-4xl m-0'>
                                {title}
                            </h1>
                            {subheading && (
                                <h3 className='font-poppins text-sm text-[#1E2251] mb-4 font-semibold mt-4'>{subheading}</h3>
                            )}

                            <p className=' font-poppins text-base font-light text-[#222222] m-0 mt-4'>
                                {description}
                            </p>
                            <div className=' flex flex-col gap-3 mt-4'>
                                {points.map((point, index) => (
                                    <Point key={index} content={point} />
                                ))}
                            </div>
                            <div className=' flex flex-1 flex-col mt-4 lg:flex-row lg:gap-2'>
                                <input type="text" className=' flex-1 border-2 rounded-sm p-2 placeholder:font-poppins placeholder:font-medium placeholder:text-[#757575] lg:mt-2' placeholder='Enter your Phone Number' />
                                <button className=' flex-1 bg-[#7C56FE] p-2 rounded-sm text-white font-poppins font-medium mt-2 lg:mt-0'>Send Me a Proposal</button>
                            </div>
                        </div>

                    </div>

                    <div className=' lg:flex-1 w-full flex justify-center items-center'>
                        <Image src={image ? image : "/assets/img/app/app_1.png"} className='hidden lg:block w-full mt-10' width={900} height={900} alt='bg' />
                    </div>
                </div>

            </div>
        </>
    );
}
