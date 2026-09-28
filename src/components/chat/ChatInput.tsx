"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, Paperclip } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) return;

    onSend(trimmedMessage);
    setMessage("");
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-[#1a1a29] p-3 shadow-lg shadow-black/10 transition focus-within:border-violet-500/50"
    >
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message EchoGPT..."
        aria-label="Write your message"
        rows={2}
        className="max-h-40 min-h-[56px] w-full resize-y bg-transparent px-2 py-2 text-sm leading-6 text-white outline-none placeholder:text-slate-500"
      />

      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Attach file (demo only)"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
        >
          <Paperclip size={18} />
        </button>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-slate-500 sm:inline">
            Enter to send · Shift + Enter for new line
          </span>

          <button
            type="submit"
            disabled={!message.trim() || disabled}
            aria-label="Send message"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </form>
  );
}