import { Bot, BrainCircuit, Cpu, Sparkles } from "lucide-react";

export const models = [
  {
    name: "ChatGPT",
    provider: "OpenAI",
    description:
      "A versatile AI assistant for writing, coding, research, and everyday tasks.",
    icon: Bot,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    name: "Gemini",
    provider: "Google",
    description:
      "An AI assistant designed to help you explore ideas and work across different tasks.",
    icon: Sparkles,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    name: "Claude",
    provider: "Anthropic",
    description:
      "An AI assistant for thoughtful writing, analysis, and problem-solving.",
    icon: BrainCircuit,
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    name: "More Models",
    provider: "Explore",
    description:
      "Discover additional AI experiences as supported integrations become available.",
    icon: Cpu,
    color: "bg-violet-500/10 text-violet-400",
  },
];