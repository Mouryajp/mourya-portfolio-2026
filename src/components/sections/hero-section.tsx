import Link from "next/link";
import { getHomePageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup } from "@/components/motion/stagger";

export function HeroSection() {
  const { hero } = getHomePageContent();

  return (
    <section aria-labelledby="hero-title">
      <StaggerGroup>
        <Reveal>
          <p>{hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 id="hero-title">{hero.headline}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p>{hero.subhead}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </div>
        </Reveal>
      </StaggerGroup>
    </section>
  );
}
