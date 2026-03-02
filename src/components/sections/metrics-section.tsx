import { getHomePageContent } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function MetricsSection() {
  const { metrics } = getHomePageContent();

  return (
    <section aria-labelledby="metrics-title">
      <Reveal>
        <h2 id="metrics-title">{metrics.title}</h2>
      </Reveal>
      <div>
        {metrics.items.map((metric) => (
          <Reveal key={metric.label}>
            <div>
              <p>{metric.value}</p>
              <p>{metric.label}</p>
              {metric.description ? <p>{metric.description}</p> : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
