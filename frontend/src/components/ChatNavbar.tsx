import React from "react";
import type { ChatNavbarProps } from "../types/chatPage";

const ChatNavbar: React.FC<ChatNavbarProps> = ({ onOpenRepPopup }) => {
  return (
    <nav className="bg-[#041018] sticky z-50 w-full px-8 py-[0.7rem] flex items-center justify-between">
      <h1 className="text-3xl font-bold text-white">
        group<span className="text-[#4aa6a4]">ups</span>
      </h1>
      <button
        onClick={onOpenRepPopup}
        className="flex items-center gap-2 mt-2 p-[0.5rem] py-2 bg-[#191919] rounded-full border border-1 border-[#696969] hover:border-[#888] transition-colors"
      >
        <img
          src="https://i.pravatar.cc/100"
          alt="Rep"
          className="mr-1 w-7 h-7 rounded-full object-cover"
        />
        <span className="text-white text-sm">Your Rep</span>
      </button>
    </nav>
  );
};

export default ChatNavbar;
