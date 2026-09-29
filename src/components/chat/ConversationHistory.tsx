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
      {/* Header */}
      <div className="mb-2.5 flex shrink-0 items-center justify-between sm:mb-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
          Recent chats
        </h2>

        <button
          type="button"
          onClick={onNewChat}
          aria-label="Create new chat"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:h-9 sm:w-9"
        >
          <Plus size={16} className="sm:h-[17px] sm:w-[17px]" />
        </button>
      </div>

      {/* Conversation List */}
      <div className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
        {conversations.map((conversation) => {
          const isActive = conversation.id === activeId;

          return (
            <div
              key={conversation.id}
              className={`group flex min-w-0 items-center gap-1 rounded-xl transition-colors duration-200 ${
                isActive
                  ? "bg-violet-500/15 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {/* Conversation Button */}
              <button
                type="button"
                onClick={() => onSelect(conversation.id)}
                aria-current={isActive ? "true" : undefined}
                className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 sm:gap-3 sm:px-3 sm:py-3"
              >
                <MessageSquare
                  size={15}
                  className={`shrink-0 ${
                    isActive
                      ? "text-violet-300"
                      : "text-slate-500 group-hover:text-slate-300"
                  } sm:h-4 sm:w-4`}
                />

                <span className="min-w-0 truncate text-xs sm:text-sm">
                  {conversation.title}
                </span>
              </button>

              {/* Delete Button */}
              <button
                type="button"
                onClick={() => onDelete(conversation.id)}
                aria-label={`Delete ${conversation.title}`}
                className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-500 opacity-100 transition-colors duration-200 hover:bg-red-500/10 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 sm:mr-1.5 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <Trash2 size={13} className="sm:h-[14px] sm:w-[14px]" />
              </button>
            </div>
          );
        })}

        {/* Empty State */}
        {conversations.length === 0 && (
          <div className="px-3 py-6 text-center sm:py-8">
            <MessageSquare
              size={20}
              className="mx-auto mb-2 text-slate-600"
            />

            <p className="text-xs leading-5 text-slate-500 sm:text-sm">
              No conversations yet.
            </p>

            <button
              type="button"
              onClick={onNewChat}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-violet-400 transition-colors hover:bg-violet-500/10 hover:text-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <Plus size={14} />
              Start a chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}