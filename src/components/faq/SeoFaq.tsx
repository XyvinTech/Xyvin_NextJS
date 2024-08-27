'use client'

import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { FaCircleChevronDown } from 'react-icons/fa6';
import faqdata from '@/data/seo_faq.json'

const SeoFaq = () => {
    return (
        <div className="bg-[#1E2251] text-white p-6 w-full">
            <h2 className="text-center font-inter text-white font-bold text-2xl">FAQs about SEO services</h2>
            <Accordion allowZeroExpanded>
                {faqdata.map((faq, index) => {
                    return (
                        <AccordionItem className=' border-none outline-none'>
                            <AccordionItemHeading className=' border-none outline-none'>
                                <AccordionItemButton className='py-2 border-none outline-none'>
                                    <div className=" font-bold text-lg font-inter text-white py-2 h-fit flex items-center justify-between">
                                        {faq.question}
                                        <button>
                                            <FaCircleChevronDown color='#A6B9DE' />
                                        </button>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className=" font-inter text-white text-sm">
                                <p>
                                    {faq.answer}
                                </p>
                            </AccordionItemPanel>
                            <div className=' w-full h-[1px] bg-[#BDBDBD]' />
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    );
};

export default SeoFaq;
