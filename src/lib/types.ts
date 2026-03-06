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
  category: string;
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

export type CreativeCategory = "photography" | "sketches" | "travel" | "music";

export type CreativeCategoryOption = {
  id: CreativeCategory;
  label: string;
};

export type CreativeItem = {
  id: string;
  title: string;
  category: CreativeCategory;
  image: {
    src: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
  description: string;
  metadata?: {
    location?: string;
    gear?: string;
    year?: string;
  };
};

export type HeroContent = {
  eyebrow: string;
  name: string;
  title: string;
  intro: string;
  headline: string;
  subhead: string;
  imageAlt: string;
  socialLinks: SocialLink[];
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
  hero: HeroContent;
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
  creative: {
    badge: string;
    title: string;
    description: string;
    categories: CreativeCategoryOption[];
    items: CreativeItem[];
  };
  assistant: {
    badge: string;
    title: string;
    description: string;
    greeting: string;
    inputPlaceholder: string;
    prompts: ChatPrompt[];
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
