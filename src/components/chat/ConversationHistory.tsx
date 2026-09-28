"use client";

import { MessageSquare, Plus, Trash2 } from "lucide-react";
import type { Conversation } from "@/types/chat";

interface ConversationHistoryProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  onDelete: (id: string) => void;
}

export default function ConversationHistory({
  conversations,
  activeId,
  onSelect,
  onNewChat,
  onDelete,
}: ConversationHistoryProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Recent chats
        </h2>

        <button
          onClick={onNewChat}
          aria-label="Create new chat"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <Plus size={17} />
        </button>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto">
        {conversations.map((conversation) => {
          const isActive = conversation.id === activeId;

          return (
            <div
              key={conversation.id}
              className={`group flex items-center gap-2 rounded-xl transition ${
                isActive
                  ? "bg-violet-500/15 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <button
                onClick={() => onSelect(conversation.id)}
                className="flex min-w-0 flex-1 items-center gap-3 px-3 py-3 text-left"
              >
                <MessageSquare
                  size={16}
                  className="shrink-0"
                />

                <span className="truncate text-sm">
                  {conversation.title}
                </span>
              </button>

              <button
                onClick={() => onDelete(conversation.id)}
                aria-label={`Delete ${conversation.title}`}
                className="mr-2 rounded-md p-1.5 text-slate-500 opacity-0 transition hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100 focus:opacity-100"
              >
                <Trash2 size={14} />
              </button>
            </div>
          );
        })}

        {conversations.length === 0 && (
          <p className="px-3 py-6 text-center text-sm text-slate-500">
            No conversations yet.
          </p>
        )}
      </div>
    </div>
  );
}