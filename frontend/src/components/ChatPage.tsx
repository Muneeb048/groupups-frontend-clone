import { useRef, useEffect } from "react";

import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import animationSvg from "../assets/CircleVenn.json";

import { useChat } from "../hooks/useChat";
import Lottie from "lottie-react";

const ChatPage: React.FC = () => {
  const { messages, inputValue, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen bg-[#041018] flex">
      <div className="w-full lg:w-[55%] flex flex-col border-r border-teal-950/70 h-screen">
        <nav className="bg-[#041018] sticky  z-50 w-full px-8 py-3 flex items-center justify-between ">
          <h1 className="text-3xl font-bold text-white">
            group<span className=" text-[#4aa6a4]">ups</span>
          </h1>

          <button className="flex items-center gap-2 mt-1 px-2 py-2 bg-[#191919] rounded-full border border-1 border-[#696969] transition-colors">
            <img
              src="https://i.pravatar.cc/100" // random avatar
              alt="Rep"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-white text-sm">Your Rep</span>
          </button>
        </nav>
        <div className="flex-1 overflow-y-auto mt-2 px-6 py-6 scrollbar-custom">
          <div className="max-w-2xl mx-auto">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="px-4 pb-4 flex-shrink-0">
          <div className="max-w-2xl mx-auto">
            <ChatInput
              value={inputValue}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
            />

            <div className="mt-4 mr-1 text-center text-xs text-gray-400">
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
      </div>
      <div className="hidden lg:flex lg:w-[40%] ml-8 items-center justify-center bg-[#041018]">
        <Lottie animationData={animationSvg} loop autoplay />
      </div>

      <style>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
};
export default ChatPage;
