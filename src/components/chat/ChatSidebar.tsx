"use client";

import { X, Sparkles, Plus, Settings, CircleHelp } from "lucide-react";
import ModelSelector from "./ModelSelector";
import ConversationHistory from "./ConversationHistory";
import type { AIModel, Conversation } from "@/types/chat";

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
      {isOpen && (
        <button
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-white/10 bg-[#10101b] p-4 transition-transform duration-300 md:static md:z-auto md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles size={19} className="text-white" />
            </div>

            <span className="text-lg font-bold tracking-tight text-white">
              Echo<span className="text-violet-400">GPT</span>
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <button
          onClick={() => {
            onNewChat();
            onClose();
          }}
          className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
        >
          <Plus size={17} />
          New Chat
        </button>

        <div className="mb-6">
          <label className="mb-2 block text-xs font-medium text-slate-500">
            AI MODEL
          </label>

          <ModelSelector
            models={models}
            value={selectedModel}
            onChange={onModelChange}
          />
        </div>

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

        <div className="mt-4 space-y-1 border-t border-white/10 pt-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
            <Settings size={17} />
            Settings
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
            <CircleHelp size={17} />
            Help & Support
          </button>

          <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
              AR
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                Atiqur Rahman
              </p>
              <p className="text-xs text-slate-500">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}