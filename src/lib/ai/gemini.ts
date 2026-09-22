import { GoogleGenAI } from "@google/genai";
import { AI_CONFIG } from "./config";
import { AIProvider } from "./types";

export class GeminiProvider implements AIProvider {
  private client: GoogleGenAI;

  constructor() {
    if (!AI_CONFIG.apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured.");
    }
    this.client = new GoogleGenAI({
      apiKey: AI_CONFIG.apiKey,
    });
  }

  async streamResponse(input: {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
    systemPrompt: string;
  }): Promise<ReadableStream<Uint8Array>> {
    // Format conversation history for Gemini: 'user' or 'model'
    const contents = input.messages.map((m) => ({
      role: m.role === "assistant" ? ("model" as const) : ("user" as const),
      parts: [{ text: m.content }],
    }));

    const responseStream = await this.client.models.generateContentStream({
      model: AI_CONFIG.model,
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
