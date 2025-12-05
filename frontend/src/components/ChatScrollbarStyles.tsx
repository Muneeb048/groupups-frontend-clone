import React from "react";

const ChatScrollbarStyles: React.FC = () => {
  return (
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
  );
};

export default ChatScrollbarStyles;

