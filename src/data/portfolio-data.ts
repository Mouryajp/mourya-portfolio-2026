import type { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  site: {
    config: {
      name: "Mourya",
      title: "Mourya - Generative AI Portfolio",
      description:
        "Portfolio of generative AI systems, product experiments, and creative tooling focused on human-centered outcomes.",
      location: "Bengaluru, India",
      email: "hello@mourya.ai",
      resumeUrl: "/resume.pdf",
    },
    navItems: [
      {
        title: "Home",
        href: "/",
        description: "Overview and featured work.",
      },
      {
        title: "Work",
        href: "/work",
        description: "Case studies for shipped AI systems.",
      },
      {
        title: "Projects",
        href: "/projects",
        description: "Product and platform builds.",
      },
      {
        title: "Labs",
        href: "/labs",
        description: "Experiments, prototypes, and research.",
      },
      {
        title: "About",
        href: "/about",
        description: "Background, stack, and approach.",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Let's collaborate on AI work.",
      },
      {
        title: "Chat",
        href: "/chat",
        description: "Portfolio copilot.",
      },
    ],
    socialLinks: [
      {
        name: "GitHub",
        href: "https://github.com/mouryajp",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mouryajp",
      },
      {
        name: "X",
        href: "https://x.com/mouryajp",
      },
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: "Generative AI Portfolio",
        headline: "Designing human-first generative AI products.",
        subhead:
          "I build AI systems that move from research to production, with a focus on measurable impact, trustworthy UX, and scalable infrastructure.",
        primaryCta: { label: "Explore case studies", href: "/work" },
        secondaryCta: { label: "Start a project", href: "/contact" },
      },
      metrics: {
        title: "Impact snapshot",
        items: [
          {
            label: "Time saved per workflow",
            value: "-62%",
            description: "Automated multi-step knowledge work pipelines.",
          },
          {
            label: "Model adoption",
            value: "18 teams",
            description: "Distributed across product, research, and ops orgs.",
          },
          {
            label: "Quality improvement",
            value: "+34%",
            description: "Measured on human evaluation benchmarks.",
          },
        ],
      },
      featuredWork: {
        title: "Featured case studies",
        items: [
          {
            slug: "atlas-research-copilot",
            title: "Atlas Research Copilot",
            summary:
              "End-to-end research assistant for analysts, with retrieval-augmented generation, data lineage, and explainability.",
            impact: "Cut research turnaround from days to hours while improving citation accuracy.",
            timeframe: "2024 - 2025",
            roles: ["Product lead", "AI systems designer"],
            tags: ["RAG", "Knowledge graphs", "Compliance"],
            metrics: [
              { label: "Citation accuracy", value: "96%" },
              { label: "Avg. turnaround", value: "4.5 hrs" },
              { label: "Weekly active users", value: "1.2k" },
            ],
            highlights: [
              "Built hybrid retrieval across vectors + structured datasets.",
              "Introduced model routing for cost-quality tradeoffs.",
              "Designed review workflows for regulated teams.",
            ],
            stack: ["Python", "TypeScript", "Postgres", "OpenSearch", "LangGraph"],
          },
          {
            slug: "signal-briefing-studio",
            title: "Signal Briefing Studio",
            summary:
              "Narrative intelligence platform that turns streaming signals into executive-ready briefings.",
            impact: "Increased briefing production velocity by 3x with consistent tone control.",
            timeframe: "2025",
            roles: ["Tech lead", "Prompt engineer"],
            tags: ["Agents", "Summarization", "Media"],
            metrics: [
              { label: "Briefing throughput", value: "3x" },
              { label: "Stakeholder satisfaction", value: "4.8/5" },
            ],
            highlights: [
              "Orchestrated multi-agent synthesis workflows.",
              "Shipped dynamic editorial guardrails.",
            ],
            stack: ["Next.js", "FastAPI", "Redis", "Vector DB"],
          },
          {
            slug: "aurora-creative-suite",
            title: "Aurora Creative Suite",
            summary:
              "Generative creative tooling for brand teams to ideate campaigns with controllable outputs.",
            impact: "Enabled rapid concepting while maintaining brand safety constraints.",
            timeframe: "2024",
            roles: ["Product strategist", "Design technologist"],
            tags: ["Creative AI", "Safety", "Multimodal"],
            metrics: [
              { label: "Concept variants", value: "120+" },
              { label: "Brand-safe score", value: "92%" },
            ],
            highlights: [
              "Implemented style-conditioned generation workflows.",
              "Built human-in-the-loop review surfaces.",
            ],
            stack: ["Node", "Stable Diffusion", "Figma", "AWS"],
          },
        ],
      },
      projects: {
        title: "Projects",
        items: [
          {
            slug: "lattice-eval-suite",
            name: "Lattice Eval Suite",
            description:
              "Unified evaluation harness for LLM regression tests, human scoring, and model routing.",
            status: "shipped",
            tags: ["Eval", "Observability"],
            links: [
              { label: "Product brief", href: "/work/atlas-research-copilot" },
              { label: "Architecture", href: "/projects" },
            ],
          },
          {
            slug: "pulse-agent-platform",
            name: "Pulse Agent Platform",
            description:
              "Multi-agent runtime with declarative workflows, guardrails, and audit trails.",
            status: "in-progress",
            tags: ["Agents", "Safety"],
            links: [{ label: "Design doc", href: "/projects" }],
          },
          {
            slug: "studio-memory-layer",
            name: "Studio Memory Layer",
            description: "Context memory service with persona orchestration and privacy controls.",
            status: "prototype",
            tags: ["Memory", "Privacy"],
            links: [{ label: "Readout", href: "/projects" }],
          },
        ],
      },
      labs: {
        title: "Labs and experiments",
        items: [
          {
            slug: "agentic-research-sprints",
            name: "Agentic Research Sprints",
            goal: "Explore how agent swarms can accelerate exploratory research tasks.",
            outcome: "Defined a workflow for scoped multi-agent reasoning with quality checks.",
            methods: ["Prompt routing", "Evidence scoring", "Review UI"],
            tags: ["Agents", "Research"],
          },
          {
            slug: "multimodal-narratives",
            name: "Multimodal Narratives",
            goal: "Generate audio + visual narratives from structured datasets.",
            outcome: "Prototyped a pipeline that keeps narrative consistency across media.",
            methods: ["Scene planning", "TTS", "Image generation"],
            tags: ["Multimodal", "Storytelling"],
          },
          {
            slug: "trust-calibration",
            name: "Trust Calibration",
            goal: "Measure user trust shifts in AI-assisted workflows.",
            outcome: "Designed a rubric for confidence signaling and uncertainty framing.",
            methods: ["UX research", "Evaluation frameworks"],
            tags: ["Safety", "UX"],
          },
        ],
      },
      cta: {
        title: "Let's build the next AI product together.",
        description:
          "I partner with teams that want to turn generative AI into reliable, user-ready workflows.",
        action: {
          label: "Start a collaboration",
          href: "/contact",
        },
      },
    },
    about: {
      intro: {
        title: "About",
        description:
          "I lead AI product delivery from research to launch, aligning models, infrastructure, and human-centered design.",
      },
      timeline: {
        title: "Timeline",
        items: [
          {
            id: "2026",
            period: "2026",
            title: "Independent AI consultant",
            description: "Advising teams on LLM systems, evaluation, and productization.",
          },
          {
            id: "2024",
            period: "2024 - 2025",
            title: "AI Product Lead",
            description: "Led multi-team initiative to scale AI copilots across the org.",
          },
          {
            id: "2022",
            period: "2022 - 2024",
            title: "Senior Product Designer",
            description: "Built data-driven creative tooling for enterprise teams.",
          },
        ],
      },
      stack: {
        title: "AI stack",
        items: [
          { id: "models", name: "Model routing", category: "Models", level: "core" },
          { id: "rag", name: "Retrieval + RAG", category: "Models", level: "core" },
          { id: "agent", name: "Agent orchestration", category: "Models", level: "advanced" },
          { id: "evaluation", name: "LLM evals", category: "Research", level: "core" },
          { id: "prompt", name: "Prompt systems", category: "Product", level: "core" },
          { id: "ux", name: "Trustworthy UX", category: "Creative", level: "advanced" },
          { id: "infra", name: "Model infrastructure", category: "Infra", level: "advanced" },
          { id: "ops", name: "MLOps + observability", category: "Ops", level: "advanced" },
        ],
      },
    },
    work: {
      intro: {
        title: "Case studies",
        description: "Deep dives into shipped AI systems, outcomes, and lessons learned.",
      },
      sectionTitle: "All case studies",
      items: [],
      detailSections: {
        impact: "Impact",
        highlights: "Highlights",
        metrics: "Metrics",
        stack: "Stack",
        roles: "Roles",
      },
    },
    projects: {
      intro: {
        title: "Projects",
        description: "Product builds and platform investments supporting AI delivery.",
      },
      sectionTitle: "Project archive",
      items: [],
    },
    labs: {
      intro: {
        title: "Labs",
        description: "Experiments that explore new AI capabilities and UX patterns.",
      },
      sectionTitle: "Experiment log",
      items: [],
    },
    contact: {
      intro: {
        title: "Contact",
        description: "Share your goals and I will reply with a tailored AI delivery plan.",
      },
      channels: [],
      form: {
        fields: [
          { id: "name", name: "name", label: "Name", type: "text", autoComplete: "name" },
          { id: "email", name: "email", label: "Email", type: "email", autoComplete: "email" },
          {
            id: "company",
            name: "company",
            label: "Company",
            type: "text",
            autoComplete: "organization",
          },
          { id: "message", name: "message", label: "Message", type: "textarea", rows: 4 },
        ],
        submitLabel: "Send message",
      },
    },
    chat: {
      intro: {
        title: "Portfolio copilot",
        description:
          "Ask anything about my AI work, architecture decisions, or collaboration style.",
      },
      emptyStateDescription: "Ask about case studies, tooling, or collaboration style.",
      prompts: [
        {
          id: "systems",
          label: "Show AI systems",
          prompt: "Summarize your most impactful AI systems and their outcomes.",
        },
        {
          id: "collab",
          label: "Collaboration fit",
          prompt: "What kind of teams do you collaborate best with?",
        },
        {
          id: "stack",
          label: "Stack overview",
          prompt: "Give me a quick overview of your AI stack.",
        },
      ],
      composer: {
        label: "Your question",
        submitLabel: "Send",
        sendingLabel: "Sending...",
      },
      status: {
        thinkingLabel: "Thinking...",
        defaultErrorMessage: "Unexpected error.",
        serviceErrorMessage: "Unable to reach chat service.",
      },
    },
  },
};

portfolioData.pages.work.items = portfolioData.pages.home.featuredWork.items;
portfolioData.pages.projects.items = portfolioData.pages.home.projects.items;
portfolioData.pages.labs.items = portfolioData.pages.home.labs.items;
portfolioData.pages.contact.channels = [
  {
    label: "Email",
    value: portfolioData.site.config.email,
    href: `mailto:${portfolioData.site.config.email}`,
  },
  {
    label: "Location",
    value: portfolioData.site.config.location,
    href: "https://maps.google.com?q=Bengaluru%2C%20India",
  },
];
