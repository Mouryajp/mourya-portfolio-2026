import type { ChatMessage } from "@/lib/ai/types";

export function ChatMessageList({
  messages,
  isLoading,
  thinkingLabel,
}: {
  messages: ChatMessage[];
  isLoading: boolean;
  thinkingLabel: string;
}) {
  return (
    <div aria-live="polite" aria-busy={isLoading}>
      {messages.map((message) => (
        <div key={message.id ?? `${message.role}-${message.content.slice(0, 12)}`}>
          <strong>{message.role}</strong>
          <p>{message.content}</p>
        </div>
      ))}
      {isLoading ? <p>{thinkingLabel}</p> : null}
    </div>
  );
}
