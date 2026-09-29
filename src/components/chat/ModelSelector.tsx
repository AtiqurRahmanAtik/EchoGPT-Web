"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import type { AIModel } from "@/types/chat";

interface ModelSelectorProps {
  models: AIModel[];
  value: string;
  onChange: (modelId: string) => void;
}

export default function ModelSelector({
  models,
  value,
  onChange,
}: ModelSelectorProps) {
  const selectedModel = models.find((model) => model.id === value);

  return (
    <div className="relative flex w-full items-center">
     
      <Sparkles
        size={15}
        className="pointer-events-none absolute left-3 z-10 shrink-0 text-violet-400 sm:h-4 sm:w-4"
      />

      
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Select AI model"
        className="min-h-[42px] w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-9 text-xs text-white outline-none transition-colors duration-200 hover:border-white/15 hover:bg-white/10 focus:border-violet-500/60 focus:bg-white/[0.08] focus:ring-1 focus:ring-violet-500/30 sm:min-h-[44px] sm:text-sm"
      >
        {models.map((model) => (
          <option
            key={model.id}
            value={model.id}
            className="bg-slate-900 text-white"
          >
            {model.name}
          </option>
        ))}
      </select>

     
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 shrink-0 text-slate-400 sm:h-4 sm:w-4"
      />

     
      <span className="sr-only">
        {selectedModel?.description}
      </span>
    </div>
  );
}