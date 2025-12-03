import { useRef } from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}
const ChatInput: React.FC<InputProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Write anything you want",
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={3}
        className="w-full  px-4 py-3 pr-12 bg-[#ffffff0d]/5 resize-none rounded-3xl text-white placeholder:text-[#ffffff]/19 focus:outline-none text-sm  transition-colors  overflow-y-auto scrollbar-thin"
        autoFocus
      />
      <button
        onClick={onSubmit}
        className="absolute right-2 mb-1 bottom-4 w-7 h-7 bg-[#e5e7eb] hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
        aria-label="Submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up w-4 h-4 text-black"
          aria-hidden="true"
        >
          <path d="m5 12 7-7 7 7"></path>
          <path d="M12 19V5"></path>
        </svg>
      </button>
    </div>
  );
};
export default ChatInput;
