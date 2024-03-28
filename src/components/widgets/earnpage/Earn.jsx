import Image from 'next/image'
import React from 'react'

const Earn = () => {
    return (
        <section>
            <div className='md:mx-20 mt-32 md:my-20 border-2 px-2 md:px-0 rounded-3xl h-[70vh] border-white text-white flex flex-col items-center justify-center text-center relative'>
                <div className='absolute left-4 md:left-24 top-28 md:top-20'>
                    <Image src={'/earnpageelements/zee.png'} alt='zee' width={1080} height={1080} className='w-8 md:w-16 object-contain ' />

                </div>
                <div className='absolute left-4 -mt-[6rem] md:-mt-0 md:left-10'>
                    <Image src={'/earnpageelements/btc.png'} alt='zee' width={1080} height={1080} className='w-8 md:w-16 object-contain ' />

                </div>
                <div className='absolute left-4 md:left-40 bottom-20 md:bottom-28'>
                    <Image src={'/earnpageelements/usdc.png'} alt='zee' width={1080} height={1080} className='w-20 object-contain ' />

                </div>
                <div className='absolute md:right-52 top-16'>
                    <Image src={'/earnpageelements/tee.png'} alt='zee' width={1080} height={1080} className='w-10 md:w-16 object-contain ' />

                </div>
                <div className='absolute right-4 md:right-16 top-16'>
                    <Image src={'/earnpageelements/eth.png'} alt='zee' width={1080} height={1080} className='w-16 md:w-24 object-contain ' />

                </div>
                <div className='absolute right-10 md:right-40 bottom-44'>
                    <Image src={'/earnpageelements/transfer.png'} alt='zee' width={1080} height={1080} className='w-10 object-contain ' />

                </div>
                <div className='z-30'>
                    <h1 className='text-3xl md:text-5xl font-[500]'>
                        Earn up to 25% APY on your crypto
                    </h1>
                    <p className='pt-3'>
                        Enjoy daily passive income on 15+ crypto assets, on your own terms.
                    </p>
                    <button
                        className="py-3 mt-10 px-6 
            
              bg-blue-600
              text-white hover:bg-blue-500
              transition-colors duration-300
              rounded-md md:w-[404px]"

                    >
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Earn