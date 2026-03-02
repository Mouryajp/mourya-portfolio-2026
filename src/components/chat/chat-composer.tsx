import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ChatComposer({
  value,
  isLoading,
  label = "Your question",
  submitLabel = "Send",
  sendingLabel = "Sending…",
  onChange,
  onSubmit,
}: {
  value: string;
  isLoading: boolean;
  label?: string;
  submitLabel?: string;
  sendingLabel?: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading || !value.trim()) return;
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Label htmlFor="chat-input">{label}</Label>
      <Textarea
        id="chat-input"
        name="chat-input"
        rows={3}
        value={value}
        disabled={isLoading}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button type="submit" disabled={isLoading || !value.trim()}>
        {isLoading ? sendingLabel : submitLabel}
      </Button>
    </form>
  );
}
