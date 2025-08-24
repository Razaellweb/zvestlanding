import Mission from '@/components/About/mission'
import Press from '@/components/About/press'
import React from 'react'

const About = () => {
  return (
    <div className="mt-[4rem] md:mt-[6.5rem] mb-[10rem]">
        <section className="hidden md:block relative w-full h-fit bg-[#1c1c1c] rounded-[1.5rem]">
        <img
          src="/Abstract-Design-i.png"
          alt=""
          className="absolute top-0 right-0"
        />
        <div className="relative w-full px-8 py-8 flex items-start">
          <div className="w-[50%] bg-[#1a1a1a] rounded-tl-[1rem] rounded-bl-[1rem] rounded-br-[3.5rem] px-10 py-10 2xl:px-18 2xl:py-18 z-50 left-0">
            <h1 className="text-base 2xl:text-[18px] text-[white]">
                Welcome to GeekPay
            </h1>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
              Where Banking Meets <span className="text-[#CAFF33]">Excellence! </span>
            </h1>

            <h1 className="text-base 2xl:text-[18px] pt-5 text-[#B3B3B3]">
              At GeekPay, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
            </h1>
          </div>

          <img
            src="/Image-1.png"
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
          <img src="/Image-1.png" alt="" className="mr-8 w-full z-10 rounded-[1rem]" />
        
          <div className=" mt-[-10%] w-full bg-[#1a1a1a] rounded-[1.6rem] px-6.5 py-6.5 text-center 2xl:px-18 2xl:py-18 z-50 ">
            <h1 className="text-base 2xl:text-[18px] text-[white]">
                Welcome to GeekPay
            </h1>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
              Where Banking Meets <span className="text-[#CAFF33]">Excellence! </span>
            </h1>

            <h1 className="text-base 2xl:text-[18px] pt-5 text-[#B3B3B3]">
              At GeekPay, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
            </h1>
          </div>
        </div>
      </section>

      <Mission />

      <Press />
    </div>
  )
}

export default About