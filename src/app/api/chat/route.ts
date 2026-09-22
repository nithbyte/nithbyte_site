import { NextRequest, NextResponse } from "next/server";
import { getAIProvider } from "@/lib/ai/provider";
import { getNithByteSystemPrompt } from "@/lib/ai/nithbyte-system-prompt";
import { AI_CONFIG } from "@/lib/ai/config";

// Sliding window rate limiter (generous limit for development & normal user interaction)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 120; // 120 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Check Rate Limit
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a few seconds before sending another message." },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "The 'messages' field must be a non-empty array." },
        { status: 400 }
      );
    }

    // Enforce max message history window to prevent excessive token usage
    const trimmedMessages = messages.slice(-AI_CONFIG.maxMessagesHistory);

    for (const msg of trimmedMessages) {
      if (!msg || typeof msg !== "object") {
        return NextResponse.json({ error: "Malformed message object." }, { status: 400 });
      }
      if (msg.role !== "user" && msg.role !== "assistant") {
        return NextResponse.json({ error: "Message role must be 'user' or 'assistant'." }, { status: 400 });
      }
      if (typeof msg.content !== "string" || !msg.content.trim()) {
        return NextResponse.json({ error: "Message content cannot be empty." }, { status: 400 });
      }
      if (msg.content.length > AI_CONFIG.maxMessageLength) {
        return NextResponse.json(
          { error: `Message content exceeds maximum length of ${AI_CONFIG.maxMessageLength} characters.` },
          { status: 400 }
        );
      }
    }

    // 3. Obtain System Prompt & Stream from Gemini Provider
    const systemPrompt = getNithByteSystemPrompt();
    const provider = getAIProvider();

    const stream = await provider.streamResponse({
      messages: trimmedMessages,
      systemPrompt,
    });

    // 4. Return Streaming Response
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: any) {
    console.error("[NithByte AI Chat API Error]:", error?.message || error);

    const errorMessage = error?.message?.includes("quota") || error?.message?.includes("429")
      ? "AI quota limit reached. Retrying shortly..."
      : error?.message || "Something interrupted the connection with NithByte AI. Please try again.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
