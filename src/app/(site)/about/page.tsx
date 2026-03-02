import { StackSection } from "@/components/sections/stack-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { getAboutPageContent } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  const { intro } = getAboutPageContent();

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{intro.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{intro.description}</p>
      </header>
      <Separator className="my-8" />
      <TimelineSection />
      <StackSection />
    </div>
  );
}
