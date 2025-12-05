import React from "react";
import ChatMessage from "./ChatMessage";
import type { ChatMessagesProps } from "../types/chatPage";

const ChatMessages: React.FC<ChatMessagesProps & { messagesEndRef: React.RefObject<HTMLDivElement | null> }> = ({
  messages,
  isLoading,
  messagesEndRef,
}) => {
  return (
    <div className="flex-1 overflow-y-auto mt-2 px-6 py-6 scrollbar-custom">
      <div className="max-w-2xl mx-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <ChatMessage isLoading />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;

