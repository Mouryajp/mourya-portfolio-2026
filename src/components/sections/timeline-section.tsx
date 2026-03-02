import { getAboutPageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TimelineSection() {
  const { timeline } = getAboutPageContent();

  return (
    <section aria-labelledby="timeline-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="timeline-title" className="text-2xl font-semibold sm:text-3xl">
          {timeline.title}
        </h2>
      </Reveal>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {timeline.items.map((entry) => (
          <li key={entry.id}>
            <Card className="h-full py-4">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{entry.period}</p>
                <CardTitle>{entry.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {entry.description}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
