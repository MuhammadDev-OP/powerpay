import React from 'react'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const Choose = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex m-20  flex-col justify-center items-center md:gap-4">
          <h1 className="text-3xl mt-5 text-center md:text-5xl font-[500] text-white">
            Why Choose Powerpay App
          </h1>
          <div className='flex md:flex-row flex-col justify-center w-full md:w-[80%] gap-5 mt-20'>
            <div className='w-full md:w-1/3 flex flex-col gap-5'>
              <div className='bg-primary-blue text-white text-center flex flex-col gap-5 items-center justify-center rounded-2xl px-5 py-16'>
                <Image src={'/otherElements/lock2.svg'} alt='sasd' width={1080} height={1080} className='w-16' />
                <p className='text-xl font-[500]'>
                  Security First
                </p>
              </div>
              <div className='border-2 border-white text-white text-center flex flex-col gap-5 items-center justify-center rounded-2xl px-5 py-16'>
                <Image src={'/otherElements/cryptoicon.svg'} alt='asd' width={1080} height={1080} className='w-16' />
                <p className='text-xl font-[500] px-4'>
                  Built to last
                </p>
              </div>


            </div>
            <div className='border-2 h-full md:text-left text-center border-white w-full md:w-[75%] text-white flex flex-col gap-1  rounded-2xl px-10 py-14'>
              <p className='text-3xl  md:text-5xl font-[500] text-white '>
                Licensed &
              </p>
              <p className='text-3xl  md:text-5xl font-[500] text-white '>
                Regulated Digital
              </p>
              <p className='text-3xl  md:text-5xl font-[500] text-white '>
                assets institution</p>
              <button
                className="font-[500] mt-12 w-[144px] h-[47px] text-white rounded-lg  border border-transparent hover:border-primary-blue hover:bg-transparent transition-all ease-linear duration-300 bg-primary-blue"
              >
                Learn More
              </button>

              <div className='flex items-center justify-center md:items-end md:justify-end w-full mt-4 md:mt-2'>
                <Image src={'/otherElements/lock.svg'} alt='asdas' width={1080} height={1080} className='w-48' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Choose;