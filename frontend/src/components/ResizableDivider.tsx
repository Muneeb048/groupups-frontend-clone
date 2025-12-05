import React from "react";
import type { ResizableDividerProps } from "../types/chatPage";

const ResizableDivider: React.FC<ResizableDividerProps> = ({ onMouseDown }) => {
  return (
    <div
      className="hidden lg:block  bg-teal-950/70 hover:bg-teal-600/50 cursor-col-resize transition-colors z-10 relative flex-shrink-0"
      onMouseDown={onMouseDown}
    >
      <div className="absolute inset-y-0 -left-1 -right-1" />
    </div>
  );
};

export default ResizableDivider;

