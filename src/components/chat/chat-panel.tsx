"use client";

import { useCallback, useMemo, useState } from "react";

import { getChatPageContent } from "@/lib/content";
import type { ChatMessage, ChatRequest } from "@/lib/ai/types";
import { ChatComposer } from "@/components/chat/chat-composer";
import { ChatEmptyState } from "@/components/chat/chat-empty-state";
import { ChatMessageList } from "@/components/chat/chat-message-list";

const createMessageId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg_${Date.now()}`;
};

type ChatPanelProps = {
  showHeader?: boolean;
};

export function ChatPanel({ showHeader = true }: ChatPanelProps) {
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

  const appendAssistantDelta = useCallback((id: string, delta: string) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id
          ? {
              ...message,
              content: `${message.content}${delta}`,
            }
          : message
      )
    );
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isLoading) return;

      const userMessage: ChatMessage = {
        id: createMessageId(),
        role: "user",
        content: trimmed,
        createdAt: new Date().toISOString(),
      };

      const assistantMessage: ChatMessage = {
        id: createMessageId(),
        role: "assistant",
        content: "",
        createdAt: new Date().toISOString(),
      };

      setError(null);
      setIsLoading(true);
      setInput("");
      const nextMessages = [...messages, userMessage];
      setMessages((prev) => [...prev, userMessage, assistantMessage]);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...requestPayload,
            messages: nextMessages,
          }),
        });

        if (!response.ok || !response.body) {
          const fallback = chatContent.status.serviceErrorMessage;
          try {
            const data = (await response.json()) as { error?: string };
            throw new Error(data.error ?? fallback);
          } catch {
            throw new Error(fallback);
          }
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          if (chunk) {
            appendAssistantDelta(assistantMessage.id, chunk);
          }
        }
        setMessages((prev) =>
          prev.filter(
            (message) => message.id !== assistantMessage.id || message.content.trim().length > 0
          )
        );
      } catch (err) {
        setMessages((prev) => prev.filter((message) => message.id !== assistantMessage.id));
        const message = err instanceof Error ? err.message : chatContent.status.defaultErrorMessage;
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [
      appendAssistantDelta,
      chatContent.status.defaultErrorMessage,
      chatContent.status.serviceErrorMessage,
      isLoading,
      messages,
      requestPayload,
    ]
  );

  const sectionProps = showHeader
    ? { "aria-labelledby": "chat-title" }
    : { "aria-label": chatContent.intro.title };

  return (
    <section {...sectionProps}>
      {showHeader ? (
        <>
          <h1 id="chat-title">{chatContent.intro.title}</h1>
          <p>{chatContent.intro.description}</p>
        </>
      ) : null}
      {!hasMessages ? (
        <ChatEmptyState
          description={chatContent.emptyStateDescription}
          prompts={chatContent.prompts}
          disabled={isLoading}
          onSelect={sendMessage}
        />
      ) : null}
      <ChatMessageList
        messages={messages}
        isLoading={isLoading}
        thinkingLabel={chatContent.status.thinkingLabel}
      />
      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
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
