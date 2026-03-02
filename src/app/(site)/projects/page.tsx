import { getProjectsPageContent } from "@/lib/content";
import { ProjectCard } from "@/components/cards/project-card";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  const { intro, sectionTitle, items } = getProjectsPageContent();

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{intro.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{intro.description}</p>
      </header>
      <Separator className="my-8" />
      <section aria-label={sectionTitle} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
