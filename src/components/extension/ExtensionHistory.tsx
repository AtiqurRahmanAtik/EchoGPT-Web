"use client";

import {
  Clock3,
  MessageSquare,
  Trash2,
} from "lucide-react";

import type { ExtensionHistoryItem } from "@/types/extension";

interface ExtensionHistoryProps {
  history: ExtensionHistoryItem[];
  onSelect: (item: ExtensionHistoryItem) => void;
  onDelete: (id: string) => void;
}

export default function ExtensionHistory({
  history,
  onSelect,
  onDelete,
}: ExtensionHistoryProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-2.5 flex items-center justify-between sm:mb-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
          Recent History
        </h2>

        <Clock3
          size={13}
          className="shrink-0 text-slate-600 sm:h-[14px] sm:w-[14px]"
        />
      </div>

      {/* History List */}
      <div className="space-y-1">
        {history.map((item) => (
          <div
            key={item.id}
            className="group flex min-w-0 items-center gap-1 rounded-xl transition-colors duration-200 hover:bg-white/5"
          >
            {/* History Item */}
            <button
              type="button"
              onClick={() => onSelect(item)}
              className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 sm:gap-3 sm:px-3 sm:py-3"
            >
              <MessageSquare
                size={14}
                className="shrink-0 text-slate-500 transition-colors group-hover:text-slate-400 sm:h-[15px] sm:w-[15px]"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium leading-5 text-slate-300">
                  {item.title}
                </p>

                <p className="truncate text-[10px] leading-4 text-slate-600 sm:text-[11px]">
                  {item.preview}
                </p>
              </div>
            </button>

            {/* Delete */}
            <button
              type="button"
              onClick={() => onDelete(item.id)}
              aria-label={`Delete ${item.title}`}
              className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-600 opacity-100 transition-colors duration-200 hover:bg-red-500/10 hover:text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 sm:mr-1.5 sm:opacity-0 sm:group-hover:opacity-100"
            >
              <Trash2
                size={12}
                className="sm:h-[13px] sm:w-[13px]"
              />
            </button>
          </div>
        ))}

        {/* Empty State */}
        {history.length === 0 && (
          <div className="py-6 text-center sm:py-8">
            <MessageSquare
              size={18}
              className="mx-auto mb-2 text-slate-700"
            />

            <p className="text-[11px] leading-5 text-slate-600 sm:text-xs">
              No history yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}