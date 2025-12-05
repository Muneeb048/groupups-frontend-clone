import React from "react";
import ChatNavbar from "./ChatNavbar";
import ChatMessages from "./ChatMessages";
import ChatFooter from "./ChatFooter";
import type { ChatContentProps } from "../types/chatPage";

const ChatContent: React.FC<ChatContentProps> = ({
  messages,
  isLoading,
  inputValue,
  onInputChange,
  onSubmit,
  onOpenRepPopup,
  messagesEndRef,
}) => {
  return (
    <>
      <ChatNavbar onOpenRepPopup={onOpenRepPopup} />
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />
      <ChatFooter
        inputValue={inputValue}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default ChatContent;

