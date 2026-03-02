"use client";

import { MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { useChatLayout } from "@/components/chat/chat-layout-context";
import { ChatPanel } from "@/components/chat/chat-panel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FloatingChat() {
  const pathname = usePathname();
  const { isOpen, openChat, closeChat } = useChatLayout();

  if (pathname === "/chat") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-[420px] max-w-[95vw] shadow-xl">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Portfolio copilot</CardTitle>
              <p className="text-xs text-muted-foreground">Ask about AI work</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close chat"
              onClick={closeChat}
            >
              <X className="size-4" />
            </Button>
          </CardHeader>
          <CardContent className="max-h-[70vh] overflow-auto">
            <ChatPanel showHeader={false} />
          </CardContent>
        </Card>
      ) : (
        <Button type="button" onClick={openChat} className="rounded-full shadow-lg">
          <MessageCircle className="size-4" />
          Chat
        </Button>
      )}
    </div>
  );
}
