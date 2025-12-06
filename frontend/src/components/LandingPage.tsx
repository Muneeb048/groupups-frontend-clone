import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";
import Skeleton from "./Skeleton";
import type { LandingPageProps } from "../types";

const LandingPage: React.FC<LandingPageProps> = ({
  onGetStarted,
  isLoading: externalLoading = false,
}) => {
  const [internalLoading, setInternalLoading] = useState(true);

  // Show skeleton on initial load for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setInternalLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading = externalLoading || internalLoading;

  return (
    <div className="min-h-screen bg-[#041018] flex flex-col relative">
      <Navbar />

      <div className="flex-1 flex">
        <div className="w-full lg:w-[40%] flex flex-col justify-center lg:justify-between lg:px-12 px-6 pt-4 lg:pt-[4.9rem] mt-5 text-left">
          <div>
            {isLoading ? (
              <>
                <div className="mb-6">
                  <Skeleton className="h-8 md:h-10 lg:h-10 w-full mb-3" />
                  <Skeleton className="h-8 md:h-10 lg:h-10 w-3/4" />
                </div>
                <div className="mb-8">
                  <Skeleton className="h-6 md:h-7 lg:h-8 w-2/3" />
                </div>
                <div className="mb-8">
                  <Skeleton className="h-12 w-32 rounded-full" />
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {!isLoading && (
            <p className="hidden lg:block text-[#ffffff69] text-center pb-8 text-sm">
              This should take ~5 minutes.
            </p>
          )}
        </div>

        <div className="hidden lg:flex w-full lg:w-[60%] items-center justify-center bg-[#000000]/20">
          <RightPanel />
        </div>
      </div>

      {isLoading ? (
        <div className="lg:hidden text-center py-4">
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      ) : (
        <p className="lg:hidden text-[#ffffff69] text-center text-sm py-4">
          This should take ~5 minutes.
        </p>
      )}
    </div>
  );
};
export default LandingPage;
