import { useState, useRef, useEffect } from "react";

interface UseResizablePanelOptions {
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
}

export const useResizablePanel = ({
  defaultWidth = 55,
  minWidth = 30,
}: UseResizablePanelOptions = {}) => {
  const [leftWidth, setLeftWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);
  const [startWidth, setStartWidth] = useState(defaultWidth);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const newLeftWidth =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;

      const constrainedWidth = Math.max(
        minWidth,
        Math.min(startWidth, newLeftWidth)
      );
      setLeftWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      setStartWidth(leftWidth);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing, minWidth, leftWidth, startWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setStartWidth(leftWidth);
    setIsResizing(true);
  };

  return {
    leftWidth,
    isResizing,
    containerRef,
    handleMouseDown,
  };
};
