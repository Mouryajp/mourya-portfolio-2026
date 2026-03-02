import Link from "next/link";

import type { CaseStudy } from "@/lib/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article>
      <h3>
        <Link href={`/work/${study.slug}`}>{study.title}</Link>
      </h3>
      <p>{study.summary}</p>
      <p>{study.impact}</p>
      <ul>
        {study.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
