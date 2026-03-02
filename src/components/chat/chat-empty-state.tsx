import type { ChatPrompt } from "@/lib/types";

export function ChatEmptyState({
  description,
  prompts,
  onSelect,
}: {
  description: string;
  prompts: ChatPrompt[];
  onSelect: (prompt: string) => void;
}) {
  return (
    <div>
      <p>{description}</p>
      <div>
        {prompts.map((prompt) => (
          <button key={prompt.id} type="button" onClick={() => onSelect(prompt.prompt)}>
            {prompt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
