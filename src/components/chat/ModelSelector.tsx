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
    <div className="relative flex items-center">
      <Sparkles
        size={16}
        className="absolute left-3 text-violet-400 pointer-events-none"
      />

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Select AI model"
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-9 text-sm text-white outline-none transition hover:bg-white/10 focus:border-violet-500"
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
        size={16}
        className="absolute right-3 pointer-events-none text-slate-400"
      />

      <span className="sr-only">
        {selectedModel?.description}
      </span>
    </div>
  );
}