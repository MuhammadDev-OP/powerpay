"use client";

import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="relative z-10 mx-auto mt-28">
          <div>
            <Image src={"/images/Rectangle.png"} width={470} height={208} className="lg:max-w-[470px] max-w-[350px]" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="absolute top-[60px] lg:left-[42px] left-[15px]">
              <Image
                src={"/heroElements/Screen_Ele.png"}
                width={404}
                height={32}
                className="lg:max-w-[470px] max-w-[320px]"
              />
            </div>
            <div className="absolute top-[143px] lg:top-[196px] w-[373px] lg:w-[604px] h-[201px] lg:h-[311px] left-[-11px] lg:left-[-68px] bg-black flex flex-col justify-center items-center text-white border-4 border-white p-8 rounded-lg">
              <h1 className="text-2xl lg:text-5xl font-medium mb-4 text-center">Where crypto grows</h1>
              <p className="text-md lg:text-lg text-center font-extralight">
                Enjoy daily passive income on 15+ crypto assets, on your own
                terms. Click on Get Started to start your journey with us
                starting today.
              </p>
            </div>
            <div className="absolute top-[382px] lg:top-[555px] left-[50px] lg:left-[80px]">
              <Image src={"/heroElements/loading.png"} width={320} height={32} className="lg:max-w-[470px] max-w-[250px]" />
            </div>
            <button
              className="py-2 px-6 
              absolute top-[479px] lg:top-[680px] left-[14px] lg:left-[80px] w-80
              text-center
              bg-blue-500
              text-white hover:bg-blue-600
              transition-colors duration-300
              rounded-md"
              onClick={() => { }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* <Wrapper>
      </Wrapper> */}
    </>
  );
};

export default Hero;
