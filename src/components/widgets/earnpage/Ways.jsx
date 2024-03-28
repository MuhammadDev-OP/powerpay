import Image from "next/image";
import Link from "next/link";

const Ways = () => {
    const data = [
        {
            img: '/earnpageelements/tee.svg',
            title: 'USDT',
            link: '/earn',
            off: '11'
        },
        {
            img: '/earnpageelements/usdc.svg',
            title: 'USDC',
            link: '/earn',
            off: '11'
        },
        {
            img: '/earnpageelements/tusd.svg',
            title: 'TUSD',
            link: '/earn',
            off: '11'
        },
        {
            img: '/earnpageelements/dai.svg',
            title: 'DAI',
            link: '/earn',
            off: '11'
        },
    ]
    return (
        <section>
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl md:mt-40 text-center md:text-5xl font-[500] text-white">
                    Ways to Start Earning
                </h1>
                <button
                    className=" mt-10 w-[144px] h-[47px] text-black z-20 transition-all ease-linear duration-300 font-semibold border bg-[#D9D9D9] rounded-md"
                >
                    Smart Earn
                </button>
                <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full items-center justify-center gap-7">
                    {
                        data.map((e) => (
                            <div key={e} className="flex flex-col p-3 rounded-lg bg-[#161616] w-full">
                                <div className="flex items-center w-full text-white justify-between pb-4 border-b border-[#777]/40">
                                    <div className="flex items-center gap-2">
                                        <Image src={e.img} alt="" width={1080} height={1080} className="w-10" />
                                        <p>
                                            {e.title}
                                        </p>
                                    </div>
                                    <Link href={e.link}>
                                        <Image src={'/earnpageelements/arrow.svg'} alt="" width={1080} height={1080} className="w-4" />
                                    </Link>
                                </div>
                                <div className="flex items-center w-full justify-between pt-3">
                                    <p className="bg-[#FFF0F0] font-bold rounded-xl p-[10px] text-[#FE4331] text-[12px]">
                                        Upto <span> {e.off}%</span>
                                    </p>
                                    <Image src={'/earnpageelements/graph.svg'} alt="" width={1080} height={1080} className="w-14" />

                                </div>
                            </div>
                        ))
                    }

                </div>
                <button
                    className="py-3 mt-10 px-6 
            font-semibold
              bg-blue-500
              text-white hover:bg-blue-600
              transition-colors duration-300
              rounded-md md:w-[380px]"

                >
                    Start Earning
                </button>
            </div>
        </section>
    );
};

export default Ways;
