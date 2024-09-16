import AppHero from '@/components/hero/AppHero';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import ServiceCard from '@/components/cards/ServiceCard';
import MobileAppSlider from '@/components/slider/MobileAppSlider';


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

const heroPoints = [
    '45 minutes of free consultation',
    'A strict non-disclosure policy',
    'Detailed Feature List Document',
    'Action plan to kick start your project',
]

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
                <AppHero
                    title='Top App Developers
                    Canada'
                    subheading='iQlance – One of the top app development company in
                    Canada'
                    points={heroPoints}
                    image='/assets/img/app/app_canada_1.png'
                    description='At iQlance, we have a skilled and expert team of full-
                    stack mobile app developers Canada who specialize in
                    native and cross-platform app development. Native
                    apps built by us are specifically developed for an
                    individual platform like iOS or Android. On the other hand,
                    cross-platform apps are those that are developed to
                    seamlessly function on various platforms. We specialize
                    in creating highly intuitive and user-friendly mobile apps
                    for businesses and brands across the globe. We create
                    exceptional brand experiences that stay in the minds of
                    the customers forever.'/>

                {/* <div className='container flex flex-col gap-5 pb-5 lg:py-36 items-center'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Mobile App Development Frameworks We Use
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center text-lg lg:text-xl'>
                        iQlance is a top mobile app development company in Canada. One of the reasons behind this is that we make use of the latest
                        frameworks in mobile app development.
                    </p>
                    <Image className=' w-full object-cover' src="/assets/img/app/app_2.png" width={1300} height={325} alt='hero' />
                    <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                        <p className=' m-0 text-base text-white font-semibold font-poppins'>
                            Start a Conversation
                        </p>
                        <FaArrowRight color='#fff' />
                    </button>

                </div> */}


                <div className='container flex flex-col gap-5 items-center pb-5 lg:py-36'>

                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Mobile App Development Frameworks We Use
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center text-lg'>
                        iQlance is a top mobile app development company in Canada. One of the reasons behind this is that we make use of the latest
                        frameworks in mobile app development.
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

                <div className=' container py-10 lg:py-36 lg:flex'>
                    <div className=' flex-1'>
                        <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-3 lg:mt-0'>
                            Common Challenges Faced By
                            Businesses In Mobile App
                            Development Company
                        </h3>
                        <p className=' text-[#222222] font-poppins font-light text-lg mt-3 lg:mt-8'>
                            Going ahead with a mobile app development idea is no easy
                            task. There are several challenges that confront businesses in
                            app development. The expert and professional full-stack mobile
                            app developers at iQlance help clients overcome the various
                            challenges. Some common challenges faced by our clients
                            include:
                        </p>

                        <div className=' flex flex-col gap-3 lg:gap-6 lg:mt-3 mb-3'>
                            <Point content="Not being able to hire the right mobile app development company" />
                            <Point content="Lack of a user-friendly and interactive app interface" />
                            <Point content="Dilemma of going for cross-platform app development or native app development" />
                        </div>
                    </div>
                    <div className=' flex-1 flex justify-center items-center'>
                        <Image src="/assets/img/app/app_canada_2.png" className=' object-cover' width={622} height={622} alt='hero' />
                    </div>
                </div>


                <div className=' container pb-10 lg:pb-36 lg:flex'>
                    <div className=' flex-1 flex justify-center items-center'>
                        <Image src="/assets/img/app/app_canada_3.png" className=' object-cover' width={622} height={622} alt='hero' />
                    </div>
                    <div className=' flex-1'>
                        <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-3 lg:mt-0'>
                            Overcoming challenges
                        </h3>
                        <p className=' text-[#222222] font-poppins font-light text-lg mt-3 lg:mt-8'>
                            At iQlance, we know that app development is not a cakewalk.
                            There are several hurdles that need to be crossed in the
                            process of developing a successful mobile app.
                        </p>
                    </div>
                </div>

                <div className='container flex flex-col gap-5 items-center pb-5 lg:pb-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Top Mobile App Development Company Canada
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center m-0 font-light text-lg '>
                        Demand associated with various mobile apps is escalating consistently in almost every type of business. For this, our
                        <b> Mobile App Development Toronto</b> team acts as an accelerator to design and develop innovative apps.
                    </p>

                    <p className=' text-[#222222] font-poppins text-center m-0 font-light text-lg '>
                        As a top-notch <b> App Development Company</b>, we provide you a wide variety of mobile app development solutions for different
                        platforms, which include iOS i.e. iPad and iPhone, Windows and Android. We have a team of knowledgeable and creative mobile
                        app developers intend to accomplish your specific business projects and requirements.
                        Our Mobile Application Development experts always utilize advanced technology and tools to create many highly customized
                        mobile apps to meet specific requirements of our customers and business enterprises.
                    </p>
                    <Image src="/assets/img/app/app_canada_4.png" width={1000} height={320} className=' w-full' alt='hero_img' />
                </div>

                <div className='container flex flex-col gap-5 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Custom App Development Company Canada
                    </h2>
                </div>

                <div className="container pb-5 lg:pb-36">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
                        <DevService />
                        <DevService />
                        <DevService />
                        <DevService />
                    </div>
                </div>


                <div className='container flex flex-col gap-5 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Process We Follow For Mobile App Development                    </h2>
                    <p className=' text-[#222222] font-poppins text-center m-0 font-light text-lg '>
                        As a top mobile app development company Canada, we believe that mobile app development is the final goal. For completing
                        this goal, there are several small milestones that need to be completed to achieve the desired outcome.
                    </p>
                </div>

                <div className=' container pb-5 lg:pb-36'>
                    <div className=' w-full bg-[#F6F3FF] px-7 py-10 flex flex-col justify-center items-center gap-4'>
                        <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
                        <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                            Ready to Hire Top Rated Dedicated Developers to Build your
                            Next Great Idea?
                        </h2>
                        <p className=' text-[#222222] font-poppins text-center font-light text-lg'>
                            Schedule an interview and Get 7 Days Free Trial
                        </p>

                        <div className=' w-full flex justify-center'>
                            <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                                <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                    Hire Mobile App Developer
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>


                <div className='container flex flex-col gap-3 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Endeavors That Make Us Proud
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center m-0 font-light text-lg '>
                        iQlance solutions has always been honored with valuable words for the efforts given on mobile app development that are
                        efficiently unique and user centric. Here are some of the best examples for this.
                    </p>


                    <div className='container py-10 lg:flex bg-[#F6F3FF]'>
                        <div className=' flex-1 flex justify-center items-center'>
                            <Image src="/assets/img/app/app_canada_5.png" className=' object-cover' width={622} height={622} alt='hero' />
                        </div>
                        <div className=' flex-1'>
                            <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-3 lg:mt-0'>
                                Restaurants App Solution
                            </h3>
                            <p className=' text-[#222222] font-poppins font-light text-lg mt-3 lg:mt-8'>
                                Here is the modern restaurant app solution based on the idea of:
                                “getting food when you arrive at dine-in”. It is a restaurant
                                booking app that allows you to book food and table in advance
                                so that you can enjoy it by eliminating the long queues at the
                                restaurants with superfast express ordering & delivery. This app is
                                much more than a food ordering system.
                            </p>

                            <div className=' flex flex-col gap-3 lg:gap-6 lg:mt-3 mb-3'>
                                <Point content="Menu and nearby restaurants" />
                                <Point content="Table bookings" />
                                <Point content="Pre-orders" />
                                <Point content="Great offers" />
                                <Point content="Easy payments" />
                            </div>

                            <div className=' h-fit flex flex-col lg:flex-row lg:items-center gap-10 mt-10'>
                                <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                                    <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                        Hire Mobile App Developer
                                    </p>
                                    <FaArrowRight color='#fff' />
                                </button>
                                <div className=' h-fit flex items-center gap-10'>
                                    <FaApple color='#000' size={50} />
                                    <FaAndroid color='#000' size={50} />
                                    <FaLaravel color='#000' size={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' container pb-3'>
                    <div className=' w-full bg-[rgb(30,34,81)] px-7 py-10 flex flex-col gap-4 lg:flex-row lg:items-center'>
                        <div className=' flex flex-col gap-4 lg:flex-1'>
                            <h3 className='text-white font-poppins font-bold text-3xl m-0 lg:text-4xl'>
                                Check How We turn Your
                                Idea into Innovative Product
                            </h3>
                            <p className=' text-white font-poppins font-light text-lg m-0'>
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


                <div className='container flex flex-col gap-3 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Technology Stack
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg '>
                        We’ve polished the skill of designing and constructing mobile applications with great user interfaces through years of knowledge in
                        the creation of mobile applications. Our webapps provide excellent outcomes for businesses and brands across a wide range of
                        industries.
                    </p>
                </div>

                <div className=' container pb-5 lg:pb-36'>
                    <div className=' w-full bg-[#F6F3FF] px-7 py-10 flex flex-col justify-center items-center gap-4'>
                        <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
                        <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                            Talk to our Technical Expert to Build your Mobile App Idea.
                        </h2>
                        <p className=' text-[#222222] font-poppins text-center font-light text-lg'>
                            Send your Requirements on :
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
                                    Request a Quote
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>


                {/* remaining */}
                <div className='container flex flex-col gap-3 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Hire Mobile App Developers in Canada
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg '>
                        Our team of professionals, experts, and experienced Hire app developers Canada know the app development process in and out.
                        Being one of the best mobile development companies in Canada, we offer a wide range of end-to-end mobile app development
                        services to clients.
                    </p>

                    <div className=' w-full mt-4'>
                        <MobileAppSlider />
                    </div>
                </div>



                <div className=' container pb-5 lg:pb-36'>
                    <div className=' w-full bg-[#F6F3FF] px-7 py-10 flex flex-col justify-center items-center gap-4'>
                        <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
                        <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                            We are Team of Talented, Experienced, & Certified
                            Designers and Developers.
                        </h2>
                        <p className=' text-[#222222] font-poppins text-center font-light text-lg'>
                            Let us Build Something Extraordinary.
                        </p>

                        <div className=' w-full flex justify-center'>
                            <button className=' flex h-fit items-center gap-2 bg-[#8C2CF4] w-fit border-2 rounded px-6 py-3 border-[#222222]'>
                                <p className=' m-0 text-base text-white font-semibold font-poppins'>
                                    Request a quote
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>


                <div className=' container py-10 lg:py-36 lg:flex'>
                    <div className=' flex-1'>
                        <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-3 lg:mt-0'>
                            Why Choose iQlance as your
                            Mobile App Development
                            Canada Partner
                        </h3>
                        <p className=' text-[#222222] font-poppins font-light text-lg mt-3 lg:mt-8'>
                            iQlance is a global leader in building iPhone Mobile apps,
                            Android Mobile Apps Development Company In Canada and a
                            trusted name for its quality of work, client central approach. We
                            try to deliver the best solution that suits clients business and
                            can take your business to new heights. <b>
                                Custom Native mobile app development
                            </b>, mobile application development services In Canada, mobile software development, 400+ apps make us
                            leader in this industry.
                        </p>
                        <p className=' text-[#222222] font-poppins font-light text-lg mt-3 lg:mt-8'>
                            Our team iOS development and android app development
                            experts make an outstanding combination when it comes to
                            giving accurate solution in mobile app sphere. We are providing
                            Finance/ Banking Application and social networking apps.
                        </p>
                        <p className=' text-[#222222] font-poppins font-light text-lg mt-3 lg:mt-8'>
                            We give a face to your ideas to make your dreams come true.
                        </p>

                    </div>
                    <div className=' flex-1 flex justify-center items-center'>
                        <Image src="/assets/img/app/app_canada_6.png" className=' object-cover' width={622} height={622} alt='hero' />
                    </div>
                </div>


                <div className=' container pb-5 lg:pb-36'>
                    <div className=' w-full bg-[#F6F3FF] px-7 py-10 flex flex-col justify-center items-center gap-4'>
                        <Image src="/assets/img/app/app_icon_1.svg" width={80} height={80} alt='app_icon' />
                        <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                            So, We Guess You want to talk about your Project
                        </h2>
                        <p className=' text-[#222222] font-poppins text-center font-light text-lg'>
                            Send your Requirements on :
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
                                    Let's Talk
                                </p>
                                <FaArrowRight color='#fff' />
                            </button>
                        </div>
                    </div>
                </div>


                <div className='container flex flex-col gap-3 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Process We Follow to build Mobile App Development
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg '>
                        iQlance searches for best possible solution for your app and we try to achieve simple user interfacing as it nurture all spheres of
                        mobile market. We target the client requirement and deliver a robust and user friendly app so that it caters all demographics and
                        geographies.
                    </p>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg '>
                        iQlance follows the rules of  <b>SDLC (Software development life cycle) </b> for a perfect approach on project methodology and design
                        Solutions Canada.
                    </p>
                </div>


                <div className='container flex flex-col gap-3 items-center pb-5 lg:pb-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Mobile Application Development Process
                    </h2>

                    <div className=' flex flex-col gap-3'>
                        <div className=' h-fit flex flex-col lg:flex-row gap-1 lg:gap-2'>
                            <Point content='Understand goal and lay groundwork:' />
                            <p className=' text-[#222222] font-poppins text-left ml-6 lg:m-0 font-light text-base lg:text-lg'>
                                We dedicate resources to listen to your idea, brainstorm with you and help you develop
                                a sound strategy
                            </p>
                        </div>
                        <div className=' h-fit flex flex-col lg:flex-row gap-1 lg:gap-2'>
                            <Point content='Design building: ' />
                            <p className=' text-[#222222] font-poppins text-left ml-6 lg:m-0 font-light text-base lg:text-lg'>
                                Our expert design team creates design that are both elegant and technically simple
                            </p>
                        </div>
                        <div className=' h-fit flex flex-col lg:flex-row gap-1 lg:gap-2'>
                            <Point content='Building Code:' />
                            <p className=' text-[#222222] font-poppins text-left ml-6 lg:m-0 font-light text-base lg:text-lg'>
                                We adhere to strict IT industry guidelines and deadlines when it comes to writing code for your product
                            </p>
                        </div>
                        <div className=' h-fit flex flex-col lg:flex-row gap-1 lg:gap-2'>
                            <div className=' w-fit'>
                                <Point content='Testing :' />
                            </div>
                            <p className=' flex-1 text-[#222222] font-poppins text-left ml-6 lg:m-0 font-light text-base lg:text-lg'>
                                A holistic development approach is incomplete unless it has been tested soundly. Our team of testers and
                                troubleshooters apply tools and methods to transform an app in its nascent stage into a wholesome and real product ready
                                for use.
                            </p>
                        </div>
                        <div className=' h-fit flex flex-col lg:flex-row gap-1 lg:gap-2'>
                            <Point content='Promotion and launch :' />
                            <p className=' text-[#222222] font-poppins text-left ml-6 lg:m-0 font-light text-base lg:text-lg'>
                                We have the right tools to market your app and launch it with the target audience.
                            </p>
                        </div>
                    </div>

                    <Image src="/assets/img/app/app_canada_7.png" width={1000} height={320} className=' w-full' alt='hero_img' />

                </div>


                <div className='container flex flex-col gap-3 items-center py-5 lg:py-36'>
                    <h2 className='text-[#181D45] font-poppins font-bold text-center text-3xl m-0 lg:text-4xl'>
                        Why Choose us for Mobile App Development?
                    </h2>
                    <p className=' text-[#222222] font-poppins text-center font-light text-lg '>
                        There are many mobile app development companies in Canada. iQlance has become a preferred choice for businesses and
                        brands across the globe. Here are a few reasons why companies hire us as their mobile app development partner.
                    </p>
                </div>

                <div className="container pb-5 lg:pb-36">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
                        <DevService />
                        <DevService />
                        <DevService />
                        <DevService />
                    </div>
                </div>










                <div className=' container py-5 lg:py-36 lg:flex'>
                    <div className=' flex-1 grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-3 lg:gap-x-6 lg:gap-y-5'>
                        {cards.map((data, index) => (
                            <div>
                                <SmallCard />
                            </div>
                        ))}
                    </div>
                    <div className=' flex-1 flex flex-col justify-center gap-8'>

                        <h3 className='text-[#222222] font-poppins font-bold text-3xl m-0 lg:text-4xl mt-4 lg:mt-0'>
                            Offshore Mobile App
                            Development Canada
                        </h3>
                        <p className=' text-[#222222] font-poppins font-light text-lg m-0 lg:mt-8'>
                            The numbers and figures speak about the
                            unprecedented success we have achieved as
                            an app development company in Canada. The
                            credit for the phenomenal numbers that we
                            have achieved so far goes to the top app
                            developers in Canada who are a part of the
                            iQlance team.
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