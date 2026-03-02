import { getHomePageContent } from "@/lib/content";
import { ProjectCard } from "@/components/cards/project-card";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsSection() {
  const { projects } = getHomePageContent();

  return (
    <section aria-labelledby="projects-title" className="mx-auto w-full max-w-7xl px-6 py-16">
      <Reveal>
        <h2 id="projects-title" className="text-2xl font-semibold sm:text-3xl">
          {projects.title}
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
