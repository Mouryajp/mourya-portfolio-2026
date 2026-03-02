import Link from "next/link";

import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
      <ul>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div>
        {project.links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
