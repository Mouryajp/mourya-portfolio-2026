import { getHomePageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

export function MetricsSection() {
  const { metrics } = getHomePageContent();

  return (
    <section aria-labelledby="metrics-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="metrics-title" className="text-2xl font-semibold sm:text-3xl">
          {metrics.title}
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {metrics.items.map((metric) => (
          <Reveal key={metric.label}>
            <Card className="py-4">
              <CardContent className="space-y-2">
                <p className="text-3xl font-semibold">{metric.value}</p>
                <p className="font-medium">{metric.label}</p>
                {metric.description ? (
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                ) : null}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
