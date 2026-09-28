"use client";

import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";

import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatWindow from "@/components/chat/ChatWindow";

import { aiModels, initialConversations } from "@/data/chat";

import type { Conversation, Message } from "@/types/chat";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createMockResponse(message: string, modelName: string) {
  return `Thanks for your question!

You asked: "${message}"

I'm responding as ${modelName} in this demo.

This is a mock AI response to demonstrate the EchoGPT chat interface. When you connect a real AI API, this area will display the actual generated response.

You can continue the conversation by sending another message.`;
}

export default function AppPage() {
  const [conversations, setConversations] = useState<Conversation[]>(
    initialConversations
  );

  const [activeId, setActiveId] = useState<string | null>(
    initialConversations[0]?.id ?? null
  );

  const [selectedModel, setSelectedModel] = useState("echogpt");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const activeConversation = conversations.find(
    (conversation) => conversation.id === activeId
  );

  const messages = activeConversation?.messages ?? [];

  const handleNewChat = () => {
    const newConversation: Conversation = {
      id: createId(),
      title: "New conversation",
      updatedAt: "Just now",
      messages: [],
    };

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setActiveId(newConversation.id);
    setIsSidebarOpen(false);
  };

  const handleSelectConversation = (id: string) => {
    setActiveId(id);
  };

  const handleDeleteConversation = (id: string) => {
    setConversations((previous) =>
      previous.filter((conversation) => conversation.id !== id)
    );

    if (activeId === id) {
      const remaining = conversations.filter(
        (conversation) => conversation.id !== id
      );

      setActiveId(remaining[0]?.id ?? null);
    }
  };

  const handleSendMessage = async (content: string) => {
    let conversationId = activeId;

    if (!conversationId) {
      conversationId = createId();

      const newConversation: Conversation = {
        id: conversationId,
        title: content.slice(0, 35),
        updatedAt: "Just now",
        messages: [],
      };

      setConversations((previous) => [
        newConversation,
        ...previous,
      ]);

      setActiveId(conversationId);
    }

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    };

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              title:
                conversation.messages.length === 0
                  ? content.slice(0, 35)
                  : conversation.title,
              updatedAt: "Just now",
              messages: [
                ...conversation.messages,
                userMessage,
              ],
            }
          : conversation
      )
    );

    setIsLoading(true);

    // Demo delay to simulate an AI response.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const selectedModelName =
      aiModels.find((model) => model.id === selectedModel)?.name ??
      "EchoGPT";

    const assistantMessage: Message = {
      id: createId(),
      role: "assistant",
      content: createMockResponse(content, selectedModelName),
      createdAt: new Date().toISOString(),
    };

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                assistantMessage,
              ],
            }
          : conversation
      )
    );

    setIsLoading(false);
  };

  return (
    <div className="flex h-dvh overflow-hidden bg-[#0b0b14] text-white">
      <ChatSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        models={aiModels}
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
        conversations={conversations}
        activeId={activeId}
        onSelectConversation={handleSelectConversation}
        onNewChat={handleNewChat}
        onDeleteConversation={handleDeleteConversation}
      />

      <section className="flex min-w-0 flex-1 flex-col">
        {/* Top navigation */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open navigation"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white md:hidden"
            >
              <Menu size={20} />
            </button>

            <div className="flex items-center gap-2 md:hidden">
              <Sparkles size={18} className="text-violet-400" />
              <span className="font-semibold">
                EchoGPT
              </span>
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">
                {activeConversation?.title ?? "New conversation"}
              </p>
              <p className="text-xs text-slate-500">
                AI Workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 sm:inline-flex">
              ● Demo Mode
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-300">
              AR
            </div>
          </div>
        </header>

        {/* Chat area */}
        <ChatWindow
          messages={messages}
          onSend={handleSendMessage}
          isLoading={isLoading}
        />
      </section>
    </div>
  );
}