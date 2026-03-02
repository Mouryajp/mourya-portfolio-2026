import { getCaseStudies, getLabs, getProjects, getSiteConfig } from "@/lib/content";
import type { ChatMessage, ChatRequest, ChatResponse } from "@/lib/ai/types";

export type ChatService = {
  reply: (request: ChatRequest) => Promise<ChatResponse>;
};

const createMessageId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg_${Date.now()}`;
};

const buildMockReply = (request: ChatRequest): ChatMessage => {
  const caseStudies = getCaseStudies();
  const projects = getProjects();
  const labs = getLabs();
  const siteConfig = getSiteConfig();
  const lastUserMessage = [...request.messages]
    .reverse()
    .find((message) => message.role === "user");
  const prompt = lastUserMessage?.content?.toLowerCase() ?? "";

  const mentionsProjects = prompt.includes("project") || prompt.includes("build");
  const mentionsLabs = prompt.includes("lab") || prompt.includes("experiment");
  const mentionsWork = prompt.includes("case") || prompt.includes("work");

  if (mentionsWork) {
    return {
      role: "assistant",
      content: `Here are the latest case studies: ${caseStudies
        .map((study) => `${study.title} — ${study.impact}`)
        .join(" | ")}`,
    };
  }

  if (mentionsProjects) {
    return {
      role: "assistant",
      content: `Current product builds include ${projects
        .map((project) => project.name)
        .join(", ")}. Want a deeper dive into any of them?`,
    };
  }

  if (mentionsLabs) {
    return {
      role: "assistant",
      content: `Recent experiments: ${labs.map((lab) => lab.name).join(", ")}.`,
    };
  }

  return {
    role: "assistant",
    content: `I am ${siteConfig.name}. Ask me about AI systems, collaborations, or the tools I use.`,
  };
};

export const createChatService = (): ChatService => {
  return {
    reply: async (request) => {
      const message = buildMockReply(request);
      return {
        id: createMessageId(),
        createdAt: new Date().toISOString(),
        message,
      };
    },
  };
};
