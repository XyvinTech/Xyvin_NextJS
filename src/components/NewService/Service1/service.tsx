import Image from 'next/image';
import React from 'react';
import'./service1.css';
import Img from '@/assets/img/newService1.png';


export default function NewService() {
  return (
    <>
    <div className="cs_height_115 cs_height_lg_60"></div>
    <div className="container-service1">
        <div className="left-service1">
            <div className="left-top-service1">
                <h2>
                    <span>Kochi City</span><br/>
                    <span>Web Design</span><br/>
                    <span>Services</span>
                </h2>
            </div>
            <div className="left-bottom-service1">
                <p>Get an attractive and fast website that ranks well in search results, plus drives leads and sales with our web design agency in Kochi City.
                    <br/><br/>With more than 50 design awards won, our in-house design, development, and project management team knows how to combine form with function.
                    <br/><br/>If you want to expand your online reach and earn more revenue, we can help. <a>Contact us online</a> or call <a> 813 891 6303</a> to speak with one of our experts today!
                </p>
            </div>
        </div>
        <div className="right-service1">
            <div className="right-full-service1">
                <Image src={Img} alt="image"/>
            </div>
        </div>
    </div>
    
     </>
  );
}
