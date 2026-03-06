import type {
  CaseStudy,
  ChatPrompt,
  CreativeCategory,
  CreativeItem,
  LabExperiment,
  PortfolioData,
  Project,
  StackItem,
} from "@/lib/types";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGxpbmVhckdyYWRpZW50IGlkPSdnJyB4MT0nMCcgeTE9JzAnIHgyPScxJyB5Mj0nMSc+PHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSIjZTJlOGYwJy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSIjY2NkNGVkJy8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=";

const portfolioName = "Mourya J P";
const portfolioTitle = "Generative AI Full Stack Engineer";
const portfolioLocation = "Bangalore, India";
const portfolioEmail = "mourya.janekere@gmail.com";
const portfolioTagline =
  "Building autonomous AI systems and production-grade full-stack applications.";
const portfolioBio =
  "Generative AI engineer and full-stack developer specializing in LLM-powered applications, agent orchestration, and scalable web platforms.";

const githubUrl = "https://github.com/Mouryajp";
const linkedInUrl = "https://www.linkedin.com/in/mouryajanekere";
const instagramUrl = "https://www.instagram.com/mourya.janekere/";

const featuredCaseStudies: CaseStudy[] = [
  {
    slug: "harmoniai",
    title: "HarmoniAI",
    summary:
      "A retrieval-augmented AI chatbot designed to provide contextual mental health support using semantic search and conversational AI.",
    impact:
      "Built a RAG architecture that combines vector retrieval and LLM reasoning to deliver contextual, grounded responses.",
    timeframe: "2025",
    roles: ["Generative AI Developer", "Full Stack Engineer"],
    tags: ["RAG", "Conversational AI", "Mental Health"],
    metrics: [
      { label: "Core features", value: "4" },
      { label: "Tech stack items", value: "6" },
      { label: "Live demo", value: "Available" },
    ],
    highlights: [
      "Semantic search with vector embeddings.",
      "Context-aware AI responses.",
      "Streaming conversational interface.",
    ],
    stack: ["Next.js", "LangChain", "DataStax Astra", "Google AI Studio", "Tailwind CSS", "Shadcn UI"],
  },
  {
    slug: "toxitrace",
    title: "ToxiTrace",
    summary:
      "A machine learning system that predicts mental health conditions using both acoustic voice features and survey data.",
    impact:
      "Designed a multimodal pipeline combining acoustic voice analysis with PHQ-9 questionnaire evaluation for stronger prediction signals.",
    timeframe: "2025",
    roles: ["ML Engineer", "Backend Developer"],
    tags: ["Multimodal ML", "Mental Well-being", "Inference API"],
    metrics: [
      { label: "Core features", value: "4" },
      { label: "Tech stack items", value: "5" },
      { label: "Input modes", value: "2" },
    ],
    highlights: [
      "Multimodal prediction pipeline.",
      "Real-time inference API.",
      "Voice feature extraction with Parselmouth.",
    ],
    stack: ["Python", "FastAPI", "XGBoost", "Scikit-learn", "Parselmouth"],
  },
  {
    slug: "developer-blog-platform",
    title: "Developer Blog Platform",
    summary:
      "A modern blogging platform enabling content creation and publishing with optimized performance.",
    impact:
      "Delivered a full-stack publishing workflow with cloud deployment and responsive UX for developer-focused content.",
    timeframe: "2025",
    roles: ["Full Stack Developer"],
    tags: ["Next.js", "Content Platform", "Cloud Deployment"],
    metrics: [
      { label: "Core features", value: "4" },
      { label: "Tech stack items", value: "5" },
      { label: "Deployment", value: "Vercel" },
    ],
    highlights: [
      "Responsive UI for authoring and reading.",
      "Content management flow.",
      "Production deployment on Vercel.",
    ],
    stack: ["Next.js", "MongoDB Atlas", "Shadcn UI", "Tailwind CSS", "Vercel"],
  },
];

const projects: Project[] = [
  {
    slug: "harmoniai",
    name: "HarmoniAI",
    description:
      "RAG-powered mental health assistant with semantic retrieval, context-aware responses, and a streaming chat experience.",
    status: "shipped",
    tags: ["Next.js", "LangChain", "RAG", "DataStax Astra"],
    links: [
      { label: "Live", href: "https://harmoni-ai-beta.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jp-mourya" },
    ],
  },
  {
    slug: "toxitrace",
    name: "ToxiTrace",
    description:
      "Multimodal mental well-being detection system using acoustic voice signals and PHQ-9 survey analysis.",
    status: "prototype",
    tags: ["Python", "FastAPI", "XGBoost", "Scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/jp-mourya" }],
  },
  {
    slug: "developer-blog-platform",
    name: "Developer Blog Platform",
    description:
      "Full-stack blogging platform for publishing developer content with modern UI, CMS workflows, and cloud deployment.",
    status: "shipped",
    tags: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Vercel"],
    links: [{ label: "GitHub", href: "https://github.com/jp-mourya" }],
  },
];

