import type { LabExperiment } from "@/lib/types";

export function LabCard({ lab }: { lab: LabExperiment }) {
  return (
    <article>
      <h3>{lab.name}</h3>
      <p>{lab.goal}</p>
      <p>{lab.outcome}</p>
      <ul>
        {lab.methods.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
      <ul>
        {lab.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
