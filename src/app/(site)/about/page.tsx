import { StackSection } from "@/components/sections/stack-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { getAboutPageContent } from "@/lib/content";

export default function AboutPage() {
  const { intro } = getAboutPageContent();

  return (
    <div>
      <header>
        <h1>{intro.title}</h1>
        <p>{intro.description}</p>
      </header>
      <TimelineSection />
      <StackSection />
    </div>
  );
}
