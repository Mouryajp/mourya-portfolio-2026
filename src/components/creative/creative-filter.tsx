import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CreativeCategory } from "@/lib/types";

export type CreativeFilterOption = {
  id: CreativeCategory | "all";
  label: string;
};

export function CreativeFilter({
  options,
  active,
  onSelect,
}: {
  options: CreativeFilterOption[];
  active: CreativeCategory | "all";
  onSelect: (value: CreativeCategory | "all") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.id)}
          variant={active === option.id ? "default" : "ghost"}
          size="sm"
          className={cn("transition-all", active === option.id ? "glow-sm" : "")}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
