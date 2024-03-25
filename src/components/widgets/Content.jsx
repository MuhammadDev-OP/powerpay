import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';

const Content = () => {
    return (
        <>
            <main className='bg-[#0D0D0D] p-18'>
                <div className='relative'>
                    <Image src={"/contentElements/logos/image1.png"} width={147} height={160} className='absolute bg-no-repeat bg-cover bg-center bg-fixed left-36 top-[220px]' />
                    <Image src={"/contentElements/logos/image2.png"} width={147} height={160} className='absolute  bg-no-repeat bg-cover bg-center top-[80px] right-[100px]' />
                    <Image src={"/contentElements/logos/image3.png"} width={147} height={160} className='absolute  bg-no-repeat bg-cover bg-center right-[400px]' />
                </div>
                <Wrapper>
                    <div className='flex flex-col lg:flex-row justify-around py-20 px-2 gap-12 z-10'>
                        {/* Corrected the gradient classes */}
                        <div className='flex flex-col p-10 items-center text-center bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] rounded-2xl gap-y-4'>
                            <Image src={"/contentElements/time.png"} width={56} height={56} className='bg-[#1E66D0] p-2 rounded-lg shadow-xl' style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }} />
                            <h1 className='text-2xl font-semibold'>
                                Buy Crypto in Seconds
                            </h1>
                            <p className='text-sm font-extralight'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className='flex flex-col p-10 items-center text-center bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] rounded-2xl gap-y-4'>
                            <Image src={"/contentElements/stats1.png"} width={56} height={56} className='bg-[#1E66D0] p-2 rounded-lg shadow-xl' style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }} />
                            <h1 className='text-2xl font-semibold'>
                                Earn Up to 16% Interests
                            </h1>
                            <p className='text-sm font-extralight'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className='flex flex-col p-10 items-center text-center bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] rounded-2xl gap-y-4'>
                            <Image src={"/contentElements/crypto.png"} width={56} height={56} className='bg-[#1E66D0] p-2 rounded-lg shadow-xl' style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }} />
                            <h1 className='text-2xl font-semibold'>
                                Exchange with 0 Fee                             </h1>
                            <p className='text-sm font-extralight'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </main>
        </>
    );
};

export default Content;
