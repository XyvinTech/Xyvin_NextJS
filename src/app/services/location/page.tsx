import LocationCard from '@/components/cards/LocationCard';
import LocationCardSmall from '@/components/cards/LocationCardSmall';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';

export const metadata = {
    title: "Service Vixan - Digital  Creative Agency Next js Template",
};


const index = () => {
    return (
        <Wrapper>
            <HeaderOne />
            <div id="scrollsmoother-container">
                <div className="lg:h-[90px] h-[120px]" />

                <div className=' container flex flex-col gap-10'>
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                </div>

                <div className='container grid lg:grid-cols-3 gap-10 place-items-center	'>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                    <LocationCardSmall/>
                </div>

            </div>
        </Wrapper>
    );
};

export default index;