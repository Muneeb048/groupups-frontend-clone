import React from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import type { Message } from "../types/chat";
import Skeleton from "./Skeleton";

interface ChatMessageProps {
  message?: Message;
  isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isLoading = false,
}) => {
  const isBot = message?.sender === "bot";
  const { displayedText, isTyping } = useTypingEffect(
    isBot && message ? message.text : "",
    30
  );

  if (isLoading) {
    return (
      <div className="flex justify-start mb-4">
        <div className="max-w-[80%] px-5 py-3 rounded-2xl bg-white/5">
          <div className="space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
    );
  }

  if (!message) return null;

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
