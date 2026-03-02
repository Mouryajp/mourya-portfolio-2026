import type { ChatMessage } from "@/lib/ai/types";
import { Card, CardContent } from "@/components/ui/card";

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
    <div aria-live="polite" aria-busy={isLoading} className="space-y-3">
      {messages.map((message) => (
        <Card
          key={message.id ?? `${message.role}-${message.content.slice(0, 12)}`}
          className="py-4"
        >
          <CardContent className="space-y-1">
            <p className="text-xs uppercase text-muted-foreground">{message.role}</p>
            <p className="text-sm">{message.content}</p>
          </CardContent>
        </Card>
      ))}
      {isLoading ? <p className="text-sm text-muted-foreground">{thinkingLabel}</p> : null}
    </div>
  );
}
