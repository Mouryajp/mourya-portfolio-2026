export type NavItem = {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type SocialLink = {
  name: string;
  href: string;
  icon?: string;
};

export type Metric = {
  label: string;
  value: string;
  description?: string;
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export type StackItem = {
  id: string;
  name: string;
  category: "Models" | "Product" | "Infra" | "Research" | "Creative" | "Ops";
  level?: "core" | "advanced" | "experimental";
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  timeframe: string;
  roles: string[];
  tags: string[];
  metrics: Metric[];
  highlights: string[];
  stack: string[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  status: "shipped" | "in-progress" | "prototype";
  tags: string[];
  links: Array<{ label: string; href: string }>;
};

export type LabExperiment = {
  slug: string;
  name: string;
  goal: string;
  outcome: string;
  methods: string[];
  tags: string[];
};

export type HeroContent = {
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ChatPrompt = {
  id: string;
  label: string;
  prompt: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export type SectionIntro = {
  title: string;
  description: string;
};

export type ContactFormField = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
  rows?: number;
};

export type HomePageContent = {
  hero: HeroContent & {
    eyebrow: string;
  };
  metrics: {
    title: string;
    items: Metric[];
  };
  featuredWork: {
    title: string;
    items: CaseStudy[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  labs: {
    title: string;
    items: LabExperiment[];
  };
  cta: {
    title: string;
    description: string;
    action: {
      label: string;
      href: string;
    };
  };
};

export type AboutPageContent = {
  intro: SectionIntro;
  timeline: {
    title: string;
    items: TimelineEntry[];
  };
  stack: {
    title: string;
    items: StackItem[];
  };
};

export type WorkPageContent = {
  intro: SectionIntro;
  sectionTitle: string;
  items: CaseStudy[];
  detailSections: {
    impact: string;
    highlights: string;
    metrics: string;
    stack: string;
    roles: string;
  };
};

export type ProjectsPageContent = {
  intro: SectionIntro;
  sectionTitle: string;
  items: Project[];
};

export type LabsPageContent = {
  intro: SectionIntro;
  sectionTitle: string;
  items: LabExperiment[];
};

export type ContactPageContent = {
  intro: SectionIntro;
  channels: ContactChannel[];
  form: {
    fields: ContactFormField[];
    submitLabel: string;
  };
};

export type ChatPageContent = {
  intro: SectionIntro;
  emptyStateDescription: string;
  prompts: ChatPrompt[];
  composer: {
    label: string;
    submitLabel: string;
    sendingLabel: string;
  };
  status: {
    thinkingLabel: string;
    defaultErrorMessage: string;
    serviceErrorMessage: string;
  };
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  resumeUrl: string;
};

export type PortfolioData = {
  site: {
    config: SiteConfig;
    navItems: NavItem[];
    socialLinks: SocialLink[];
  };
  pages: {
    home: HomePageContent;
    about: AboutPageContent;
    work: WorkPageContent;
    projects: ProjectsPageContent;
    labs: LabsPageContent;
    contact: ContactPageContent;
    chat: ChatPageContent;
  };
};
