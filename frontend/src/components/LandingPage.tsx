import React from "react";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";
import type { LandingPageProps } from "../types";

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-[#041018] flex flex-col">
      <Navbar />
      <div className="flex-1 flex ">
        <div className="w-full lg:w-[40%] flex flex-col justify-center lg:justify-start lg:px-12 px-6 pt-12 lg:pt-20  mt-5 text-left">
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-white mb-6 md:mb-6 leading-tight">
            <span className="block md:whitespace-nonwrap">
              Hi! I can help narrow down
            </span>
            <span className="block ">
              CBCT options for you without selling to you :)
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-2xl text-[#4aa6a4] mb-8">
            I'll ask you Qs to guide us. You can ask me Qs too.
          </p>
          <div className="flex items-start">
            <button
              onClick={onGetStarted}
              className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </button>
          </div>
          <p className="text-gray-500 text-center mt-14 text-sm ">
            This should take ~5 minutes.
          </p>
        </div>
        <div className="w-full lg:w-[60%] flex items-center justify-center bg-[#000000]/20 border-t lg:border-t-0  border-gray-800">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
