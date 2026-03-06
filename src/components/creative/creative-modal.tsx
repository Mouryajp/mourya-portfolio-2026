import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { CreativeItem } from "@/lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function CreativeModal({
  item,
  open,
  onOpenChange,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: {
  item: CreativeItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong w-[min(900px,95vw)] max-h-[92vh] max-w-none overflow-hidden p-0">
        <div className="relative">
          <div className="relative h-[52vh] w-full bg-black/20 sm:h-[62vh] lg:h-[68vh]">
            <Image
              src={item.image.src}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain p-2"
              placeholder="blur"
              blurDataURL={item.image.blurDataURL}
              priority
            />
          </div>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 glass"
              aria-label="Close"
            >
              <X className="size-4" />
            </Button>
          </DialogClose>
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous"
              className="glass"
            >
              <ChevronLeft className="size-4" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next"
              className="glass"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-3 p-6">
          <DialogTitle className="text-lg font-semibold text-foreground">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {item.description}
          </DialogDescription>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            {item.metadata?.location ? <span>Location: {item.metadata.location}</span> : null}
            {item.metadata?.gear ? <span>Gear: {item.metadata.gear}</span> : null}
            {item.metadata?.year ? <span>Year: {item.metadata.year}</span> : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
