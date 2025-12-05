import React from "react";
import ChatInput from "./ChatInput";
import type { ChatFooterProps } from "../types/chatPage";

const ChatFooter: React.FC<ChatFooterProps> = ({
  inputValue,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div className="px-4 pb-4 flex-shrink-0">
      <div className="max-w-2xl mx-auto">
        <ChatInput
          value={inputValue}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />
        <div className="mt-4 text-center text-xs text-gray-400">
          Our{" "}
          <a
            href="#"
            className="text-[#4aa6a4] hover:text-white transition-colors"
          >
            Privacy policy
          </a>
          {" & "}
          <a
            href="#"
            className="text-[#4aa6a4] hover:text-cyan-300 transition-colors"
          >
            Terms of use
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;

