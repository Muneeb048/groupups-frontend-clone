import { useState } from "react";

import animationSvg from "../assets/CircleVenn.json";
import LottiePlayer from "./LottiePlayer";
import { useChat } from "../hooks/useChat";
import { useResizablePanel } from "../hooks/useResizablePanel";
import { useScrollToBottom } from "../hooks/useScrollToBottom";
import ChatContent from "./ChatContent";
import ResizableDivider from "./ResizableDivider";
import RepPopup from "./RepPopup";
import ChatScrollbarStyles from "./ChatScrollbarStyles";

const ChatPage: React.FC = () => {
  const { messages, inputValue, handleInputChange, handleSubmit, isLoading } =
    useChat();
  const [isRepPopupOpen, setIsRepPopupOpen] = useState(false);
  const { leftWidth, containerRef, handleMouseDown } = useResizablePanel({
    defaultWidth: 55,
    minWidth: 30,
    maxWidth: 70,
  });
  const messagesEndRef = useScrollToBottom([messages, isLoading]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#041018] flex relative">
      {/* Desktop: Resizable chat panel */}
      <div
        className="hidden lg:flex flex-col h-screen transition-none"
        style={{ width: `${leftWidth}%` }}
      >
        <div className="flex flex-col border-r border-teal-950/70 h-screen flex-1">
          <ChatContent
            messages={messages}
            isLoading={isLoading}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            onOpenRepPopup={() => setIsRepPopupOpen(true)}
            messagesEndRef={messagesEndRef}
          />
        </div>
      </div>

      {/* Resizable divider */}
      <ResizableDivider onMouseDown={handleMouseDown} />

      {/* Desktop: Animation panel - fixed 40% width (original size) */}
      <div
        className="hidden lg:flex h-screen bg-[#041018] ml-6 transition-none flex-shrink-0"
        style={{ width: "41%" }}
      >
        <LottiePlayer animationData={animationSvg} />
      </div>

      {/* Mobile: Full width chat */}
      <div className="lg:hidden w-full flex flex-col border-r border-teal-950/70 h-screen">
        <ChatContent
          messages={messages}
          isLoading={isLoading}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onOpenRepPopup={() => setIsRepPopupOpen(true)}
          messagesEndRef={messagesEndRef}
        />
      </div>

      <RepPopup
        isOpen={isRepPopupOpen}
        onClose={() => setIsRepPopupOpen(false)}
      />

      <ChatScrollbarStyles />
    </div>
  );
};

export default ChatPage;
