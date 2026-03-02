export type ChatRole = "system" | "user" | "assistant";

export type ChatMessage = {
  id?: string;
  role: ChatRole;
  content: string;
  createdAt?: string;
};

export type ChatRequest = {
  messages: ChatMessage[];
  context?: {
    page?: string;
    intent?: string;
  };
};

export type ChatResponse = {
  id: string;
  createdAt: string;
  message: ChatMessage;
};
