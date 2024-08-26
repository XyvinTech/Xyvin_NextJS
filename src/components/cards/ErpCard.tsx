import React from "react";

const ErpCard = () => {
    return (
        <div className="flex-1 bg-white p-6 md:p-8 lg:p-10 rounded-lg max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-black mb-3 border-l-4 border-[#1E2251] pl-4 font-inter">
                ERP Development Consulting
            </h2>
            <p className="text-black text-sm md:text-base lg:text-lg font-inter font-light lg:mt-2">
                Our ERP consultants conduct an analysis of your present business
                environment and gain a thorough understanding of your strategic business
                objectives and desired outcomes. They act as your trusted advisors and
                collaborate with you to develop the best strategies for deploying
                crucial ERP software.
            </p>
        </div>
    );
};

export default ErpCard;
