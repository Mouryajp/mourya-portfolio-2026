import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getHomePageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup } from "@/components/motion/stagger";

export function HeroSection() {
  const { hero } = getHomePageContent();

  return (
    <section aria-labelledby="hero-title" className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
      <StaggerGroup>
        <Reveal>
          <Badge variant="outline">{hero.eyebrow}</Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1
            id="hero-title"
            className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            {hero.headline}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-muted-foreground">{hero.subhead}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <Card className="glass max-w-fit py-4">
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </StaggerGroup>
    </section>
  );
}
