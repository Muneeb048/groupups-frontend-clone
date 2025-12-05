import React from "react";
import Skeleton from "./Skeleton";
import type { IndustryCardProps } from "../types";

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  icon,
  onClick,
  isLoading = false,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <button
        onClick={isLoading ? undefined : onClick}
        className="border border-[#187775]/30 cursor-pointer rounded-lg px-28 py-4 pt-14 flex flex-col items-center justify-end gap-6 hover:border-[#4aa6a4] transition-colors relative"
      >
        {/* Icon (Skeleton or real) */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {isLoading ? (
            <Skeleton className="w-12 h-12 rounded-md" />
          ) : (
            <div className="w-full h-full object-contain">{icon}</div>
          )}
        </div>

        {/* Title (Skeleton or real) */}
        {isLoading ? (
          <Skeleton className="h-4 w-24 rounded-md" />
        ) : (
          <span className="text-white">{title}</span>
        )}
      </button>
    </div>
  );
};

export default IndustryCard;
