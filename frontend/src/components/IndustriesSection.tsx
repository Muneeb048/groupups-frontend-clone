import React from "react";
import type { IndustrySectionProps } from "../types";
import IndustryCard from "./IndustryCard";

const IndustriesSection: React.FC<IndustrySectionProps> = ({
  selectedIndustry,
  onSelectIndustry,
  fadeIn,
  isLoading = false,
}) => {
  return (
    <section
      className={`w-full py-4 px-14 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="px-4 text-center md:text-left md:px-16 text-white/80 text-lg mb-8 max-w-4xl mx-auto">
        Select your industry first
      </h3>
      {isLoading ? (
        <>
          <div className="max-w-3xl mt-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <IndustryCard isLoading />
            <IndustryCard isLoading />
            <IndustryCard isLoading />
          </div>
        </>
      ) : (
        <>
          <div className="max-w-3xl mt-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <IndustryCard
              title="Dental"
              icon={
                <img
                  src="https://groupups-staging.s3.eu-north-1.amazonaws.com/b0bbc939-d4f6-4af4-bf71-b1aa0e10d0cc.png"
                  alt="Dental"
                />
              }
              selected={selectedIndustry === "dental"}
              onClick={() => onSelectIndustry("dental")}
            />
            <IndustryCard
              title="Vision"
              icon={
                <img
                  alt="vision"
                  src="https://groupups-staging.s3.eu-north-1.amazonaws.com/c082c519-3fa3-4c18-a629-1e7ec71b3f00.png"
                />
              }
              selected={selectedIndustry === "vision"}
              onClick={() => onSelectIndustry("vision")}
            />
            <IndustryCard
              title="Veterinarian"
              icon={
                <img
                  alt="Veterinarian"
                  src="https://groupups-staging.s3.eu-north-1.amazonaws.com/e72679d6-3ab1-4adf-8cef-031cc9a4c5b6.png"
                />
              }
              selected={selectedIndustry === "veterinarian"}
              onClick={() => onSelectIndustry("veterinarian")}
            />
          </div>
        </>
      )}
    </section>
  );
};
export default IndustriesSection;
