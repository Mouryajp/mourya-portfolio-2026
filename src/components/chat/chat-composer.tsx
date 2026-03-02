import type { FormEvent } from "react";

export function ChatComposer({
  value,
  isLoading,
  label,
  submitLabel,
  sendingLabel,
  onChange,
  onSubmit,
}: {
  value: string;
  isLoading: boolean;
  label: string;
  submitLabel: string;
  sendingLabel: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chat-input">{label}</label>
      <textarea
        id="chat-input"
        name="chat-input"
        rows={3}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? sendingLabel : submitLabel}
      </button>
    </form>
  );
}
