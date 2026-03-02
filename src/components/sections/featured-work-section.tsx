import { getHomePageContent } from "@/lib/content";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedWorkSection() {
  const { featuredWork } = getHomePageContent();

  return (
    <section aria-labelledby="featured-work-title">
      <Reveal>
        <h2 id="featured-work-title">{featuredWork.title}</h2>
      </Reveal>
      <div>
        {featuredWork.items.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
