export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
  isStreaming?: boolean;
  isError?: boolean;
  brief?: ProjectBriefData;
}

export interface ProjectBriefData {
  projectType: string;
  businessType: string;
  stage: string;
  platforms: string[];
  coreRequirements: string[];
  aiRequirement?: string;
  commerceRequirement?: string;
  automationRequirement?: string;
  potentialCapabilities: string[];
  nextStep: string;
}

export interface ChatRequestPayload {
  messages: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
}

export interface AIProvider {
  streamResponse(input: {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
    systemPrompt: string;
  }): Promise<ReadableStream<Uint8Array>>;
}
