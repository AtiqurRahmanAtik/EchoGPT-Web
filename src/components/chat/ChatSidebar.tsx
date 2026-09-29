"use client";

import { X, Sparkles, Plus, Settings, CircleHelp } from "lucide-react";
import ModelSelector from "./ModelSelector";
import ConversationHistory from "./ConversationHistory";
import type { AIModel, Conversation } from "@/types/chat";
import Link from "next/link";

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  models: AIModel[];
  selectedModel: string;
  onModelChange: (id: string) => void;
  conversations: Conversation[];
  activeId: string | null;
  onSelectConversation: (id: string) => void;
  onNewChat: () => void;
  onDeleteConversation: (id: string) => void;
}

export default function ChatSidebar({
  isOpen,
  onClose,
  models,
  selectedModel,
  onModelChange,
  conversations,
  activeId,
  onSelectConversation,
  onNewChat,
  onDeleteConversation,
}: ChatSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(85vw,320px)] flex-col border-r border-white/10 bg-[#10101b] p-3 shadow-2xl shadow-black/30 transition-transform duration-300 sm:w-[300px] sm:p-4 md:static md:z-auto md:w-[280px] md:translate-x-0 md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="mb-5 flex shrink-0 items-center justify-between sm:mb-6 md:mb-8">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5"
            aria-label="EchoGPT home"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles size={19} className="text-white" />
            </div>

            <span className="text-lg font-bold tracking-tight text-white">
              Echo<span className="text-violet-400">GPT</span>
            </span>
          </Link>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* New Chat */}
        <button
          type="button"
          onClick={() => {
            onNewChat();
            onClose();
          }}
          className="mb-5 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10101b] sm:mb-6"
        >
          <Plus size={17} />
          New Chat
        </button>

        {/* Model Selector */}
        <div className="mb-5 shrink-0 sm:mb-6">
          <label
            htmlFor="chat-ai-model"
            className="mb-2 block text-xs font-medium tracking-wide text-slate-500"
          >
            AI MODEL
          </label>

          <ModelSelector
            models={models}
            value={selectedModel}
            onChange={onModelChange}
          />
        </div>

        {/* Conversation History */}
        <div className="min-h-0 flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          <ConversationHistory
            conversations={conversations}
            activeId={activeId}
            onSelect={(id) => {
              onSelectConversation(id);
              onClose();
            }}
            onNewChat={onNewChat}
            onDelete={onDeleteConversation}
          />
        </div>

        {/* Bottom Actions */}
        <div className="mt-3 shrink-0 space-y-1 border-t border-white/10 pt-3 sm:mt-4 sm:pt-4">
          {/* Settings */}
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-colors duration-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:py-3"
          >
            <Settings size={17} className="shrink-0" />
            <span>Settings</span>
          </button>

          {/* Help */}
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-colors duration-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:py-3"
          >
            <CircleHelp size={17} className="shrink-0" />
            <span>Help & Support</span>
          </button>

          {/* User Profile */}
          <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 p-2.5 sm:mt-3 sm:p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
              AR
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                Atiqur Rahman
              </p>

              <p className="text-xs text-slate-500">
                Free Plan
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}