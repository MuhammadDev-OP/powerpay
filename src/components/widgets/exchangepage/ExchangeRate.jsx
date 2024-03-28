import React from 'react'
import Image from 'next/image'

const ExchangeRate = () => {
    return (
        <section>
            <div className="flex min-h-screen flex-col justify-center items-center md:gap-4">
                <div className='flex md:flex-row flex-col justify-center items-center w-full md:w-[95%] gap-5 mt-20'>
                    <div className='w-full md:w-1/3 flex flex-col gap-5'>
                        <div className='flex flex-col-2 gap-2 w-full h-full md:w-[95%] items-center justify-center '>
                            <div className='text-white text-center rounded-2xl px-5 py-8 border-2'>
                                <h1 className='text-xl font-[500]'>
                                    Exchange Rate
                                </h1>
                                <h1 className='text-3xl font-bold'>
                                    0.5%
                                </h1>
                            </div>
                            <div className='text-black bg-white text-center rounded-2xl px-5 py-10 border-2'>
                                <h1 className='text-xl font-[500]'>
                                    Pay Fee
                                </h1>
                                <h1 className='text-md font-[500]'>
                                    only when sending money overseas
                                </h1>
                            </div>
                        </div>
                        <div className=' bg-primary-blue text-white text-center flex flex-col gap-5 items-center justify-center rounded-2xl px-5 py-16'>
                            <p className='text-xl font-[500] px-4'>
                                Keep money in any currency with no restrictions or fees
                            </p>
                        </div>
                    </div>
                    <div className='border-2 h-full md:text-left text-center border-white w-full md:w-[60%] text-white flex flex-col gap-1 rounded-2xl
                     pl-8 pt-10'>
                        <p className='text-3xl  md:text-2xl font-[200] text-white '>
                            Get'n Cost Incoming
                        </p>
                        <p className='text-3xl  md:text-2xl font-[200] text-white '>
                            transaction from
                        </p>
                        <p className='text-3xl  md:text-3xl font-[600] text-white '>
                            150+
                        </p>
                        <p className='text-3xl  md:text-2xl font-[200] text-white '>
                            Countries
                        </p>
                        <div className='flex items-center justify-center md:items-end md:justify-end w-full mt-4 md:mt-2'>
                            <Image src={'/exchangepageelements/world.svg'} alt='' width={1080} height={1080} className='w-56' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ExchangeRate