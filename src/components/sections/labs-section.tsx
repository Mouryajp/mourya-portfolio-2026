import { getHomePageContent } from "@/lib/content";
import { LabCard } from "@/components/cards/lab-card";
import { Reveal } from "@/components/motion/reveal";

export function LabsSection() {
  const { labs } = getHomePageContent();

  return (
    <section aria-labelledby="labs-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="labs-title" className="text-2xl font-semibold sm:text-3xl">
          {labs.title}
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {labs.items.map((lab) => (
          <LabCard key={lab.slug} lab={lab} />
        ))}
      </div>
    </section>
  );
}
