import React from "react";
import type { EquipmentButtonProps } from "../types";
import Skeleton from "./Skeleton";

const EquipmentButton: React.FC<EquipmentButtonProps> = ({
  label,
  selected,
  onClick,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="px-4 py-4 rounded-lg border border-gray-800 flex items-center justify-center min-h-[3rem]">
        <Skeleton className="h-5 w-24 rounded-md" />
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-4 rounded-lg border transition-all duration-300 text-white
        ${
          selected
            ? "border-teal-600 "
            : "border-gray-800  hover:border-teal-600"
        }
      `}
    >
      {label}
    </button>
  );
};

export default EquipmentButton;
