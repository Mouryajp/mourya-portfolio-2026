import Link from "next/link";
import Image from "next/image";

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
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <StaggerGroup className="flex flex-col items-start justify-center gap-4">
          <Reveal>
            <Badge variant="outline">{hero.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="hero-title"
              className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {hero.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg text-foreground/90">{hero.title}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-muted-foreground">{hero.intro}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Card className="glass max-w-fit py-4">
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hero.socialLinks.map((link) => (
                    <Button key={link.href} asChild size="sm" variant="ghost">
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-3xl opacity-65">
            <Image
              src="/banner-01.jpeg"
              alt={hero.imageAlt}
              width={1024}
              height={1024}
              priority
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-background/45 via-transparent to-background/35" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-background to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-background/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
