"use client";

import { useState } from "react";

import {
  ChevronDown,
  Clock3,
  Copy,
  Menu,
  Send,
  Settings,
  Sparkles,
  X,
} from "lucide-react";

import type {
  ExtensionHistoryItem,
  ExtensionModel,
} from "@/types/extension";

import QuickActions from "./QuickActions";
import ExtensionHistory from "./ExtensionHistory";
import ExtensionSettings from "./ExtensionSettings";
import Link from "next/link";

interface ExtensionPopupProps {
  models: ExtensionModel[];
  history: ExtensionHistoryItem[];
  actions: {
    id: string;
    label: string;
    prompt: string;
  }[];
}

export default function ExtensionPopup({
  models,
  history: initialHistory,
  actions,
}: ExtensionPopupProps) {
  const [selectedModel, setSelectedModel] = useState(
    models[0]?.id ?? ""
  );

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [history, setHistory] = useState(initialHistory);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const selectedModelData = models.find(
    (model) => model.id === selectedModel
  );

  const handleSubmit = async () => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || isLoading) {
      return;
    }

    setIsLoading(true);
    setResponse("");

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setResponse(
      `This is a demo response from ${
        selectedModelData?.name ?? "EchoGPT"
      }.

Your prompt:
"${trimmedPrompt}"

In the production version, this popup will connect to the EchoGPT AI API and return a real response.`
    );

    const newHistoryItem: ExtensionHistoryItem = {
      id: `${Date.now()}`,
      title: trimmedPrompt.slice(0, 30),
      preview: trimmedPrompt,
      createdAt: "Just now",
    };

    setHistory((previous) => [
      newHistoryItem,
      ...previous,
    ]);

    setIsLoading(false);
  };

  const handleQuickAction = (actionPrompt: string) => {
    setPrompt(actionPrompt);
  };

  const handleHistorySelect = (
    item: ExtensionHistoryItem
  ) => {
    setPrompt(item.preview);
    setHistoryOpen(false);
  };

  const handleDeleteHistory = (id: string) => {
    setHistory((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const handleCopyResponse = async () => {
    if (!response) {
      return;
    }

    await navigator.clipboard.writeText(response);
  };

  return (
    <div className="relative mx-auto flex h-[600px] w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14] text-white shadow-2xl shadow-black/30 sm:h-[650px] sm:w-[400px]">
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}

        <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles size={16} />
            </div>

            <Link href="/">
              <p className="text-sm font-semibold">
                EchoGPT
              </p>

              <p className="text-[10px] text-emerald-400">
                AI Assistant
              </p>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                setHistoryOpen((previous) => !previous)
              }
              aria-label="Conversation history"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              {historyOpen ? (
                <X size={16} />
              ) : (
                <Clock3 size={16} />
              )}
            </button>

            <button
              onClick={() => setSettingsOpen(true)}
              aria-label="Open settings"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <Settings size={16} />
            </button>
          </div>
        </header>

        {/* Model Selector */}

        <div className="border-b border-white/5 px-4 py-3">
          <label
            htmlFor="extension-model"
            className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-500"
          >
            AI Model
          </label>

          <div className="relative">
            <Sparkles
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-400"
            />

            <select
              id="extension-model"
              value={selectedModel}
              onChange={(event) =>
                setSelectedModel(event.target.value)
              }
              className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-9 text-xs text-white outline-none transition focus:border-violet-500/50"
            >
              {models.map((model) => (
                <option
                  key={model.id}
                  value={model.id}
                  className="bg-slate-900"
                >
                  {model.name}
                </option>
              ))}
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>

          <p className="mt-1.5 text-[10px] text-slate-600">
            {selectedModelData?.description}
          </p>
        </div>

        {/* Main content */}

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {!response && (
            <>
              <div className="mb-5 rounded-xl border border-violet-500/10 bg-violet-500/[0.04] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-violet-400"
                  />

                  <h1 className="text-sm font-semibold text-white">
                    Ask EchoGPT
                  </h1>
                </div>

                <p className="text-xs leading-5 text-slate-500">
                  Ask anything or use one of the quick actions
                  below.
                </p>
              </div>

              <QuickActions
                actions={actions}
                onSelect={handleQuickAction}
              />
            </>
          )}

          {response && (
            <div className="rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/20">
                    <Sparkles
                      size={13}
                      className="text-violet-400"
                    />
                  </div>

                  <span className="text-xs font-semibold">
                    EchoGPT
                  </span>
                </div>

                <button
                  onClick={handleCopyResponse}
                  aria-label="Copy response"
                  className="rounded-md p-1.5 text-slate-500 transition hover:bg-white/10 hover:text-white"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className="whitespace-pre-wrap px-3 py-4 text-xs leading-6 text-slate-300">
                {response}
              </div>
            </div>
          )}
        </div>

        {/* Prompt */}

        <div className="border-t border-white/10 bg-[#10101b] p-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2 focus-within:border-violet-500/40">
            <textarea
              value={prompt}
              onChange={(event) =>
                setPrompt(event.target.value)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !event.shiftKey
                ) {
                  event.preventDefault();
                  handleSubmit();
                }
              }}
              rows={3}
              placeholder="Ask EchoGPT..."
              aria-label="Ask EchoGPT"
              className="w-full resize-none bg-transparent px-2 py-1 text-xs leading-5 text-white outline-none placeholder:text-slate-600"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[10px] text-slate-600">
                <Menu size={12} />
                <span>Enter to send</span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!prompt.trim() || isLoading}
                aria-label="Send prompt"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLoading ? (
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <Send size={14} />
                )}
              </button>
            </div>
          </div>

          <p className="mt-2 text-center text-[9px] text-slate-600">
            EchoGPT can make mistakes. Verify important information.
          </p>
        </div>
      </div>

      {/* History Drawer */}

      {historyOpen && (
        <div className="absolute inset-0 z-40 flex flex-col bg-[#10101b]">
          <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
            <div>
              <h2 className="text-sm font-semibold">
                Conversation History
              </h2>

              <p className="text-[10px] text-slate-500">
                Your recent prompts
              </p>
            </div>

            <button
              onClick={() => setHistoryOpen(false)}
              className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
              aria-label="Close history"
            >
              <X size={17} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <ExtensionHistory
              history={history}
              onSelect={handleHistorySelect}
              onDelete={handleDeleteHistory}
            />
          </div>
        </div>
      )}

      {/* Settings */}

      <ExtensionSettings
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}