import { HeroSection } from "@/components/sections/hero-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { AiAssistantSection } from "@/components/sections/ai-assistant-section";
import { CreativeSection } from "@/components/sections/creative-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <MetricsSection />
      <TimelineSection />
      <ProjectsSection />
      <StackSection />
      <CreativeSection />
      <AiAssistantSection />
      <CtaSection />
      <ContactSection />
    </div>
  );
}
