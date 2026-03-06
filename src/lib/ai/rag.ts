import { portfolioData } from "@/data/portfolio";
import type { KnowledgeDocument } from "@/lib/ai/types";

const documents: KnowledgeDocument[] = [
  {
    id: "portfolio-overview",
    title: "Portfolio overview",
    content: `${portfolioData.site.config.name} is a ${portfolioData.pages.home.hero.title}. ${portfolioData.pages.home.hero.subhead}`,
    tags: ["overview", "portfolio", "intro"],
  },
  ...portfolioData.pages.about.timeline.items.map((entry) => ({
    id: entry.id,
    title: entry.title,
    content: `${entry.period}. ${entry.description}`,
    tags: ["experience", "timeline"],
  })),
  ...portfolioData.pages.projects.items.map((project) => ({
    id: project.slug,
    title: project.name,
    content: `${project.description} Technologies: ${project.tags.join(", ")}. Links: ${project.links
      .map((link) => `${link.label} (${link.href})`)
      .join(", ")}`,
    tags: ["project", ...project.tags.map((tag) => tag.toLowerCase())],
  })),
  ...portfolioData.pages.about.stack.items.reduce<KnowledgeDocument[]>((acc, skill) => {
    const docId = `skills-${skill.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const existing = acc.find((doc) => doc.id === docId);
    if (existing) {
      existing.content = `${existing.content}, ${skill.name}`;
      return acc;
    }

    acc.push({
      id: docId,
      title: `${skill.category} skills`,
      content: skill.name,
      tags: ["skills", skill.category.toLowerCase()],
    });
    return acc;
  }, []),
  {
    id: "creative-interests",
    title: "Creative interests",
    content: `Creative categories: ${portfolioData.pages.home.creative.categories
      .map((category) => category.label)
      .join(", ")}.`,
    tags: ["creative", "interests"],
  },
];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const scoreDocument = (queryTokens: string[], doc: KnowledgeDocument) => {
  if (queryTokens.length === 0) return 0;
  const docTokens = normalize(`${doc.title} ${doc.content} ${doc.tags.join(" ")}`);
  let score = 0;
  for (const token of queryTokens) {
    if (docTokens.includes(token)) score += 1;
  }
  return score / queryTokens.length;
};

export const retrieveRelevantDocs = (query: string, topK = 3) => {
  const tokens = normalize(query);
  return documents
    .map((doc) => ({ doc, score: scoreDocument(tokens, doc) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((item) => item.doc);
};

export const buildContextBlock = (query: string) => {
  const docs = retrieveRelevantDocs(query);
  if (docs.length === 0) return "";

  return docs.map((doc) => `Title: ${doc.title}\nNotes: ${doc.content}`).join("\n\n");
};
