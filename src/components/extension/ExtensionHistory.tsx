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
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Recent History
        </h2>

        <Clock3 size={14} className="text-slate-600" />
      </div>

      <div className="space-y-1">
        {history.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-2 rounded-xl transition hover:bg-white/5"
          >
            <button
              onClick={() => onSelect(item)}
              className="flex min-w-0 flex-1 items-center gap-3 px-2.5 py-2.5 text-left"
            >
              <MessageSquare
                size={15}
                className="shrink-0 text-slate-500"
              />

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-300">
                  {item.title}
                </p>

                <p className="truncate text-[11px] text-slate-600">
                  {item.preview}
                </p>
              </div>
            </button>

            <button
              onClick={() => onDelete(item.id)}
              aria-label={`Delete ${item.title}`}
              className="mr-2 rounded-md p-1.5 text-slate-600 opacity-0 transition hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100 focus:opacity-100"
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}

        {history.length === 0 && (
          <p className="py-6 text-center text-xs text-slate-600">
            No history yet.
          </p>
        )}
      </div>
    </div>
  );
}