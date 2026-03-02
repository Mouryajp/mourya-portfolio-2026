"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ChatLayoutContextValue = {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
};

const ChatLayoutContext = createContext<ChatLayoutContextValue | null>(null);

export function ChatLayoutProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<ChatLayoutContextValue>(
    () => ({
      isOpen,
      openChat: () => setIsOpen(true),
      closeChat: () => setIsOpen(false),
      toggleChat: () => setIsOpen((prev) => !prev),
    }),
    [isOpen]
  );

  return <ChatLayoutContext.Provider value={value}>{children}</ChatLayoutContext.Provider>;
}

export function useChatLayout() {
  const context = useContext(ChatLayoutContext);
  if (!context) {
    throw new Error("useChatLayout must be used within ChatLayoutProvider.");
  }
  return context;
}
