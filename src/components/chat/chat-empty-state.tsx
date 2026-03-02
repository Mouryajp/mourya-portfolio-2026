import type { ChatPrompt } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ChatEmptyState({
  description,
  prompts,
  disabled = false,
  onSelect,
}: {
  description: string;
  prompts: ChatPrompt[];
  disabled?: boolean;
  onSelect: (prompt: string) => void;
}) {
  return (
    <Card className="py-4">
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {prompts.map((prompt) => (
            <Button
              key={prompt.id}
              type="button"
              variant="outline"
              size="sm"
              disabled={disabled}
              onClick={() => onSelect(prompt.prompt)}
            >
              {prompt.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
