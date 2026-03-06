"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { getHomePageContent } from "@/lib/content";
import type { CreativeCategory } from "@/lib/types";
import { CreativeCard } from "@/components/creative/creative-card";
import { CreativeFilter } from "@/components/creative/creative-filter";
import { CreativeModal } from "@/components/creative/creative-modal";

export function CreativeGallery() {
  const {
    creative: { categories, items },
  } = getHomePageContent();

  const filterOptions = useMemo(() => [{ id: "all" as const, label: "All" }, ...categories], [categories]);

  const [activeCategory, setActiveCategory] = useState<CreativeCategory | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  useEffect(() => {
    if (!selectedId) return;
    const exists = filteredItems.some((item) => item.id === selectedId);
    if (!exists) {
      setSelectedId(null);
    }
  }, [filteredItems, selectedId]);

  const selectedIndex = selectedId ? filteredItems.findIndex((item) => item.id === selectedId) : -1;
  const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex >= 0 && selectedIndex < filteredItems.length - 1;

  const handlePrev = () => {
    if (!hasPrev) return;
    setSelectedId(filteredItems[selectedIndex - 1].id);
  };

  const handleNext = () => {
    if (!hasNext) return;
    setSelectedId(filteredItems[selectedIndex + 1].id);
  };

  return (
    <div className="space-y-8">
      <CreativeFilter
        options={filterOptions}
        active={activeCategory}
        onSelect={(value) => setActiveCategory(value)}
      />

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div key={item.id} layout className="mb-5 break-inside-avoid">
              <CreativeCard item={item} onSelect={setSelectedId} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <CreativeModal
        item={selectedItem}
        open={Boolean(selectedItem)}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
}
