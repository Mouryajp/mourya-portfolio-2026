"use client";

import Link from "next/link";
import { getHomePageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CtaSection() {
  const { cta } = getHomePageContent();

  return (
    <section aria-labelledby="cta-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Card className="glass-strong">
        <CardContent className="space-y-5 text-center">
          <Reveal>
            <h2 id="cta-title" className="text-2xl font-semibold sm:text-3xl">
              {cta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-2xl text-muted-foreground">{cta.description}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Button asChild>
              <Link href={cta.action.href}>{cta.action.label}</Link>
            </Button>
          </Reveal>
        </CardContent>
      </Card>
    </section>
  );
}
