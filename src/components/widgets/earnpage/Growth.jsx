import Image from 'next/image'
import React from 'react'

const Growth = () => {
    return (
        <section>
            <div className="flex min-h-screen flex-col justify-center items-center md:gap-4">
                <h1 className="text-3xl mt-20 md:mt-52 text-center md:text-5xl font-[500] text-white">
                    Compounded growth on your crypto holdings
                </h1>
                <div className='flex md:flex-row flex-col justify-center  w-full md:w-[80%] gap-5 mt-20'>
                    <div className='w-full md:w-1/3 flex flex-col gap-5'>
                        <div className='bg-primary-blue text-white text-center flex flex-col gap-5 items-center justify-center rounded-2xl px-5 py-16'>
                            <Image src={'/earnpageelements/Calendar.svg'} alt='' width={1080} height={1080} className='w-16' />
                            <p className='text-xl font-[500]'>
                                Compound Monthly
                                Earnings
                            </p>
                        </div>
                        <div className='border-2 border-white text-white text-center flex flex-col gap-5 items-center justify-center rounded-2xl px-5 py-16'>
                            <Image src={'/earnpageelements/growth.svg'} alt='' width={1080} height={1080} className='w-16' />
                            <p className='text-xl font-[500] px-4'>
                                Compound Is A
                                Growth Icon
                            </p>
                        </div>


                    </div>
                    <div className='border-2 h-full md:text-left text-center border-white w-full md:w-[75%] text-white flex flex-col gap-1  rounded-2xl px-10 py-14'>
                        <p className='text-3xl  md:text-5xl font-[500] text-white '>
                        Find out much you 
                        </p>
                        <p className='text-3xl  md:text-5xl font-[500] text-white '>
                        could earn with
                        </p>
                        <p className='text-3xl  md:text-5xl font-[500] text-white '>
                        compounded earnings
                        </p>
                        <p className='text-3xl  md:text-5xl font-[500] text-white '>
                        using our compound
                        </p>
                        <p className='text-3xl  md:text-5xl font-[500] text-white '>
                        calculator
                        </p>
                        <div className='flex items-center justify-center md:items-end md:justify-end w-full mt-4 md:mt-2'>
                        <Image src={'/earnpageelements/Calculator.svg'} alt='' width={1080} height={1080} className='w-32' />
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Growth