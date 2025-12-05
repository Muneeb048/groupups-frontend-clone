import React from "react";
import clsx from "clsx";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  // Extract background color from className or use default
  const hasCustomBg = className?.includes("bg-");
  
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-lg",
        !hasCustomBg && "bg-[#1a1f21]",
        className
      )}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(45, 54, 64, 0.4) 50%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default Skeleton;
