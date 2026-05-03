import type { Metadata } from "next";

import { ChatPanel } from "@/components/chat/chat-panel";

export const metadata: Metadata = {
  title: "Portfolio Copilot",
  description: "AI-powered assistant to explore Mourya's experience, projects, and technical expertise.",
};

export default function ChatPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <ChatPanel />
    </div>
  );
}
