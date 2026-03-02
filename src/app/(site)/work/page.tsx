import { getWorkPageContent } from "@/lib/content";
import { CaseStudyCard } from "@/components/cards/case-study-card";

export default function WorkPage() {
  const { intro, sectionTitle, items } = getWorkPageContent();

  return (
    <div>
      <header>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </header>
      <section aria-label={sectionTitle}>
        {items.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </section>
    </div>
  );
}
