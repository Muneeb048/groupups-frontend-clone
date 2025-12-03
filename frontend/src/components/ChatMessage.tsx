import React from "react";
import { useTypingEffect } from "../hooks/useTypingEffect"; // Adjust path as needed
import type { Message } from "../types/chat";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === "bot";
  const { displayedText, isTyping } = useTypingEffect(
    isBot ? message.text : "",
    30
  );

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`max-w-[80%] px-5 py-3 rounded-2xl ${
          isBot ? "bg-white/5 text-white" : "bg-teal-600 text-white"
        }`}
      >
        <p className="text-base leading-relaxed">
          {isBot ? displayedText : message.text}
          {isBot && isTyping && (
            <span className="inline-block w-1 h-4 ml-1 bg-white animate-pulse" />
          )}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
