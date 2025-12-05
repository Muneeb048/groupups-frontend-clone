import { useState, useEffect } from "react";
import type { Message, ChatState } from "../types/chat";
export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    inputValue: "",
    isLoading: true,
  });

  // Show skeleton for initial bot message on load
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialMessage: Message = {
        id: "1",
        text: "Let's start by getting your name, please.",
        sender: "bot",
        timestamp: new Date(),
      };
      setState((prev) => ({
        ...prev,
        messages: [initialMessage],
        isLoading: false,
      }));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
        isLoading: true,
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
          isLoading: false,
        }));
      }, 1000);
    }
  };

  return {
    messages: state.messages,
    inputValue: state.inputValue,
    isLoading: state.isLoading || false,
    handleInputChange,
    handleSubmit,
  };
};
