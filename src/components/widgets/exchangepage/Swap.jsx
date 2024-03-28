import React from 'react'
import Image from 'next/image'

const Swap = () => {
    return (
        <section>
            <div className='md:mx-20 mt-32 md:my-20 px-2 md:px-0 rounded-3xl h-[70vh]  text-white flex flex-col items-center justify-center text-center relative'>
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
                        Swap Between 15+ Cryptocurrencies and Fiat in Seconds
                    </h1>
                    <p className='pt-3'>
                        Buy and sell crypto seamlessly with fast transactions and real-time prices.
                    </p>
                    <button
                        className="py-3 mt-10 px-6 
        
          bg-blue-600
          text-white hover:bg-blue-500
          transition-colors duration-300
          rounded-md md:w-[404px]"

                    >
                        Swap Now
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Swap