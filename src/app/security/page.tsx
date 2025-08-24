import FAQ from '@/components/Home/faq'
import Protect from '@/components/Security/protect'
import React from 'react'

const Security = () => {
  return (
    <div className='mt-[4rem] md:mt-[6.5rem] mb-[10rem]'>
        <section className="hidden md:block relative w-full h-fit bg-[#1c1c1c] rounded-[1.5rem]">
        <img
          src="/Abstract-Design-i.png"
          alt=""
          className="absolute top-0 right-0"
        />
        <div className="relative w-full px-8 py-8 flex items-start">
          <div className="w-[50%] bg-[#1a1a1a] rounded-tl-[1rem] rounded-bl-[1rem] rounded-br-[3.5rem] px-10 py-10 2xl:px-18 2xl:py-18 z-50 left-0">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
              Your Security is Our <span className="text-[#CAFF33]">Top Priority </span>
            </h1>

            <h1 className="text-base 2xl:text-[18px] pt-5 text-[#B3B3B3]">
              At GeekPay, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
            </h1>
          </div>

          <img
            src="/Image.png"
            alt=""
            className=" w-[65%] z-10 rounded-[1rem] right-0 ml-[-15%]"
          />
        </div>
      </section>

      <section className="block md:hidden relative w-[97%] h-fit mx-auto md:mx-0 md:w-full bg-[#1C1C1C] rounded-[1.5rem] ">
        <img
          src="/Abstract-Design-i.png"
          alt=""
          className="absolute top-0 right-0 w-[35%] h-[35%]"
        />
        <div className="relative w-full h-fit px-3 py-3 flex items-start flex-wrap">
          <img src="/Image.png" alt="" className="mr-8 w-full z-10 rounded-[1rem]" />
        
          <div className=" mt-[-10%] w-full bg-[#1a1a1a] rounded-[1.6rem] px-6.5 py-6.5 text-center 2xl:px-18 2xl:py-18 z-50 ">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
              Your Security is Our <span className="text-[#CAFF33]">Top Priority </span>
            </h1>

            <h1 className="text-base 2xl:text-[18px] pt-5 text-[#B3B3B3]">
              At GeekPay, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
            </h1>
          </div>
        </div>
      </section>


      <Protect />

      <FAQ />
    </div>
  )
}

export default Security