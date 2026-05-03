import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mourya J P for collaboration, AI projects, or full-stack opportunities.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}
