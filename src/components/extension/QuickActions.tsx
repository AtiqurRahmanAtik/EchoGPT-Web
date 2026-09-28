"use client";

import {
  FileText,
  Languages,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import type { QuickAction } from "@/types/extension";

interface QuickActionsProps {
  actions: QuickAction[];
  onSelect: (prompt: string) => void;
}

const icons = {
  summarize: FileText,
  improve: Sparkles,
  explain: Lightbulb,
  translate: Languages,
};

export default function QuickActions({
  actions,
  onSelect,
}: QuickActionsProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Quick Actions
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => {
          const Icon =
            icons[action.id as keyof typeof icons] ?? Sparkles;

          return (
            <button
              key={action.id}
              onClick={() => onSelect(action.prompt)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-xs text-slate-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <Icon
                size={15}
                className="shrink-0 text-violet-400"
              />

              <span className="truncate">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}