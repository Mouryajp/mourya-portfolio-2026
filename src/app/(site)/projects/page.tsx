import { getProjectsPageContent } from "@/lib/content";
import { ProjectCard } from "@/components/cards/project-card";

export default function ProjectsPage() {
  const { intro, sectionTitle, items } = getProjectsPageContent();

  return (
    <div>
      <header>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </header>
      <section aria-label={sectionTitle}>
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
