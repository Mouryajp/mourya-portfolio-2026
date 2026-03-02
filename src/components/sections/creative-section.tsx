"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Pencil, Plane, Music } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "All", icon: null },
  { id: "photography", name: "Photography", icon: Camera },
  { id: "sketches", name: "Sketches", icon: Pencil },
  { id: "travel", name: "Travel", icon: Plane },
  { id: "music", name: "Music", icon: Music },
];

const creativeItems = [
  {
    id: 1,
    category: "photography",
    title: "Urban Light Study",
    color: "from-primary/20 to-chart-2/20",
  },
  {
    id: 2,
    category: "sketches",
    title: "Neural Network Sketch",
    color: "from-chart-3/20 to-primary/20",
  },
  { id: 3, category: "travel", title: "Tokyo Nights", color: "from-chart-2/20 to-chart-3/20" },
  {
    id: 4,
    category: "music",
    title: "Ambient Sessions Vol.3",
    color: "from-primary/20 to-chart-3/20",
  },
  {
    id: 5,
    category: "photography",
    title: "Monsoon Bangalore",
    color: "from-chart-2/20 to-primary/20",
  },
  {
    id: 6,
    category: "sketches",
    title: "Architecture Forms",
    color: "from-chart-3/20 to-chart-2/20",
  },
  { id: 7, category: "travel", title: "Himalayan Dawn", color: "from-primary/20 to-chart-2/20" },
  {
    id: 8,
    category: "photography",
    title: "Street Portraits",
    color: "from-chart-2/20 to-chart-3/20",
  },
];

export function CreativeSection() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filtered =
    filter === "all" ? creativeItems : creativeItems.filter((item) => item.category === filter);

  return (
    <section id="creative" aria-labelledby="creative-title" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              Beyond Code
            </span>
          </div>
          <h2
            id="creative-title"
            className="text-3xl font-bold text-foreground sm:text-4xl text-balance"
          >
            Creative Work
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                filter === cat.id
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {cat.icon && <cat.icon className="size-3.5" />}
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(item.id)}
                  className="glass group relative w-full overflow-hidden rounded-xl transition-all hover:glow-sm"
                >
                  <div
                    className={cn(
                      "aspect-[4/3] w-full bg-gradient-to-br",
                      item.color,
                      item.id % 3 === 0 && "aspect-square",
                      item.id % 5 === 0 && "aspect-[3/4]"
                    )}
                  >
                    <div className="flex h-full items-center justify-center">
                      {item.category === "photography" && (
                        <Camera className="size-8 text-muted-foreground/50" />
                      )}
                      {item.category === "sketches" && (
                        <Pencil className="size-8 text-muted-foreground/50" />
                      )}
                      {item.category === "travel" && (
                        <Plane className="size-8 text-muted-foreground/50" />
                      )}
                      {item.category === "music" && (
                        <Music className="size-8 text-muted-foreground/50" />
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="p-4">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="glass-strong relative max-w-2xl w-full rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 rounded-lg p-2 text-muted-foreground hover:text-foreground glass"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
                {(() => {
                  const item = creativeItems.find((i) => i.id === selectedItem);
                  if (!item) return null;
                  return (
                    <div>
                      <div className={cn("aspect-video w-full bg-gradient-to-br", item.color)}>
                        <div className="flex h-full items-center justify-center">
                          {item.category === "photography" && (
                            <Camera className="size-16 text-muted-foreground/30" />
                          )}
                          {item.category === "sketches" && (
                            <Pencil className="size-16 text-muted-foreground/30" />
                          )}
                          {item.category === "travel" && (
                            <Plane className="size-16 text-muted-foreground/30" />
                          )}
                          {item.category === "music" && (
                            <Music className="size-16 text-muted-foreground/30" />
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
