
import React,{ useEffect, useRef, useState } from 'react';
import './section.css';
import Image from 'next/image';


const Section5 = () => {

return (
  <section className="section-5 mt-[20px] ">
      
        
    
        <div className="section-left md:ml-[40px] ">
          <h1 className="section-text text-[24px] md:text-[30px] lg:text-[48px] max-text-[48px] md:leading-[57.6px]">
           FurSphere gives you an <br />
           all-in-one <span className="text-[24px] md:text-[30px] lg:text-[48px] max-text-[48px] font-Ubuntu text-[#5777D0]">AI pet care</span> <br/>
           <span className="text-[24px] md:text-[30px] lg:text-[48px] max-text-[48px] font-Ubuntu text-[#5777D0]">companion</span> <br />
           anytime, anywhere
          </h1>
        </div>
     
        <img
          src="/page5.svg"
          alt="Example"
          className="section-image"
        />
      
      
  </section>
)
}

 export default Section5;

