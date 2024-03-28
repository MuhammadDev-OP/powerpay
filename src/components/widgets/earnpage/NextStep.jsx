import Image from "next/image";
import React from "react";

const NextStep = () => {
    return (
        <section className=" mt-32 md:my-52">
            <div className=" border-2 rounded-3xl  py-10 md:py-0 px-2 md:px-4   items-center justify-center md:h-[70vh] border-white text-white flex  md:flex-row flex-col">
                <div className="flex flex-col h-full md:text-left text-center md:w-[70%] justify-between md:p-20 gap-5">
                    <div className="">
                        <h1 className="text-3xl md:text-6xl font-[700] ">The Next Step <br /> Begins With A Tap.</h1>
                        <p className="text-xl font-[600] pt-5">
                            Buy, Sell and Securely Earn Today.
                        </p>

                    </div>
                    <button
                        className="py-3 mt-10 px-6 
              bg-blue-600
              text-white hover:bg-blue-500
              transition-colors duration-300
              rounded-md md:w-[300px] font-[600]"
                    >
                        Get Started
                    </button>
                </div>
                <div className="w-full md:w-[30%] flex justify-center items-center mt-20 md:mt-0">

                    <div className="border-2 relative bg-black shadow-2xl shadow-[#6a97ff] border-white rounded-[30px] h-[260px] w-[220px] rotate-12">
                        <div className="p-6 flex items-end justify-end h-full">

                            <button
                                className="py-3 px-6 
              bg-blue-600
              text-white hover:bg-blue-500
              transition-colors duration-300
              rounded-md w-full"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <Image src={'/earnpageelements/teet.png'} alt="" width={1080} height={1080} className="w-24 -mt-[7rem]  ml-[-12rem]  absolute" />
                    <Image src={'/earnpageelements/zee.png'} alt="" width={1080} height={1080} className="w-20 -mt-[14rem]  ml-[14rem] absolute" />
                </div>
            </div>
        </section>


    );
};

export default NextStep;
