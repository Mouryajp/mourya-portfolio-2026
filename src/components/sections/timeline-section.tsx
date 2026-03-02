import { getAboutPageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function TimelineSection() {
  const { timeline } = getAboutPageContent();

  return (
    <section aria-labelledby="timeline-title">
      <Reveal>
        <h2 id="timeline-title">{timeline.title}</h2>
      </Reveal>
      <ol>
        {timeline.items.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.period}</h3>
            <p>{entry.title}</p>
            <p>{entry.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
