"use client";

import { Bot, Sparkles, User } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Message } from "@/types/chat";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  messages: Message[];
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatWindow({
  messages,
  onSend,
  isLoading,
}: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading]);

  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-8 sm:px-8">
        <div className="mx-auto w-full max-w-3xl">
          {messages.length === 0 && (
            <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 ring-1 ring-violet-400/20">
                <Sparkles size={30} className="text-violet-400" />
              </div>

              <h1 className="mb-3 text-2xl font-semibold text-white sm:text-3xl">
                What can I help you with?
              </h1>

              <p className="max-w-md text-sm leading-6 text-slate-400">
                Ask questions, explore ideas, write code, or get help with
                your everyday tasks.
              </p>

              <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Explain React hooks",
                  "Write a professional email",
                  "Help me debug JavaScript",
                  "Create a study plan",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => onSend(suggestion)}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm text-slate-300 transition hover:border-violet-500/40 hover:bg-violet-500/5"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-8">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <article
                  key={message.id}
                  className="flex gap-4"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isUser
                        ? "bg-slate-700"
                        : "bg-violet-500/20 text-violet-300"
                    }`}
                  >
                    {isUser ? (
                      <User size={17} />
                    ) : (
                      <Bot size={18} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1 pt-1">
                    <p className="mb-2 text-sm font-semibold text-white">
                      {isUser ? "You" : "EchoGPT"}
                    </p>

                    <p className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-300">
                      {message.content}
                    </p>
                  </div>
                </article>
              );
            })}

            {isLoading && (
              <div className="flex gap-4" aria-live="polite">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                  <Bot size={18} />
                </div>

                <div className="pt-2">
                  <p className="mb-3 text-sm font-semibold text-white">
                    EchoGPT
                  </p>

                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div ref={bottomRef} />
        </div>
      </div>

      <div className="border-t border-white/5 px-4 pb-4 pt-4 sm:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <ChatInput onSend={onSend} disabled={isLoading} />

          <p className="mt-3 text-center text-xs text-slate-600">
            EchoGPT can make mistakes. Check important information.
          </p>
        </div>
      </div>
    </main>
  );
}