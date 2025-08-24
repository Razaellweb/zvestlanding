import React from "react";

const Values = () => {
  return (
    <div className="w-full mt-[4rem] md:mt-[6rem]">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[70%] left-0">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Our <span className="text-[#CAFF33]">Values</span>
        </h1>
        <h1 className="text-base pt-3.5 text-[#B3B3B3] text-center md:text-left">
          At GeekPay, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </h1>
      </div>

      <div className="mt-[2.5rem] md:mt-[4rem] w-full flex items-center justify-between flex-wrap">
        <div className="w-[97%] mx-auto md:mx-0 md:w-[48.5%] px-4 pt-2.5 border-l border-l-[#CAFF33] mt-16 md:mt-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#4C4C4D]">
            Integrity
          </h1>

          <h1 className="text-base pt-5 text-[#B3B3B3]">
            We conduct ourselves with utmost honesty, transparency, and ethical
            behavior. We believe in doing what is right for our customers,
            colleagues, and stakeholders, even when faced with difficult
            choices.
          </h1>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[48.5%] px-4 pt-2.5 border-l border-l-[#CAFF33] mt-16 md:mt-0">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#4C4C4D]">
            Customer Centricity
          </h1>

          <h1 className="text-base pt-5 text-[#B3B3B3]">
            Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.
          </h1>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[48.5%] px-4 pt-2.5 border-l border-l-[#CAFF33] mt-16 2xl:mt-14">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#4C4C4D]">
            Collaboration
          </h1>

          <h1 className="text-base pt-5 text-[#B3B3B3]">
            We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.
          </h1>
        </div>

        <div className="w-[97%] mx-auto md:mx-0 md:w-[48.5%] px-4 pt-2.5 border-l border-l-[#CAFF33] mt-16 2xl:mt-14">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#4C4C4D]">
            Innovation
          </h1>

          <h1 className="text-base pt-5 text-[#B3B3B3]">
            We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Values;
