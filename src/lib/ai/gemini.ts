import { GoogleGenAI } from "@google/genai";
import { AI_CONFIG } from "./config";
import { AIProvider } from "./types";

export class GeminiProvider implements AIProvider {
  private client: GoogleGenAI | null = null;

  private getClient(): GoogleGenAI {
    const key = process.env.GEMINI_API_KEY || AI_CONFIG.apiKey;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not configured in .env.local.");
    }
    if (!this.client) {
      this.client = new GoogleGenAI({ apiKey: key });
    }
    return this.client;
  }

  async streamResponse(input: {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
    systemPrompt: string;
  }): Promise<ReadableStream<Uint8Array>> {
    const client = this.getClient();
    const model = process.env.GEMINI_MODEL || AI_CONFIG.model || "gemini-flash-latest";

    // 1. Sanitize and normalize conversation turns for Gemini
    const rawContents = input.messages
      .filter((m) => m.content && m.content.trim().length > 0)
      .map((m) => ({
        role: m.role === "assistant" ? ("model" as const) : ("user" as const),
        parts: [{ text: m.content }],
      }));

    const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];
    for (const msg of rawContents) {
      if (contents.length === 0 && msg.role === "model") {
        // Skip static initial welcome message so conversation cleanly starts with a user turn
        continue;
      }
      if (contents.length > 0 && contents[contents.length - 1].role === msg.role) {
        // Merge consecutive turns of same role
        contents[contents.length - 1].parts[0].text += `\n\n${msg.parts[0].text}`;
      } else {
        contents.push({
          role: msg.role,
          parts: [{ text: msg.parts[0].text }],
        });
      }
    }

    // Ensure we have at least one message
    if (contents.length === 0 && input.messages.length > 0) {
      contents.push({
        role: "user",
        parts: [{ text: input.messages[input.messages.length - 1].content || "Hello" }],
      });
    }

    const responseStream = await client.models.generateContentStream({
      model,
      contents,
      config: {
        systemInstruction: input.systemPrompt,
        maxOutputTokens: AI_CONFIG.maxOutputTokens,
        temperature: AI_CONFIG.temperature,
      },
    });

    const encoder = new TextEncoder();

    return new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });
  }
}

