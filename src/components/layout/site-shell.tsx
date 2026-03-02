import type { ReactNode } from "react";

import { ChatLayoutProvider } from "@/components/chat/chat-layout-context";
import { FloatingChat } from "@/components/chat/floating-chat";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ChatLayoutProvider>
      <div className="relative min-h-screen bg-background bg-grid">
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
        <FloatingChat />
      </div>
    </ChatLayoutProvider>
  );
}
