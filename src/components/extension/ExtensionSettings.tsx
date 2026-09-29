"use client";

import {
  Bell,
  Check,
  Moon,
  Shield,
  X,
} from "lucide-react";

interface ExtensionSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExtensionSettings({
  isOpen,
  onClose,
}: ExtensionSettingsProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-50 flex min-h-0 flex-col bg-[#10101b]"
      role="dialog"
      aria-modal="true"
      aria-label="Extension settings"
    >
      {/* Header */}
      <div className="flex h-13 shrink-0 items-center justify-between border-b border-white/10 px-3 sm:h-14 sm:px-4">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-white">
            Settings
          </h2>

          <p className="truncate text-[10px] text-slate-500 sm:text-[11px]">
            Customize your extension
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close settings"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <X size={17} />
        </button>
      </div>

      {/* Settings */}
      <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
        <div className="space-y-2.5 sm:space-y-3">
          {/* Theme */}
          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.045] sm:p-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 sm:h-9 sm:w-9">
                <Moon
                  size={16}
                  className="text-violet-400 sm:h-[17px] sm:w-[17px]"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white">
                  Dark Mode
                </p>

                <p className="mt-0.5 truncate text-[10px] leading-4 text-slate-500">
                  Use dark appearance
                </p>
              </div>
            </div>

            {/* Toggle */}
            <button
              type="button"
              aria-label="Dark mode enabled"
              aria-pressed="true"
              className="flex h-6 w-10 shrink-0 items-center justify-end rounded-full bg-violet-600 px-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10101b]"
            >
              <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.045] sm:p-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 sm:h-9 sm:w-9">
                <Bell
                  size={16}
                  className="text-violet-400 sm:h-[17px] sm:w-[17px]"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white">
                  Notifications
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                  Show AI response notifications
                </p>
              </div>
            </div>

            {/* Toggle */}
            <button
              type="button"
              aria-label="Notifications enabled"
              aria-pressed="true"
              className="flex h-6 w-10 shrink-0 items-center justify-end rounded-full bg-violet-600 px-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10101b]"
            >
              <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          {/* Privacy */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.045] sm:p-3.5">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 sm:h-9 sm:w-9">
                <Shield
                  size={16}
                  className="text-emerald-400 sm:h-[17px] sm:w-[17px]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-white">
                  Privacy
                </p>

                <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-[11px]">
                  Your conversations are stored locally in this
                  prototype. No real API or external service is
                  connected yet.
                </p>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.045] sm:p-3.5">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Account
            </p>

            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-300">
                AR
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white">
                  Atiqur Rahman
                </p>

                <p className="text-[10px] text-slate-500">
                  Free Plan
                </p>
              </div>

              <div
                className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10"
                aria-label="Account active"
              >
                <Check
                  size={14}
                  className="text-emerald-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t border-white/10 px-3 py-3 sm:p-3">
        <p className="text-center text-[9px] text-slate-600 sm:text-[10px]">
          EchoGPT Extension v1.0.0
        </p>
      </div>
    </div>
  );
}