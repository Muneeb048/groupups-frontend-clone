import { useState } from "react";
import type { Message, ChatState } from "../types/chat";
export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: "1",
        text: "Let's start by getting your name, please.",
        sender: "bot",
        timestamp: new Date(),
      },
    ],
    inputValue: "",
  });

  const handleInputChange = (value: string) => {
    setState((prev) => ({ ...prev, inputValue: value }));
  };

  const handleSubmit = () => {
    if (state.inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: state.inputValue,
        sender: "user",
        timestamp: new Date(),
      };

      setState((prev) => ({
        messages: [...prev.messages, newMessage],
        inputValue: "",
      }));
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for sharing! This is a mock response.",
          sender: "bot",
          timestamp: new Date(),
        };
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botResponse],
        }));
      }, 1000);
    }
  };

  return {
    messages: state.messages,
    inputValue: state.inputValue,
    handleInputChange,
    handleSubmit,
  };
};
