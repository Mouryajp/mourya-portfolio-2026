import { GoogleGenerativeAI } from "@google/generative-ai";

const DEFAULT_MODEL_CANDIDATES = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash-latest",
];

const getModelCandidates = (availableModels: string[]) => {
  const configured = process.env.GEMINI_MODEL;
  return [...new Set([configured, ...availableModels, ...DEFAULT_MODEL_CANDIDATES].filter(Boolean))] as string[];
};

const isModelNotFoundError = (error: unknown) => {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return message.includes("404") || message.includes("not found") || message.includes("listmodels");
};

const isQuotaExceededError = (error: unknown) => {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return message.includes("429") || message.includes("quota exceeded") || message.includes("too many requests");
};

const extractRetrySeconds = (error: unknown) => {
  if (!(error instanceof Error)) return null;
  const match = error.message.match(/retry in ([\d.]+)s?/i) ?? error.message.match(/retryDelay":"(\d+)s"/i);
  if (!match?.[1]) return null;
  const value = Number.parseFloat(match[1]);
  if (Number.isNaN(value)) return null;
  return Math.ceil(value);
};

const streamFallbackMessage = async (message: string, onToken: (token: string) => void) => {
  for (const word of message.split(" ")) {
    onToken(`${word} `);
    await new Promise((resolve) => setTimeout(resolve, 18));
  }
};

type ListModelsResponse = {
  models?: Array<{
    name?: string;
    supportedGenerationMethods?: string[];
  }>;
};

const getAvailableModels = async (apiKey: string): Promise<string[]> => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`
    );
    if (!response.ok) return [];

    const payload = (await response.json()) as ListModelsResponse;
    return (payload.models ?? [])
      .filter((model) => model.name && model.supportedGenerationMethods?.includes("generateContent"))
      .map((model) => model.name!.replace(/^models\//, ""));
  } catch {
    return [];
  }
};

export const streamAssistantResponse = async (prompt: string, onToken: (token: string) => void) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const fallback = "AI streaming is not configured. Add GEMINI_API_KEY to enable live responses.";
    await streamFallbackMessage(fallback, onToken);
    return;
  }

  const client = new GoogleGenerativeAI(apiKey);
  const availableModels = await getAvailableModels(apiKey);
  const candidates = getModelCandidates(availableModels);
  let lastError: unknown = null;

  for (const modelName of candidates) {
    try {
      const model = client.getGenerativeModel({ model: modelName });
      const result = await model.generateContentStream(prompt);

      for await (const chunk of result.stream) {
        const token = chunk.text();
        if (token) {
          onToken(token);
        }
      }
      return;
    } catch (error) {
      lastError = error;
      if (isModelNotFoundError(error)) {
        continue;
      }
      if (isQuotaExceededError(error)) {
        const retrySeconds = extractRetrySeconds(error);
        const quotaMessage = retrySeconds
          ? `I hit the current Gemini quota limit. Please try again in about ${retrySeconds} seconds, or add billing in Google AI Studio to increase limits.`
          : "I hit the current Gemini quota limit. Please try again shortly, or add billing in Google AI Studio to increase limits.";
        await streamFallbackMessage(quotaMessage, onToken);
        return;
      }
      throw error;
    }
  }

  throw new Error(
    `No supported Gemini model found. Tried: ${candidates.join(", ")}. Last error: ${
      lastError instanceof Error ? lastError.message : "unknown error"
    }`
  );
};
