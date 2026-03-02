import { getHomePageContent } from "@/lib/content";
import { ProjectCard } from "@/components/cards/project-card";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsSection() {
  const { projects } = getHomePageContent();

  return (
    <section aria-labelledby="projects-title">
      <Reveal>
        <h2 id="projects-title">{projects.title}</h2>
      </Reveal>
      <div>
        {projects.items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
