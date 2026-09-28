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
    <div className="absolute inset-0 z-50 flex flex-col bg-[#10101b]">
      {/* Header */}

      <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
        <div>
          <h2 className="text-sm font-semibold text-white">
            Settings
          </h2>

          <p className="text-[11px] text-slate-500">
            Customize your extension
          </p>
        </div>

        <button
          onClick={onClose}
          aria-label="Close settings"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
        >
          <X size={17} />
        </button>
      </div>

      {/* Settings */}

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {/* Theme */}

          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-3">
              <Moon size={17} className="text-violet-400" />

              <div>
                <p className="text-xs font-medium text-white">
                  Dark Mode
                </p>

                <p className="text-[10px] text-slate-500">
                  Use dark appearance
                </p>
              </div>
            </div>

            <div className="flex h-5 w-9 items-center justify-end rounded-full bg-violet-600 px-1">
              <div className="h-3.5 w-3.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Notifications */}

          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center gap-3">
              <Bell size={17} className="text-violet-400" />

              <div>
                <p className="text-xs font-medium text-white">
                  Notifications
                </p>

                <p className="text-[10px] text-slate-500">
                  Show AI response notifications
                </p>
              </div>
            </div>

            <div className="flex h-5 w-9 items-center justify-end rounded-full bg-violet-600 px-1">
              <div className="h-3.5 w-3.5 rounded-full bg-white" />
            </div>
          </div>

          {/* Privacy */}

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-start gap-3">
              <Shield
                size={17}
                className="mt-0.5 shrink-0 text-emerald-400"
              />

              <div>
                <p className="text-xs font-medium text-white">
                  Privacy
                </p>

                <p className="mt-1 text-[10px] leading-5 text-slate-500">
                  Your conversations are stored locally in this
                  prototype. No real API or external service is
                  connected yet.
                </p>
              </div>
            </div>
          </div>

          {/* Account */}

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Account
            </p>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-300">
                AR
              </div>

              <div>
                <p className="text-xs font-medium text-white">
                  Atiqur Rahman
                </p>

                <p className="text-[10px] text-slate-500">
                  Free Plan
                </p>
              </div>

              <Check
                size={15}
                className="ml-auto text-emerald-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-3">
        <p className="text-center text-[10px] text-slate-600">
          EchoGPT Extension v1.0.0
        </p>
      </div>
    </div>
  );
}