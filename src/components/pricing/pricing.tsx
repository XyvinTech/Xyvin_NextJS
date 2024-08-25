import React from 'react'

const Pricing = () => {
    return (
        <div className=' w-full container py-5 lg:flex lg:flex-col lg:items-center'>
            <h1 className=' text-center text-3xl text-[#222222] font-inter font-black m-0 lf:text-5xl'>
                Looking for plans and pricing?
                Get a view of our SEO services
            </h1>
            <p className='text-center text-xl text-[#222222] font-inter mt-4'>
                Too many SEO companies take a copy-and-paste approach to SEO. That’s not our style — and it’s not how we’ve
                driven 5Cr sales revenue for our clients in just the past five years with our search engine optimization services.
                Get a preview of what that can look like below:
            </p>

            <div className='w-full lg:w-10/12 rounded-lg bg-white shadow-lg lg:mt-24'>
                <div className='w-full bg-[#1E2251] h-fit rounded-t-lg relative py-5 lg:py-4'>
                    <img
                        src="/assets/img/silver_plan_icon.png"
                        alt="silver"
                        className='w-12 h-12 lg:w-20 lg:h-20 absolute top-[-20px] lg:top-[-50px] left-[50%] transform -translate-x-1/2'
                    />
                    <div className=' flex flex-col gap-2'>
                        <p className=' m-0 text-white text-xl font-inter font-semibold text-center'>CUSTOM SEO PLANS</p>
                        <p className=' m-0 text-white text-lg font-inter text-center'>Starting at</p>
                        <p className=' m-0 text-white text-xl font-inter font-semibold text-center'>₹35000 <span className=' font-normal text-lg'>/month</span></p>
                    </div>
                </div>

                <div className='px-10 py-8 flex flex-col'>
                    <h1 className=' font-inter text-[#0B1720] font-semibold text-xl lg:text-2xl'>How we determine pricing</h1>

                    <div className=' mt-3'>
                        <div className=' flex h-fit items-center gap-2'>
                            <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/contact_card.png" alt="contact-card" />
                            <p className=' m-0 font-inter text-[#0B1720] font-semibold text-lg'>Discuss your business goals</p>
                        </div>
                        <p className=' text-black text-sm m-0 font-inter font-normal mt-2'>
                            We’ll learn about what you are hoping to achieve as a company — short- and long-term — to create an SEO plan
                            that works towards your goals.
                        </p>
                    </div>

                    <div className=' mt-5'>
                        <div className=' flex h-fit items-center gap-2'>
                            <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/research.png" alt="contact-card" />
                            <p className=' m-0 font-inter text-[#0B1720] font-semibold text-lg'>Analyze your market</p>
                        </div>
                        <p className=' text-black text-sm m-0 font-inter font-normal mt-2'>
                            We’ll do a deep dive into your competition — both as a business and within search, specifically — to determine the
                            best action plan.
                        </p>
                    </div>

                    <div className=' mt-5 mb-4'>
                        <div className=' flex h-fit items-center gap-2'>
                            <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/planning.png" alt="contact-card" />
                            <p className=' m-0 font-inter text-[#0B1720] font-semibold text-lg'>Review your strategic objectives</p>
                        </div>
                        <p className=' text-black text-sm m-0 font-inter font-normal mt-2'>
                            What key objectives are on your roadmap? Double down on content production? Launch a new product line?
                            We’ll create a plan that aligns perfectly.
                        </p>
                    </div>


                    <button className=' self-center bg-[#8C2CF4] rounded-sm px-3 py-3 text-white font-bold font-inter text-sm mt-4 lg:py-5 lg:my-4'>
                        Request Pricing
                    </button>


                </div>

            </div>

        </div>
    )
}

export default Pricing