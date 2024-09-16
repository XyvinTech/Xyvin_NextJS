'use client'; // This forces the component to be rendered on the client side

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';


export const DevService = () => {
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

const MobileAppSlider = () => {
    return (
        <div className=' w-full h-fit'>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 3, // Show 3 slides on desktop
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true, dynamicBullets: true}}
                navigation={true}
                modules={[Autoplay, Pagination]}
            >

                <SwiperSlide>
                    <DevService/>
                </SwiperSlide>

                <SwiperSlide>
                    <DevService/>
                </SwiperSlide>
                <SwiperSlide>
                    <DevService/>
                </SwiperSlide>
                <SwiperSlide>
                    <DevService/>
                </SwiperSlide>

                <SwiperSlide>
                    <DevService/>
                </SwiperSlide>
                <SwiperSlide>
                    <DevService/>
                </SwiperSlide>
                

            </Swiper>
        </div>
    );
};

export default MobileAppSlider;
