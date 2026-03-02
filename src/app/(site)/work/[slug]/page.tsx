import { notFound } from "next/navigation";

import { getCaseStudyBySlug, getCaseStudyParams, getWorkPageContent } from "@/lib/content";

export const dynamicParams = false;

export const generateStaticParams = () => getCaseStudyParams();

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const { detailSections } = getWorkPageContent();

  if (!study) {
    notFound();
  }

  return (
    <div>
      <header>
        <p>{study.timeframe}</p>
        <h1>{study.title}</h1>
        <p>{study.summary}</p>
      </header>
      <section aria-labelledby="work-impact">
        <h2 id="work-impact">{detailSections.impact}</h2>
        <p>{study.impact}</p>
      </section>
      <section aria-labelledby="work-highlights">
        <h2 id="work-highlights">{detailSections.highlights}</h2>
        <ul>
          {study.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="work-metrics">
        <h2 id="work-metrics">{detailSections.metrics}</h2>
        <ul>
          {study.metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong> {metric.label}
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="work-stack">
        <h2 id="work-stack">{detailSections.stack}</h2>
        <ul>
          {study.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="work-roles">
        <h2 id="work-roles">{detailSections.roles}</h2>
        <ul>
          {study.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
