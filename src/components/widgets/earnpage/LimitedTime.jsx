import Image from "next/image";
import React from "react";

const Earn = () => {
    return (
        <section>
            <div className=" mt-32 md:my-20 border-2 px-2 md:px-0 rounded-3xl h-[70vh] border-white text-white flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    <Image
                        src={"/earnpageelements/Stopwatch.svg"}
                        alt=""
                        width={1080}
                        height={1080}
                        className="w-24"
                    />
                    <h1 className="text-3xl md:text-6xl font-[700]">Limited time offer</h1>
                    <p className="md:w-[48%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                    <button
                        className="py-3 mt-10 px-6 
              bg-blue-600
              text-white hover:bg-blue-500
              transition-colors duration-300
              rounded-md md:w-[404px] font-[600]"
                    >
                        Explore Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Earn;
