// src/data/chat.ts

import type { AIModel, Conversation } from "@/types/chat";

export const aiModels: AIModel[] = [
  {
    id: "echogpt",
    name: "EchoGPT",
    description: "Balanced AI assistant",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Advanced reasoning and creativity",
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

export const initialConversations: Conversation[] = [
  {
    id: "conversation-1",
    title: "Getting started with Next.js",
    updatedAt: "Today",
    messages: [
      {
        id: "message-1",
        role: "user",
        content: "What is Next.js?",
        createdAt: new Date().toISOString(),
      },
      {
        id: "message-2",
        role: "assistant",
        content:
          "Next.js is a React framework for building full-stack web applications. It provides features like file-based routing, server-side rendering, static generation, and API routes.",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "conversation-2",
    title: "React interview preparation",
    updatedAt: "Yesterday",
    messages: [
      {
        id: "message-3",
        role: "user",
        content: "Explain React hooks.",
        createdAt: new Date().toISOString(),
      },
      {
        id: "message-4",
        role: "assistant",
        content:
          "React Hooks are functions that let functional components use React features such as state and lifecycle behavior. Common examples include useState, useEffect, useContext, and useRef.",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "conversation-3",
    title: "Build a portfolio website",
    updatedAt: "Previous 7 days",
    messages: [],
  },
];