import { getHomePageContent } from "@/lib/content";
import { LabCard } from "@/components/cards/lab-card";
import { Reveal } from "@/components/motion/reveal";

export function LabsSection() {
  const { labs } = getHomePageContent();

  return (
    <section aria-labelledby="labs-title">
      <Reveal>
        <h2 id="labs-title">{labs.title}</h2>
      </Reveal>
      <div>
        {labs.items.map((lab) => (
          <LabCard key={lab.slug} lab={lab} />
        ))}
      </div>
    </section>
  );
}
