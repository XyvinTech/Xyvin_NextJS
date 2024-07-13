import Img from '@/assets/img/newService1.png';
import Image from 'next/image';

export default function Service() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen p-4 lg:p-0 lg:gap-5 overflow-hidden">
            <div className="w-full lg:w-2/5 flex flex-col justify-center items-start">
                <div className="mb-8 lg:mb-12">
                    <h2 className="text-4xl lg:text-7xl font-black text-[#1E2251] leading-tight font-sans">
                        <span>Kochi City</span>
                        <br />
                        <span>Web Design</span>
                        <br />
                        <span>Services</span>
                    </h2>
                </div>
                <div className="text-base lg:text-xl text-[#1E2251] leading-7 lg:leading-8 font-normal">
                     <p className="mb-8 lg:mb-12">
                        Get an attractive and fast website that ranks well in search results, plus drives leads and sales with our web design agency in Kochi City.
                    </p>
                    <p className="mb-8 lg:mb-12">
                        With more than 50 design awards won, our in-house design, development, and project management team knows how to combine form with function.
                    </p>
                    <p>
                        If you want to expand your online reach and earn more revenue, we can help. <a className="text-[#7C56FE]" href="#">Contact us online</a> or call <a className="text-[#7C56FE]" href="#">813 891 6303</a> to speak with one of our experts today!
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-3/5 flex justify-center items-center mt-8 lg:mt-0">
                <div className="w-full h-auto">
                    <Image src={Img} alt="image" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
}