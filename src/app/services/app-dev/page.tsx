import AppHero from '@/components/hero/AppHero';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export const metadata = {
    title: "Service Vixan - Digital  Creative Agency Next js Template",
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const industries = [
    { name: 'Fintech', image: '/assets/img/app/app_4.jpg' },
    { name: 'Sports', image: '/assets/img/app/app_4.jpg' },
    { name: 'Media & Entertainment', image: '/assets/img/app/app_4.jpg' },
    { name: 'Real Estate', image: '/assets/img/app/app_4.jpg' },
    { name: 'Healthcare', image: '/assets/img/app/app_4.jpg' },
    { name: 'Retail', image: '/assets/img/app/app_4.jpg' },
    { name: 'Education', image: '/assets/img/app/app_4.jpg' },
    { name: 'Logistics', image: '/assets/img/app/app_4.jpg' },
    { name: 'Travel & Hospitality', image: '/assets/img/app/app_4.jpg' },
    { name: 'Oil & Gas', image: '/assets/img/app/app_4.jpg' },
];

const Point = ({ content }: {
    content: React.ReactElement | string
}) => {
    return (
        <div className=' flex h-fit items-center'>
            <Image src="/assets/img/app/app_arrow.png" width={24} height={24} alt='arrow' />
            <p className=' text-[#222222] font-poppins font-medium text-base lg:text-xl m-0 gap-1'>
                {content}
            </p>
        </div>
    );
}

const SmallCard = () => {
    return (
        <div className=' shadow-sm lg:shadow w-fit rounded-md flex flex-col items-center justify-center py-2 px-2 lg:py-5 lg:px-10 gap-2'>
            <Image className=' w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] ' src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
            <h4 className='text-[#222222] font-poppins font-bold text-center text-xl m-0 lg:text-4xl'>
                7+
            </h4>
            <p className=' m-0 font-poppins font-light text-sm lg:text-base text-center'>
                Years of Experience
            </p>
        </div>
    )
}

const DevService = () => {
    return (
        <div className=' flex flex-col gap-3'>
            <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
            <h3 className=' m-0 font-poppins font-semibold text-xl text-[#222222]'>Mobile App Development New York</h3>
            <p className=' m-0 font-poppins font-light text-base lg:w-[550px]'>
                Writing a plethora of app codes make us expert in
                mobile app development. Being famous as one of the
                top mobile app development companies in New York
                City, our experts blend their skills to offer high-quality
                mobile app development services. iQlance’s arsenal of
                the best and expert developers help us to develop a
                plethora of mobile apps with their creative minds. Our
                knowledge and expertise in mobile app development
                are capable enough to write the success story of your
                start-up or business. As the onus of any business’s
                success lies in its platforms or app solutions, so we
                strive hard to provide the best mobile experience.
            </p>
        </div>
    )
}

const index = () => {
    return (
        <Wrapper>
            <HeaderOne />
            <div id="scrollsmoother-container">
                <AppHero />

                <div className='container flex flex-col gap-5 py-36 items-center'>

                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Mobile App Development Company New York
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center text-lg lg:text-xl'>
                        New York is famous as the pioneer of advanced technology worldwide. It’s a unique offering of quality lifestyle and amazing
                        business environment is the best combination for business growth. In the digital era, app development has a transformational
                        impact on almost every business. Being specializes in mobile app development, we offers a perfect set of services for enterprises
                        and startups in <b>New York</b> . As the best choice for <b>Top app developers in NYC,</b> experts of iQlance offer app development
                        services for Android, hybrid, native and iOS platforms
                    </p>
                    <Image className=' w-full object-cover' src="/assets/img/app/app_2.png" width={1300} height={325} alt='hero' />
                    <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                        <p className=' m-0 text-base text-white font-semibold font-poppins'>
                            Start a Conversation
                        </p>
                        <FaArrowRight color='#fff' />
                    </button>

                </div>


                <div className='container flex flex-col gap-5 items-center pb-36'>

                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        iQlance – Where Innovation Meets Web App Mastery in New
                        York
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center text-lg lg:text-xl'>
                        Elevate your online presence with iQlance, the epitome of web app development excellence in the heart of New York. Our
                        esteemed organization has earned the trust of countless clients, owing to our unwavering commitment to delivering top-notch
                        services.
                    </p>

                    <div className=' flex flex-col lg:flex-row justify-around w-full gap-2 flex-wrap'>
                        <div className=' flex-1 flex flex-col gap-2 lg:gap-6'>
                            <Point content='Ionic' />
                            <Point content='React Native' />
                        </div>
                        <div className=' flex-1 flex flex-col gap-2 lg:gap-6'>
                            <Point content='Flutter' />
                            <Point content='Xamarin' />
                        </div>
                        <div className=' flex-1 flex flex-col gap-2 lg:gap-6'>
                            <Point content='jQuery Mobile' />
                            <Point content='Laravel' />
                        </div>
                        <div className=' flex-1 flex flex-col gap-2 lg:gap-6'>
                            <Point content='PhoneGap' />
                            <Point content='Angular' />
                        </div>
                        <div className=' flex-1 flex flex-col gap-2 lg:gap-6'>
                            <Point content='Apache Cordova' />
                        </div>
                    </div>

                    <Image className=' w-full object-cover' src="/assets/img/app/app_3.png" width={1300} height={325} alt='hero' />
                </div>

                <div className='container flex flex-col gap-5 items-center pb-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        App Development New York – Our Process
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center text-lg lg:text-xl'>
                        We have believe in breaking down the larger goal of mobile app development into smaller milestones. Being a leading mobile app
                        development company, we follow a meticulous step-by-step process for app development.
                    </p>

                </div>



                <div className='container flex flex-col gap-5 items-center pb-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Our App Development NYC Services
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg lg:text-xl'>
                        iQlance being a world-class mobile app development specialize in developing top-notch and feature-rich applications for B2B
                        and B2C. Our innovative and highly sophisticated apps are designed and tailor-made for businesses and brands to make an
                        impact in the market. Our app developers make use of state-of-the-art technologies to craft apps that stand a class apart in the
                        market.
                    </p>
                </div>

                <div className="container pb-36">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
                        <DevService />
                        <DevService />
                        <DevService />
                        <DevService />
                    </div>

                    <div className=' w-full flex justify-center mt-20'>
                        <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                            <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                View All
                            </p>
                            <FaArrowRight color='#fff' />
                        </button>
                    </div>
                </div>



                <div className=' container pb-36'>
                    <div className=' w-full bg-[#F6F3FF] px-7 py-10 flex flex-col justify-center items-center gap-4'>
                        <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
                        <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                            Ready to Get Started?
                        </h2>
                        <p className=' text-[#222222] font-poppins text-center font-light text-lg lg:text-xl'>
                            Send your Requirements on
                        </p>

                        <div>
                            <div className=' flex flex-col h-fit items-center gap-7 lg:flex-row lg:gap-2'>
                                <div className=' flex h-fit items-center gap-1'>
                                    <IoMdMail size={20} color='#8C2CF4' />
                                    <Link className=' font-poppins text-[#222222]' href="mailto:info@iqlance.com"><b>info@iqlance.com</b></Link>
                                </div>
                                <span className=' hidden lg:block'>
                                    or
                                </span>
                                <div className=' flex h-fit items-center gap-1'>
                                    <IoCall size={20} color='#8C2CF4' />
                                    <Link className=' font-poppins text-[#222222]' href="tel:+1 647 637 9108">CA: <b>+1 647 637 9108</b></Link>
                                    <span>,</span>
                                </div>
                                <div className=' flex h-fit items-center gap-1'>
                                    <IoCall size={20} color='#8C2CF4' />
                                    <Link className=' font-poppins text-[#222222]' href="tel:+1 647 637 9108">US: <b>+1 647 637 9108</b></Link>
                                </div>
                            </div>

                        </div>

                        <div className=' w-full flex justify-center'>
                            <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                                <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                    Let’s Talk
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>



                <div className='container flex flex-col gap-5 items-center pb-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Industry Verticals We Cater To
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center text-lg lg:text-xl'>
                        Being a leading name in mobile app development New York, iQlance caters to the requirements of several businesses belonging
                        to diverse industry verticals.
                    </p>

                    <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-1 lg:p-5">
                        {industries.map((industry, index) => (
                            <div className=' overflow-hidden flex-1 aspect-square'>
                                <div
                                    key={index}
                                    className="relative bg-red-400 bg-cover bg-center h-full flex items-center justify-center text-white font-bold text-xl transition-transform transform hover:scale-105 duration-300"
                                    style={{ backgroundImage: `url(${industry.image})` }}
                                >
                                    <div className=' w-full h-full bg-[#ffffff97] flex justify-center items-center'>
                                        <p className=' font-poppins text-xl text-center font-semibold text-[#222222]'>
                                            {industry.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className=' container pb-36'>
                    <div className=' w-full bg-[#F6F3FF] px-7 py-10 flex flex-col justify-center items-center gap-4'>
                        <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
                        <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                            Ready to Hire Top App Developers in New York to Build your
                            Next Great Idea?
                        </h2>
                        <p className=' text-[#222222] font-poppins text-center font-light text-lg lg:text-xl'>
                            We are team of talented, experienced, and certified designers and developers. Let us build something extraordinary.
                        </p>

                        <div>
                            <div className=' flex flex-col h-fit items-center gap-7 lg:flex-row lg:gap-2'>
                                <div className=' flex h-fit items-center gap-1'>
                                    <IoMdMail size={20} color='#8C2CF4' />
                                    <Link className=' font-poppins text-[#222222]' href="mailto:info@iqlance.com"><b>info@iqlance.com</b></Link>
                                </div>
                                <span className=' hidden lg:block'>
                                    or
                                </span>
                                <div className=' flex h-fit items-center gap-1'>
                                    <IoCall size={20} color='#8C2CF4' />
                                    <Link className=' font-poppins text-[#222222]' href="tel:+1 647 637 9108">CA: <b>+1 647 637 9108</b></Link>
                                    <span>,</span>
                                </div>
                                <div className=' flex h-fit items-center gap-1'>
                                    <IoCall size={20} color='#8C2CF4' />
                                    <Link className=' font-poppins text-[#222222]' href="tel:+1 647 637 9108">US: <b>+1 647 637 9108</b></Link>
                                </div>
                            </div>

                        </div>

                        <div className=' w-full flex justify-center'>
                            <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                                <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                    Talk to Our Expert Now
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>


                <div className='container flex flex-col gap-5 items-center pb-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Endeavors That Make Us Proud
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg lg:text-xl'>
                        iQlance solutions has always been honored with valuable words for the efforts given on mobile app development that are
                        efficiently unique and user centric. Here are some of the best examples for this.
                    </p>
                </div>


                <div className=' container pb-36'>
                    <div className=' w-full bg-[rgb(30,34,81)] px-7 py-10 flex flex-col gap-4 lg:flex-row lg:items-center'>
                        <div className=' flex flex-col gap-4 lg:flex-1'>
                            <h3 className='text-white font-poppins font-bold text-3xl m-0 lg:text-4xl'>
                                Check How We turn Your
                                Idea into Innovative Product
                            </h3>
                            <p className=' text-white font-poppins font-light text-lg lg:text-xl m-0'>
                                Our rich portfolio justifies that, we are one of the best app
                                development company in New York.
                            </p>
                        </div>
                        <div className=' flex-1 lg:flex lg:flex-col lg:items-end lg:mr-10'>
                            <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                                <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                    See Our Work
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>

                    </div>
                </div>


                <div className=' container pb-36 lg:flex'>
                    <div className=' flex-1'>
                        <Image src="/assets/img/app/app_5.png" className=' object-cover' width={622} height={622} alt='hero' />
                    </div>
                    <div className=' flex-1'>
                        <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-3 lg:mt-0'>
                            Give life to your app
                            development ideas with
                            iQlance
                        </h3>
                        <p className=' text-[#222222] font-poppins font-light text-lg lg:text-xl mt-3 lg:mt-8'>
                            We have build feature rich apps that are compatible with
                            various platforms like iOS, Android, Windows, etc. We are a
                            leading name in mobile app development New York. Our team
                            of top app developers NYC execute app development projects
                            to perfection.
                        </p>
                        <p className=' text-[#222222] font-poppins font-light text-lg lg:text-xl mt-3 lg:mt-8'>
                            At iQlance, we transform your creative ideas into reality. We
                            offer the best app development solutions and unparalleled
                            services to our clients with no compromise on the quality.
                        </p>
                        <p className=' text-[#222222] font-poppins font-light text-lg lg:text-xl mt-3 lg:mt-8'>
                            We just don’t create ordinary apps. We build unique apps that
                            make a tangible difference to your business. Our apps are
                            specifically designed to deliver the results that you are looking
                            for. Be it any app development project, our professional app
                            developers New York have the expertise to give it wings and
                            make it a reality.
                        </p>
                        <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                            <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                Get in Touch
                            </p>
                            <FaArrowRight color='#fff' />
                        </button>
                    </div>
                </div>

                <div className=' container pb-36'>
                    <h3 className='text-[#222222] font-poppins font-bold text-3xl text-center m-0 lg:text-4xl mt-3 lg:mt-0'>
                        Why Choose iQlance for App Development in New York?
                    </h3>
                    <p className=' text-[#222222] font-poppins font-light text-lg text-center lg:text-xl mt-3 lg:mt-8'>
                        Here are some of the reasons why businesses and brands around the world choose iQlance as their app development partner.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-16'>
                        <DevService />
                        <DevService />
                        <DevService />
                        <DevService />
                    </div>
                </div>


                <div className=' container pb-36 lg:flex'>
                    <div className=' flex-1 grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-3 lg:gap-x-6 lg:gap-y-5'>
                        {cards.map((data, index) => (
                            <div>
                                <SmallCard />
                            </div>
                        ))}
                    </div>
                    <div className=' flex-1 flex flex-col justify-center gap-8'>

                        <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-4 lg:mt-0'>
                            Offshore Web,
                            Software & Mobile App
                            Development
                            Company New York
                            City
                        </h3>
                        <p className=' text-[#222222] font-poppins font-light text-lg lg:text-xl m-0 lg:mt-8'>
                            Right from the time we started till now, we have
                            worked with several businesses, small and big
                            and completed thousands of projects. The
                            statistics reveal why iQlance is a top mobile
                            app development company in New York, USA.
                        </p>
                        <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                            <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                Request a Quote
                            </p>
                            <FaArrowRight color='#fff' />
                        </button>

                    </div>
                </div>








            </div>
        </Wrapper>
    );
};

export default index;