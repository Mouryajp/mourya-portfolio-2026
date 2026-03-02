import { getHomePageContent } from "@/lib/content";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedWorkSection() {
  const { featuredWork } = getHomePageContent();

  return (
    <section aria-labelledby="featured-work-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="featured-work-title" className="text-2xl font-semibold sm:text-3xl">
          {featuredWork.title}
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredWork.items.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
