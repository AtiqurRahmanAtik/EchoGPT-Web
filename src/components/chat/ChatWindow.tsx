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
    <main className="flex min-h-0 flex-1 flex-col bg-[#08090d]">
      {/* Messages Area */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-5 sm:px-5 sm:py-6 md:px-8 md:py-8 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          {/* Empty State */}
          {messages.length === 0 && (
            <div className="flex min-h-[calc(100vh-280px)] flex-col items-center justify-center px-2 py-8 text-center sm:min-h-[55vh] sm:px-4">
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 ring-1 ring-violet-400/20 sm:mb-6 sm:h-16 sm:w-16">
                <Sparkles
                  size={26}
                  className="text-violet-400 sm:h-[30px] sm:w-[30px]"
                />
              </div>

              {/* Heading */}
              <h1 className="mb-2 text-xl font-semibold leading-tight text-white sm:mb-3 sm:text-2xl md:text-3xl">
                What can I help you with?
              </h1>

              {/* Description */}
              <p className="max-w-md text-sm leading-6 text-slate-400 sm:text-base">
                Ask questions, explore ideas, write code, or get help with
                your everyday tasks.
              </p>

              {/* Suggestions */}
              <div className="mt-6 grid w-full max-w-xl grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                {[
                  "Explain React hooks",
                  "Write a professional email",
                  "Help me debug JavaScript",
                  "Create a study plan",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => onSend(suggestion)}
                    disabled={isLoading}
                    className="min-h-[52px] rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-left text-sm leading-5 text-slate-300 transition-colors duration-200 hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-0 sm:p-4"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-6 sm:space-y-8">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <article
                  key={message.id}
                  className="flex gap-2.5 sm:gap-4"
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 sm:rounded-xl ${
                      isUser
                        ? "bg-slate-700 text-slate-200"
                        : "bg-violet-500/20 text-violet-300"
                    }`}
                  >
                    {isUser ? (
                      <User size={16} className="sm:h-[17px] sm:w-[17px]" />
                    ) : (
                      <Bot size={17} className="sm:h-[18px] sm:w-[18px]" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div className="min-w-0 flex-1 pt-0.5 sm:pt-1">
                    <p className="mb-1.5 text-sm font-semibold text-white sm:mb-2">
                      {isUser ? "You" : "EchoGPT"}
                    </p>

                    <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-300 sm:leading-7">
                      {message.content}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Loading State */}
            {isLoading && (
              <div
                className="flex gap-2.5 sm:gap-4"
                aria-live="polite"
                aria-label="EchoGPT is generating a response"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300 sm:h-9 sm:w-9 sm:rounded-xl">
                  <Bot size={17} className="sm:h-[18px] sm:w-[18px]" />
                </div>

                <div className="min-w-0 pt-0.5 sm:pt-2">
                  <p className="mb-2 text-sm font-semibold text-white sm:mb-3">
                    EchoGPT
                  </p>

                  <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.3s] sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.15s] sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 sm:h-2 sm:w-2" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Chat Input Area */}
      <div className="shrink-0 border-t border-white/5 bg-[#08090d] px-3 pb-3 pt-3 sm:px-5 sm:pb-4 sm:pt-4 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <ChatInput
            onSend={onSend}
            disabled={isLoading}
          />

          <p className="mt-2 px-2 text-center text-[10px] leading-5 text-slate-600 sm:mt-3 sm:text-xs">
            EchoGPT can make mistakes. Check important information.
          </p>
        </div>
      </div>
    </main>
  );
}