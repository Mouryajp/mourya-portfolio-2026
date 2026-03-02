"use client";

import { useMemo, useState } from "react";

import { getChatPageContent } from "@/lib/content";
import type { ChatMessage, ChatRequest, ChatResponse } from "@/lib/ai/types";
import { ChatComposer } from "@/components/chat/chat-composer";
import { ChatEmptyState } from "@/components/chat/chat-empty-state";
import { ChatMessageList } from "@/components/chat/chat-message-list";

const createMessageId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg_${Date.now()}`;
};

export function ChatPanel() {
  const chatContent = getChatPageContent();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasMessages = messages.length > 0;

  const requestPayload = useMemo<ChatRequest>(
    () => ({
      messages,
      context: { page: "/chat", intent: "portfolio" },
    }),
    [messages]
  );

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    setError(null);
    setIsLoading(true);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...requestPayload,
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error(chatContent.status.serviceErrorMessage);
      }

      const data = (await response.json()) as ChatResponse;
      setMessages((prev) => [...prev, data.message]);
    } catch (err) {
      const message = err instanceof Error ? err.message : chatContent.status.defaultErrorMessage;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-labelledby="chat-title">
      <h1 id="chat-title">{chatContent.intro.title}</h1>
      <p>{chatContent.intro.description}</p>
      {!hasMessages ? (
        <ChatEmptyState
          description={chatContent.emptyStateDescription}
          prompts={chatContent.prompts}
          onSelect={sendMessage}
        />
      ) : null}
      <ChatMessageList
        messages={messages}
        isLoading={isLoading}
        thinkingLabel={chatContent.status.thinkingLabel}
      />
      {error ? <p role="alert">{error}</p> : null}
      <ChatComposer
        value={input}
        isLoading={isLoading}
        label={chatContent.composer.label}
        submitLabel={chatContent.composer.submitLabel}
        sendingLabel={chatContent.composer.sendingLabel}
        onChange={setInput}
        onSubmit={() => sendMessage(input)}
      />
    </section>
  );
}
