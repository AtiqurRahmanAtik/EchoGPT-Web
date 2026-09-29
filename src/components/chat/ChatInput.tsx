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
      className="w-full rounded-xl border border-white/10 bg-[#1a1a29] p-2.5 shadow-lg shadow-black/10 transition-colors duration-200 focus-within:border-violet-500/50 sm:rounded-2xl sm:p-3"
    >
      {/* Message Input */}
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message EchoGPT..."
        aria-label="Write your message"
        rows={2}
        disabled={disabled}
        className="max-h-40 min-h-[52px] w-full resize-y bg-transparent px-2 py-1.5 text-sm leading-6 text-white outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-[56px] sm:px-2 sm:py-2 sm:text-sm"
      />

      {/* Bottom Controls */}
      <div className="mt-1 flex items-center justify-between gap-2 sm:mt-0">
        {/* Attachment Button */}
        <button
          type="button"
          disabled={disabled}
          aria-label="Attach file (demo only)"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors duration-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10"
        >
          <Paperclip size={17} className="sm:h-[18px] sm:w-[18px]" />
        </button>

        {/* Send Controls */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="hidden text-xs leading-5 text-slate-500 md:inline">
            Enter to send · Shift + Enter for new line
          </span>

          <button
            type="submit"
            disabled={!message.trim() || disabled}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white transition-colors duration-200 hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a29] disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10 sm:rounded-xl"
          >
            <ArrowUp size={17} className="sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>
      </div>
    </form>
  );
}