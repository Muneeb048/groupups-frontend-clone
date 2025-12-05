import type { Message } from "./chat";

export interface ResizablePanelState {
  leftWidth: number;
  isResizing: boolean;
}

export interface ChatNavbarProps {
  onOpenRepPopup: () => void;
}

export interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export interface ChatFooterProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
}

export interface ResizableDividerProps {
  onMouseDown: (e: React.MouseEvent) => void;
}

export interface ChatContentProps {
  messages: Message[];
  isLoading: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onOpenRepPopup: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}
