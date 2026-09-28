import type {
  ExtensionHistoryItem,
  ExtensionModel,
  QuickAction,
} from "@/types/extension";

export const extensionModels: ExtensionModel[] = [
  {
    id: "echogpt",
    name: "EchoGPT",
    description: "Balanced AI assistant",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Advanced AI model",
  },
  {
    id: "claude",
    name: "Claude",
    description: "Writing and analysis",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Research and productivity",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: "summarize",
    label: "Summarize",
    prompt: "Summarize the following text:",
  },
  {
    id: "improve",
    label: "Improve Writing",
    prompt: "Improve the following writing and make it more professional:",
  },
  {
    id: "explain",
    label: "Explain",
    prompt: "Explain the following in simple terms:",
  },
  {
    id: "translate",
    label: "Translate",
    prompt: "Translate the following text into English:",
  },
];

export const extensionHistory: ExtensionHistoryItem[] = [
  {
    id: "history-1",
    title: "React interview questions",
    preview: "Explain React hooks...",
    createdAt: "Today",
  },
  {
    id: "history-2",
    title: "Professional email",
    preview: "Write a professional email...",
    createdAt: "Yesterday",
  },
  {
    id: "history-3",
    title: "JavaScript explanation",
    preview: "Explain closures in JavaScript...",
    createdAt: "2 days ago",
  },
];