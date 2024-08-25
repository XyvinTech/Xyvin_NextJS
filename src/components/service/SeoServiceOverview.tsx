import React from 'react'

const SeoServiceOverview = () => {
    return (
        <div className=' w-full container py-5 lg:flex lg:flex-col lg:items-center bg-white'>
            <h1 className=' text-center text-3xl text-[#222222] font-inter font-black m-0 lf:text-5xl'>
                Your search for SEO services ends here
            </h1>
            <p className='text-center text-xl text-[#222222] font-semibold font-inter mt-4'>
                TWhen your company partners with WebFX, you:
            </p>

            <div className=' flex flex-col gap-14 lg:flex-row w-full justify-between lg:mt-8'>
                <div className=' flex flex-col gap-3 px-2 lg:p-10'>
                    <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/contact_card.png" alt="contact-card" />
                    <h3 className=' text-lg font-inter font-semibold text-black m-0'>Reclaim your work day</h3>
                    <p className='text-lg font-inter text-[#222222] m-0 lg:w-[230px]'>
                        Get more time back in your
                        day. With a team of
                        content creators,
                        developers, industry
                        experts, and data
                        consultants behind them,
                        <span className=' text-[#0B1720] font-bold'>your marketing expert will
                            make SEO a reliable,
                            stress-free marketing
                            channel
                        </span>
                        for you.
                    </p>
                </div>

                <div className=' flex flex-col gap-3 px-2 lg:p-10'>
                    <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/cloud.png" alt="contact-card" />
                    <h3 className=' text-lg font-inter font-semibold text-black m-0'>Accelerate your ROI</h3>
                    <p className='text-lg font-inter text-[#222222] m-0 lg:w-[230px]'>
                        Boost your ROI from SEO
                        with our
                        <span className=' text-[#0B1720] font-bold'>your marketing expert will
                            client-exclusive
                            software stack
                        </span>
                        MarketingCloudFX.
                        Through machine learning,
                        AI, and billions of data
                        points, its delivered a 25%
                        average greater marketing
                        ROI for clients.
                    </p>
                </div>

                <div className=' flex flex-col gap-3 px-2 lg:p-10'>
                    <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/data.png" alt="contact-card" />
                    <h3 className=' text-lg font-inter font-semibold text-black m-0'>Grow your bottom-line</h3>
                    <p className='text-lg font-inter text-[#222222] m-0 lg:w-[230px]'>
                        <span className=' text-[#0B1720] font-bold'>your marketing expert will
                            Deliver the results
                            leadership wants,
                        </span>
                        from increased market share to
                        job creation, with our SEO
                        experts. Already, our
                        clients have earned $10
                        billion in revenue through
                        our data-fueled and
                        expert-led SEO strategies.
                    </p>
                </div>

                <div className=' flex flex-col gap-3 px-2 lg:p-10'>
                    <img className='w-8 lg:w-12 object-contain' src="/assets/img/icons/all-in-one.png" alt="contact-card" />
                    <h3 className=' text-lg font-inter font-semibold text-black m-0'>Streamline your strategy</h3>
                    <p className='text-lg font-inter text-[#222222] m-0 lg:w-[230px]'>
                        Leading an omnichannel
                        marketing strategy has
                        never been easier. With our
                        full-service agency and its
                        500+ experts,
                        <span className=' text-[#0B1720] font-bold'>your marketing expert will
                            we build,
                            implement, and manage
                            your cross-channel
                            strategy for you
                        </span>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default SeoServiceOverview