"use client";

import Link from "next/link";
import { getHomePageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection() {
  const { cta } = getHomePageContent();

  return (
    <section aria-labelledby="cta-title">
      <Reveal>
        <h2 id="cta-title">{cta.title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p>{cta.description}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <Link href={cta.action.href}>{cta.action.label}</Link>
      </Reveal>
    </section>
  );
}
