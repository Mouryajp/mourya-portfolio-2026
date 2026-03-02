import type { ChatRequest } from "@/lib/ai/types";
import { buildContextBlock } from "@/lib/ai/rag";

export type WorkflowState = {
  query: string;
  context: string;
  prompt: string;
  history: string;
};

const buildHistory = (request: ChatRequest) => {
  return request.messages
    .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
    .join("\n");
};

const createPrompt = ({ query, context, history }: WorkflowState) => {
  const contextBlock = context ? `Relevant context:\n${context}` : "Relevant context: None";

  return [
    "You are a portfolio copilot for a generative AI practitioner.",
    "Answer clearly, concisely, and reference portfolio facts when relevant.",
    contextBlock,
    "Conversation:",
    history || "No prior messages.",
    `User question: ${query}`,
    "Answer:",
  ].join("\n\n");
};

export const runWorkflow = async (request: ChatRequest) => {
  const lastUserMessage = [...request.messages]
    .reverse()
    .find((message) => message.role === "user");
  const query = lastUserMessage?.content ?? "";
  const state: WorkflowState = {
    query,
    history: buildHistory(request),
    context: buildContextBlock(query),
    prompt: "",
  };
  const prompt = createPrompt(state);

  return {
    prompt,
    context: state.context,
  };
};
