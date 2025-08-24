import React from "react";

const Benefits = () => {
  return (
    <div className="w-full mt-[4rem] md:mt-[6rem]">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[70%] left-0">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Our <span className="text-[#CAFF33]">Benefits</span>
        </h1>
        <h1 className="text-base pt-3.5 text-[#B3B3B3] text-center md:text-left">
          At GeekPay, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </h1>
      </div>

      <div className="w-full flex items-start flex-wrap mt-[4rem]">
        <div className="w-[97%] mx-auto md:mx-0 md:w-[50%] border-b border-b-[#262626] pb-5 md:pb-0 pt-5 md:pt-0 md:border-b-0 border-dashed h-fit md:border-r border-r-[#262626]">
          <div className="w-full md:w-[96%] px-8 py-11 md:px-11 md:py-16 bg-[#1C1C1C] rounded-tl-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-br-[3rem]">
            <div className="flex items-center gap-4">
              <img src="/Icon-Container-5.png" alt="" className="" />
              <h1 className="text-xl md:text-2xl ">Competitive Compensation</h1>
            </div>

            <h1 className="text-base md:text-[18px] pt-3.5 text-[#B3B3B3]">
              We provide a competitive salary package that recognizes the skills
              and expertise of our employees. GeekPay believes in rewarding
              exceptional performance and offering opportunities for financial
              growth.
            </h1>
          </div>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[50%] border-b border-b-[#262626] pb-5 md:pb-0 pt-5 md:pt-0 md:border-b-0 border-dashed h-fit md:flex md:justify-end">
          <div className="w-full md:w-[96%] px-8 py-11 md:px-11 md:py-14 bg-[#1C1C1C] rounded-tl-[1rem] rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-[1rem]">
            <div className="flex items-center gap-4">
              <img src="/Icon-Container-11.png" alt="" className="" />
              <h1 className="text-xl md:text-2xl ">Health and wellness</h1>
            </div>

            <h1 className="text-base md:text-[18px] pt-3.5 text-[#B3B3B3]">
              We prioritize the health and well-being of our employees by
              providing comprehensive medical, dental, and vision insurance
              plans. We also offer wellness programs, gym memberships, and
              resources to support a healthy lifestyle.
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[0.1vh] mt-[2%] mb-[2%] hidden md:block border-t border-dashed border-t-[#262626]"></div>

      <div className="w-full flex items-start flex-wrap">
        <div className="w-[97%] mx-auto md:mx-0 md:w-[50%] border-b border-b-[#262626] pb-5 md:pb-0 pt-5 md:pt-0 md:border-b-0 border-dashed h-fit md:border-r border-r-[#262626]">
          <div className="w-full md:w-[96%] px-8 py-11 md:px-11 md:py-18 bg-[#1C1C1C] rounded-tl-[1rem] rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-[1rem]">
            <div className="flex items-center gap-4">
              <img src="/Icon-Container-12.png" alt="" className="" />
              <h1 className="text-xl md:text-2xl ">Retirement Planning</h1>
            </div>

            <h1 className="text-base md:text-[18px] pt-3.5 text-[#B3B3B3]">
              GeekPay is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.
            </h1>
          </div>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[50%] pb-5 md:pb-0 pt-5 md:pt-0 md:border-b-0 border-dashed h-fit md:flex md:justify-end">
          <div className="w-full md:w-[96%] px-8 py-11 md:px-11 md:py-14 bg-[#1C1C1C] rounded-tl-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-br-[3rem]">
            <div className="flex items-center gap-4">
              <img src="/Icon-Container-13.png" alt="" className="" />
              <h1 className="text-xl md:text-2xl ">Work-Life Balance</h1>
            </div>

            <h1 className="text-base md:text-[18px] pt-3.5 text-[#B3B3B3]">
              We understand the importance of maintaining a healthy work-life balance. GeekPay offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
