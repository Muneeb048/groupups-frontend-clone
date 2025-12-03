import React from "react";

import type { Message } from "../types/chat";

interface ChatMessageProps {
  message: Message;
}
const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`max-w-[80%] px-5 py-3 rounded-2xl ${
          isBot ? "bg-white/5 text-white" : "bg-teal-600 text-white"
        }`}
      >
        <p className="text-base leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};
export default ChatMessage;
