import { getLabsPageContent } from "@/lib/content";
import { LabCard } from "@/components/cards/lab-card";

export default function LabsPage() {
  const { intro, sectionTitle, items } = getLabsPageContent();

  return (
    <div>
      <header>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </header>
      <section aria-label={sectionTitle}>
        {items.map((lab) => (
          <LabCard key={lab.slug} lab={lab} />
        ))}
      </section>
    </div>
  );
}
