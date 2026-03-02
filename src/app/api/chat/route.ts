import { NextResponse } from "next/server";

import type { ChatRequest } from "@/lib/ai/types";
import { runWorkflow } from "@/lib/ai/workflow";
import { streamAssistantResponse } from "@/lib/ai/streaming";

export const runtime = "nodejs";

const isValidRequest = (payload: unknown): payload is ChatRequest => {
  if (!payload || typeof payload !== "object") return false;
  const maybe = payload as ChatRequest;
  return Array.isArray(maybe.messages);
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!isValidRequest(body)) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  let prompt = "";
  try {
    const workflow = await runWorkflow(body);
    prompt = workflow.prompt;
  } catch {
    return NextResponse.json({ error: "Failed to prepare chat response." }, { status: 500 });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        await streamAssistantResponse(prompt, (token) => {
          controller.enqueue(encoder.encode(token));
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected error.";
        controller.enqueue(encoder.encode(`\n${message}`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