const skillGroups = [
  {
    category: "Generative AI",
    items: ["LangGraph", "LLM Orchestration", "RAG Architecture", "Prompt Engineering", "AI Agent Systems"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Proxy APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MongoDB Atlas", "Vector Databases"],
  },
  {
    category: "DevOps",
    items: ["Git", "Azure DevOps", "Vercel", "CI/CD"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "HTML", "CSS"],
  },
];

const creativeCategoryOrder: CreativeCategory[] = ["photography", "sketches", "travel", "music"];

const creativeCategoryLabels: Record<CreativeCategory, string> = {
  photography: "Photography",
  sketches: "Sketches",
  travel: "Travel",
  music: "Music",
};

const creativeItems: CreativeItem[] = [
  {
    id: "aurora-portrait",
    title: "Aurora Portrait",
    category: "photography",
    image: {
      src: "/creative/photography/IMG_20251023_104817627_HDR_AE.jpg.jpeg",
      width: 1200,
      height: 1600,
      blurDataURL: BLUR_DATA_URL,
    },
    description:
      "Soft morning light study focused on contrast and facial geometry. Captured during a studio portrait session.",
    metadata: {
      location: "Bengaluru",
      gear: "Sony A7C + 50mm",
      year: "2025",
    },
  },
  {
    id: "street-frames",
    title: "Street Frames",
    category: "photography",
    image: {
      src: "/creative/photography/IMG_20251122_094125534_HDR_AE.jpg.jpeg",
      width: 1600,
      height: 1200,
      blurDataURL: BLUR_DATA_URL,
    },
    description:
      "Candid moments captured in motion with a focus on light falloff and leading lines.",
    metadata: {
      location: "Mumbai",
      gear: "Fujifilm X100V",
      year: "2025",
    },
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    category: "photography",
    image: {
      src: "/creative/photography/IMG_20251122_104211151_HDR_AE.jpg.jpeg",
      width: 1400,
      height: 1400,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "A color study exploring warm gradients and texture during late afternoon light.",
    metadata: {
      location: "Bengaluru",
      gear: "Canon R6",
      year: "2025",
    },
  },
  {
    id: "night-contrast",
    title: "Night Contrast",
    category: "photography",
    image: {
      src: "/creative/photography/IMG_20251227_183300320_HDR.jpg.jpeg",
      width: 1200,
      height: 1600,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "High-contrast portrait experiment with controlled highlights and deep shadows.",
    metadata: {
      location: "Chennai",
      gear: "Sony A7C + 35mm",
      year: "2025",
    },
  },
  {
    id: "mountain-sky",
    title: "Mountain Sky",
    category: "travel",
    image: {
      src: "/creative/travel/IMG_20260102_074457276_HDR_AE.jpg.jpeg",
      width: 1600,
      height: 1200,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "Early morning alpine capture with layered clouds and a cold color palette.",
    metadata: {
      location: "Himachal",
      gear: "Pixel 8 Pro",
      year: "2026",
    },
  },
  {
    id: "city-motion",
    title: "City in Motion",
    category: "travel",
    image: {
      src: "/creative/travel/IMG_20250404_081451540_BURST002.jpg.jpeg",
      width: 1200,
      height: 1600,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "A long exposure burst that keeps the subject sharp while the city blurs by.",
    metadata: {
      location: "Singapore",
      gear: "Fujifilm X100V",
      year: "2025",
    },
  },
  {
    id: "roadside-light",
    title: "Roadside Light",
    category: "travel",
    image: {
      src: "/creative/travel/IMG_20251023_115631366_HDR_AE.jpg.jpeg",
      width: 1600,
      height: 1200,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "Highway moment with emphasized contrast between warm and cool light sources.",
    metadata: {
      location: "Mysuru",
      gear: "Sony A7C",
      year: "2025",
    },
  },
  {
    id: "system-sketches",
    title: "System Sketches",
    category: "sketches",
    image: {
      src: "/creative/photography/IMG_20251122_104211151_HDR_AE.jpg.jpeg",
      width: 1400,
      height: 1400,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "Exploratory sketching for AI product flows and multi-agent UX patterns.",
    metadata: {
      year: "2025",
      gear: "Procreate + iPad",
    },
  },
  {
    id: "concept-frames",
    title: "Concept Frames",
    category: "sketches",
    image: {
      src: "/creative/photography/IMG_20251023_104817627_HDR_AE.jpg.jpeg",
      width: 1200,
      height: 1600,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "Storyboard panels for generative storytelling experiments.",
    metadata: {
      year: "2024",
      gear: "Figma + Wacom",
    },
  },
  {
    id: "ambient-sessions",
    title: "Ambient Sessions",
    category: "music",
    image: {
      src: "/creative/travel/IMG_20260102_074457276_HDR_AE.jpg.jpeg",
      width: 1600,
      height: 1200,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "Layered synth sketches exploring calm soundscapes and adaptive loops.",
    metadata: {
      year: "2025",
      gear: "Ableton Live",
    },
  },
  {
    id: "drift-patterns",
    title: "Drift Patterns",
    category: "music",
    image: {
      src: "/creative/travel/IMG_20250404_081451540_BURST002.jpg.jpeg",
      width: 1200,
      height: 1600,
      blurDataURL: BLUR_DATA_URL,
    },
    description: "Rhythmic experiment that maps AI model outputs to evolving percussion.",
    metadata: {
      year: "2024",
      gear: "Elektron Digitakt",
    },
  },
];

const chatPrompts: ChatPrompt[] = [
  {
    id: "experience",
    label: "Experience",
    prompt: "Summarize Mourya's experience",
  },
  {
    id: "harmoniai",
    label: "HarmoniAI",
    prompt: "Explain the HarmoniAI architecture",
  },
  {
    id: "specialization",
    label: "Tech Focus",
    prompt: "What technologies does Mourya specialize in?",
  },
  {
    id: "projects",
    label: "AI Projects",
    prompt: "Tell me about Mourya's AI projects",
  },
  {
    id: "roles",
    label: "Role Fit",
    prompt: "What roles is Mourya best suited for?",
  },
];

const stackItems: StackItem[] = skillGroups.flatMap((group) =>
  group.items.map((item) => ({
    id: `${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${item
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`,
    name: item,
    category: group.category,
  }))
);

const labs: LabExperiment[] = [
  {
    slug: "rag-retrieval-benchmarking",
    name: "RAG Retrieval Benchmarking",
    goal: "Improve context relevance for HarmoniAI responses.",
    outcome: "Validated retrieval + reasoning patterns for grounded mental health conversations.",
    methods: ["Vector search", "Prompt tuning", "Response evaluation"],
    tags: ["RAG", "LLM", "Evaluation"],
  },
  {
    slug: "multimodal-signal-fusion",
    name: "Multimodal Signal Fusion",
    goal: "Combine voice and survey signals for ToxiTrace predictions.",
    outcome: "Built a pipeline that merges acoustic and questionnaire signals for inference.",
    methods: ["Feature extraction", "Model ensembling", "FastAPI serving"],
    tags: ["ML", "Multimodal", "FastAPI"],
  },
  {
    slug: "content-platform-optimization",
    name: "Content Platform Optimization",
    goal: "Improve publishing performance and UX in the developer blog platform.",
    outcome: "Shipped a responsive content workflow with production deployment on Vercel.",
    methods: ["Next.js rendering", "MongoDB indexing", "Cloud deployment"],
    tags: ["Next.js", "MongoDB", "Performance"],
  },
];

export const portfolioData: PortfolioData = {
  site: {
    config: {
      name: portfolioName,
      title: `${portfolioName} - Portfolio`,
      description: portfolioBio,
      location: portfolioLocation,
      email: portfolioEmail,
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
        description: "Detailed project case studies.",
      },
      {
        title: "Projects",
        href: "/projects",
        description: "Project archive and links.",
      },
      {
        title: "Labs",
        href: "/labs",
        description: "Experiments and technical explorations.",
      },
      {
        title: "About",
        href: "/about",
        description: "Experience and tech stack.",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Collaboration channels.",
      },
    ],
    socialLinks: [
      {
        name: "GitHub",
        href: githubUrl,
      },
      {
        name: "LinkedIn",
        href: linkedInUrl,
      },
      {
        name: "Instagram",
        href: instagramUrl,
      },
      {
        name: "Email",
        href: `mailto:${portfolioEmail}`,
      },
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: "Generative AI Portfolio",
        name: portfolioName,
        title: portfolioTitle,
        intro: portfolioTagline,
        headline: portfolioName,
        subhead: portfolioBio,
        imageAlt: `${portfolioName} portrait`,
        socialLinks: [
          {
            name: "GitHub",
            href: githubUrl,
          },
          {
            name: "LinkedIn",
            href: linkedInUrl,
          },
          {
            name: "Instagram",
            href: instagramUrl,
          },
          {
            name: "Email",
            href: `mailto:${portfolioEmail}`,
          },
        ],
        primaryCta: { label: "View Projects", href: "/projects" },
        secondaryCta: { label: "Contact", href: "/contact" },
      },
      metrics: {
        title: "Profile snapshot",
        items: [
          {
            label: "Experience roles",
            value: "3",
            description: "Generative AI Developer, MERN Developer, and Full Stack Intern.",
          },
          {
            label: "Featured projects",
            value: "3",
            description: "HarmoniAI, ToxiTrace, and Developer Blog Platform.",
          },
          {
            label: "Skill categories",
            value: "6",
            description: "Generative AI, frontend, backend, database, DevOps, and languages.",
          },
        ],
      },
      featuredWork: {
        title: "Project case studies",
        items: [...featuredCaseStudies],
      },
      projects: {
        title: "Projects",
        items: [...projects],
      },
      labs: {
        title: "Labs and experiments",
        items: [...labs],
      },
      creative: {
        badge: "Beyond Code",
        title: "Creative Gallery",
        description:
          "Beyond engineering, I explore creativity through photography, visual arts, travel, and music.",
        categories: creativeCategoryOrder.map((id) => ({ id, label: creativeCategoryLabels[id] })),
        items: [...creativeItems],
      },
      assistant: {
        badge: "AI Copilot",
        title: `Ask about ${portfolioName}`,
        description:
          "An AI-powered assistant trained on my portfolio, experience, and expertise. Ask about my projects, stack, or collaboration fit.",
        greeting:
          "Hi! I can help you explore Mourya's experience, projects, and technical strengths. What would you like to know?",
        inputPlaceholder: `Ask about ${portfolioName}...`,
        prompts: [...chatPrompts],
      },
      cta: {
        title: "Let's build something impactful.",
        description: "Interested in collaborating or discussing AI systems? Feel free to reach out.",
        action: {
          label: "Get in touch",
          href: "/contact",
        },
      },
    },
    about: {
      intro: {
        title: "About",
        description: portfolioBio,
      },
      timeline: {
        title: "Experience",
        items: [
          {
            id: "fynd-gai-dev",
            period: "Sep 2025 - Present",
            title: "FYND - Generative AI Developer",
            description:
              "Developing production-grade AI systems and intelligent agent workflows for enterprise applications.",
          },
          {
            id: "webifii-mern",
            period: "Aug 2025 - Sep 2025",
            title: "Webifii - MERN Stack Developer",
            description:
              "Developed scalable full-stack client applications using MERN technologies and REST API integrations.",
          },
        ],
      },
      stack: {
        title: "Skills",
        items: stackItems,
      },
    },
    work: {
      intro: {
        title: "Work",
        description: "Deep dives into real projects, architecture choices, and shipped outcomes.",
      },
      sectionTitle: "Project details",
      items: [...featuredCaseStudies],
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
        description: "Real-world builds across generative AI, machine learning, and full-stack systems.",
      },
      sectionTitle: "Project archive",
      items: [...projects],
    },
    labs: {
      intro: {
        title: "Labs",
        description: "Hands-on technical experiments that support productized project delivery.",
      },
      sectionTitle: "Experiment log",
      items: [...labs],
    },
    contact: {
      intro: {
        title: "Contact",
        description: "Interested in collaborating or discussing AI systems? Feel free to reach out.",
      },
      channels: [
        {
          label: "Email",
          value: portfolioEmail,
          href: `mailto:${portfolioEmail}`,
        },
        {
          label: "LinkedIn",
          value: "mouryajanekere",
          href: linkedInUrl,
        },
        {
          label: "GitHub",
          value: "Mouryajp",
          href: githubUrl,
        },
        {
          label: "Instagram",
          value: "mouryajanekere",
          href: instagramUrl,
        },
        {
          label: "Location",
          value: portfolioLocation,
          href: "https://maps.google.com?q=Bangalore%2C%20India",
        },
      ],
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
        title: "Portfolio Copilot",
        description: "Ask anything about experience, projects, skills, or collaboration fit.",
      },
      emptyStateDescription: "Try one of the prompts below to explore Mourya's work.",
      prompts: [...chatPrompts],
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

export const heroContent = portfolioData.pages.home.hero;
export const impactMetrics = portfolioData.pages.home.metrics.items;
export const caseStudies = portfolioData.pages.home.featuredWork.items;
export const projectsContent = portfolioData.pages.home.projects.items;
export const labsContent = portfolioData.pages.home.labs.items;
export const timeline = portfolioData.pages.about.timeline.items;
export const stack = portfolioData.pages.about.stack.items;
