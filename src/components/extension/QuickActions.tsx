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
    <div className="w-full">
      <div className="mb-2.5 flex items-center justify-between sm:mb-3">
        <h2 className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
          Quick Actions
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2 min-[340px]:grid-cols-2 sm:gap-2.5">
        {actions.map((action) => {
          const Icon =
            icons[action.id as keyof typeof icons] ?? Sparkles;

          return (
            <button
              key={action.id}
              type="button"
              onClick={() => onSelect(action.prompt)}
              className="group flex min-h-[42px] w-full items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-xs text-slate-300 transition-colors duration-200 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0b0b14] active:bg-violet-500/15 sm:min-h-[44px] sm:px-3.5 sm:py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 transition-colors duration-200 group-hover:bg-violet-500/20">
                <Icon
                  size={14}
                  className="text-violet-400 transition-colors duration-200 group-hover:text-violet-300 sm:h-[15px] sm:w-[15px]"
                />
              </span>

              <span className="min-w-0 truncate font-medium">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}