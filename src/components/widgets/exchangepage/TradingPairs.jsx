import React from 'react'
import Image from 'next/image'

const TradingPairs = () => {
    return (
        <div className="flex justify-center">
            <div className="relative z-10 mx-auto mt-28">
                <div>
                    <Image src={"/exchangepageelements/rectangle.svg"} width={470} height={208} className="lg:max-w-[470px] max-w-[350px]" alt="image" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="absolute top-[70px] lg:top-[80px] w-[373px] lg:w-[680px] h-[480px] lg:h-[680px] left-[-11px] lg:left-[-100px] bg-black flex flex-col text-white border-4 border-white p-4 lg:p-16 rounded-lg">
                        <div>
                            <h1>
                                You Sell:
                            </h1>
                            <div className='flex flex-row bg-slate-900 border-2 border-white mt-3 rounded-lg p-2 items-center'>
                                <div className="flex-grow">
                                    1000
                                </div>
                                <div className='flex items-center'>
                                    <div className='text-right mr-2'>
                                        EUR
                                    </div>
                                    <Image src="/exchangepageelements/eur.svg" alt="EUR" width="20" height="20" className='w-5' />
                                    <Image src="/exchangepageelements/dropdown.svg" alt="EUR" width="20" height="20" className='w-10 mx-3' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src="/exchangepageelements/line.svg" alt="EUR" width="20" height="20" className='w-12 h-[180px] lg:h-[267px]' />
                        </div>
                        <ul className="list-disc ml-[2.3rem] lg:ml-10 mt-3 absolute top-[100px] lg:top-[175px]">
                            <li className='my-8 text-sm lg:text-xl'>5.3 USD <span className="text-gray-500 ml-6">Platform Fee</span></li>
                            <li className='my-8 text-sm lg:text-xl'>5.3 USD <span className="text-gray-500 ml-6">Platform Fee</span></li>
                            <li className='my-8 text-sm lg:text-xl'>5.3 USD <span className="text-gray-500 ml-6">Platform Fee</span></li>
                        </ul>


                        <div className=''>
                            <h1>
                                You Receive:
                            </h1>
                            <div className='flex flex-row bg-slate-900 border-2 border-white mt-3 rounded-lg p-2 items-center'>
                                <div className="flex-grow">
                                    1000
                                </div>
                                <div className='flex items-center'>
                                    <div className='text-right mr-2'>
                                        USDT
                                    </div>
                                    <Image src="/exchangepageelements/usdt.svg" alt="EUR" width="20" height="20" className='w-5' />
                                    <Image src="/exchangepageelements/dropdown.svg" alt="EUR" width="20" height="20" className='w-10 mx-3' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <button
                        className="py-2 px-6 
              absolute top-[479px] lg:top-[680px] left-[14px] lg:left-[80px] w-80
              text-center
              bg-blue-500
              text-white hover:bg-blue-600
              transition-colors duration-300
              rounded-md"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div >
    )
}

export default TradingPairs