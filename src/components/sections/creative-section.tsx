"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { CreativeGallery } from "@/components/creative/creative-gallery";
import { getHomePageContent } from "@/lib/content";

export function CreativeSection() {
  const { creative } = getHomePageContent();

  return (
    <section
      id="creative"
      aria-labelledby="creative-title"
      className="relative mx-auto w-full max-w-7xl px-6 py-16"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="outline" className="mb-4">
            {creative.badge}
          </Badge>
          <h2
            id="creative-title"
            className="text-2xl font-semibold text-foreground text-balance sm:text-3xl"
          >
            {creative.title}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {creative.description}
          </p>
        </motion.div>

        <CreativeGallery />
      </div>
    </section>
  );
}
