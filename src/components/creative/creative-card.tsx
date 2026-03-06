import Image from "next/image";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import type { CreativeItem } from "@/lib/types";

export function CreativeCard({
  item,
  onSelect,
}: {
  item: CreativeItem;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onSelect(item.id)}
      className="group w-full text-left"
    >
      <Card className="relative glass overflow-hidden py-0 transition-all group-hover:glow-sm">
        <div
          className="relative w-full"
          style={{ aspectRatio: `${item.image.width} / ${item.image.height}` }}
        >
          <Image
            src={item.image.src}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={item.image.blurDataURL}
            loading="lazy"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-background/80 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4">
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
          </div>
        </div>
      </Card>
    </motion.button>
  );
}
