import React from "react";
import type { IndustryCardProps } from "../types/index.ts";

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  icon,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <button
        onClick={onClick}
        className="border border-[#187775]/30 cursor-pointer rounded-lg px-28 py-4 pt-14 flex flex-col items-center justify-end gap-6 hover:border-[#4aa6a4] transition-colors relative"
      >
        <div className="relative w-12 h-12">
          <div
            className=" w-full h-full object-contain transition-opacity duration-300 opacity-100
"
          >
            {icon}
          </div>
        </div>
        <span className="text-white">{title}</span>
      </button>
    </div>
  );
};
export default IndustryCard;
