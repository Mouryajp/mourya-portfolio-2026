import knowledgeBase from "@/data/knowledge-base.json";
import type { KnowledgeDocument } from "@/lib/ai/types";

const documents: KnowledgeDocument[] = knowledgeBase as KnowledgeDocument[];

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
