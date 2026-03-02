import { NextResponse } from "next/server";

import { createChatService } from "@/lib/ai/service";
import type { ChatRequest } from "@/lib/ai/types";

const isValidRequest = (payload: unknown): payload is ChatRequest => {
  if (!payload || typeof payload !== "object") return false;
  const maybe = payload as ChatRequest;
  return Array.isArray(maybe.messages);
};

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;

  if (!isValidRequest(body)) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const chatService = createChatService();
  const response = await chatService.reply(body);

  return NextResponse.json(response);
}
