export type MessageSender = "assistant" | "user" | "system";

export type MessageType =
  | "text"
  | "options"
  | "solution_diagram"
  | "project_brief"
  | "service_discovery"
  | "service_detail";

export interface ChatOption {
  id: string;
  label: string;
  description?: string;
  category?: string;
  icon?: string;
  actionPayload?: any;
}

export interface SolutionFlowStage {
  step: "idea" | "understand" | "solution" | "technology" | "next_step";
  label: string;
  title: string;
  desc: string;
  techTags: string[];
}

export interface ProjectBrief {
  projectType: string;
  businessType: string;
  projectStage: string;
  coreProblem: string;
  requirements: string[];
  suggestedCapabilities: string[];
  potentialTech: string[];
  nextStep: string;
  aiNeeded?: string;
  commerceNeeded?: string;
  platforms?: string[];
}

export interface ServicePillar {
  id: string;
  tag: "BUILD" | "CONNECT" | "SELL" | "GROW" | "INTELLIGENCE";
  title: string;
  subtitle: string;
  summary: string;
  capabilities: { name: string; description: string }[];
  techStack: string[];
  deliverables: string[];
  ctaText: string;
}

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  timestamp: string;
  text?: string;
  type?: MessageType;
  options?: ChatOption[];
  solutionData?: {
    stages: SolutionFlowStage[];
    currentActiveIndex: number;
    summary: string;
  };
  briefData?: ProjectBrief;
  serviceData?: ServicePillar;
  isTyping?: boolean;
}

export interface GuidedDiscoveryAnswers {
  projectType?: string;
  targetAudience?: string;
  coreProblem?: string;
  stage?: string;
  platforms?: string[];
  aiRequirement?: string;
  commerceRequirement?: string;
  existingSystem?: string;
}
