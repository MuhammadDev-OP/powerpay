import React from 'react'
import Image from 'next/image'

const SwapChoose = () => {
    const data = [
        {
            img: '/exchangepageelements/tags.svg',
            title: 'Best market rates',
            text: 'Generate daily passive income effortlessly with our range of Earn products. Start earning and growing your wealth today.'

        },
        {
            img: '/exchangepageelements/coins.svg',
            title: 'Diverse range of assets',
            text: 'Our in-house DeFi team seeks out opportunities in the Web3 space and conducts thorough due diligence using a proprietary risk model.'

        },
        {
            img: '/exchangepageelements/moneybag.svg',
            title: 'Earn on your own terms',
            text: 'Stay flexible or earn all year round with with Earn+365 1-year commitment. Select from a range of products that suit your risk profile.'

        },
    ]
    return (
        <section>
            <div className='flex flex-col justify-center items-center py-40 relative'>
                <div className='w-[1100px] mt-[10rem] shadow-xl shadow-primary-blue/30 -right-[40rem] absolute h-[1100px] rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#000000]'>

                </div>
                <div className='z-30'>
                    <h1 className='text-3xl text-center md:text-5xl font-[500] text-white'>
                        Why swap on Powerpay App?
                    </h1>
                    <div className='w-full flex md:flex-row flex-col items-center gap-5 py-20'>

                        {
                            data.map((e) => (
                                <div key={e} className='relative max-w-[470px] min-h-[380px] h-full bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] flex flex-col justify-center items-center text-center  px-6 rounded-3xl gap-5'>
                                    <div className='absolute max-h-16 h-full w-full z-[1] max-w-16 rounded-lg bg-primary-blue/20 -mt-[12rem] ml-[-3rem]'>
                                    </div>
                                    <div className={` bg-primary-blue z-20 h-16 w-16 rounded-lg flex items-center justify-center`}>
                                        <Image src={e.img} alt={e} height={1080} width={1080} className='w-10 object-contain' />
                                    </div>
                                    <h2 className='text-[20px] font-[500]'>
                                        {e.title}
                                    </h2>
                                    <p>
                                        {e.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SwapChoose