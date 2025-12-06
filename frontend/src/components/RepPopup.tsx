import { X } from "lucide-react";

interface RepPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RepPopup({ isOpen, onClose }: RepPopupProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#040f18] rounded-2xl w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[432px] mt-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-3 border-b border-white/10">
          <h2 className="text-white text-sm font-medium">Your Rep</h2>
          <button onClick={onClose} className="text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-9 pb-6 sm:pb-8 md:pb-6 flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150"
            alt="Yasin Abbak"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-22 lg:h-20 rounded-full object-cover mb-1 sm:mb-2 md:mb-1"
          />

          <h3 className="text-white text-lg sm:text-xl font-semibold">
            Yasin Abbak
          </h3>

          <a
            href="mailto:yasin@groupups.com"
            className="text-gray-400 text-sm sm:text-base mb-2 hover:text-gray-300 transition-colors"
          >
            yasin@groupups.com
          </a>

          <a
            href="tel:+19193646741"
            className="flex items-center gap-2 mb-4 sm:mb-6 text-[#4AA6A4] text-sm sm:text-md hover:text-[#6bb0ff] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M4.66669 8.00004H11.3334M4.66669 5.33337H8.66669"
                stroke="#4AA6A4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 13.5267V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H5.30733C5.10749 11.3334 4.91021 11.3783 4.73007 11.4649C4.54994 11.5514 4.39157 11.6773 4.26667 11.8333L2.71267 13.776C2.66095 13.8408 2.59037 13.888 2.51069 13.9109C2.43101 13.9338 2.34617 13.9315 2.26791 13.9041C2.18964 13.8767 2.12182 13.8257 2.07382 13.7581C2.02583 13.6904 2.00003 13.6096 2 13.5267Z"
                stroke="#4AA6A4"
              ></path>
            </svg>
            <span>(919) 364-6741</span>
          </a>
        </div>
      </div>
    </div>
  );
}
