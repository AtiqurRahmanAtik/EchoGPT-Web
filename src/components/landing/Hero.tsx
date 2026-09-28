import {
  ArrowRight,
  Sparkles,
  Zap,
  MessageSquare,
} from "lucide-react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
            <Sparkles size={14} />
            The future of AI conversations
            <ArrowRight size={14} />
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
            One Workspace.
            <br />
            <span className="gradient-text">
              Multiple AI Models.
            </span>
            <br />
            Infinite Possibilities.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Bring your AI conversations together. Explore multiple
            AI models, organize your ideas, and get more done with
            one simple and powerful workspace.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/app" showArrow>
              Start Exploring
            </Button>

            <Button href="#features" variant="secondary">
              Discover Features
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <Zap size={15} className="text-violet-400" />
              Productivity focused
            </span>

            <span className="flex items-center gap-2">
              <MessageSquare size={15} className="text-violet-400" />
              Smart conversations
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-3xl" />

          <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-2xl shadow-violet-950/30 md:p-4">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#11131a]">
              <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <div className="mx-auto rounded-md bg-white/5 px-10 py-1 text-xs text-slate-500">
                  echogpt.live
                </div>
              </div>

              <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-[210px_1fr]">
                <aside className="hidden border-r border-white/10 p-4 md:block">
                  <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
                    <Sparkles size={17} className="text-violet-400" />
                    EchoGPT
                  </div>

                  <div className="rounded-lg bg-violet-500/15 px-3 py-2 text-xs text-violet-300">
                    + New conversation
                  </div>

                  <p className="mb-3 mt-7 text-[10px] uppercase tracking-wider text-slate-500">
                    Recent
                  </p>

                  {[
                    "Building a website",
                    "Explain React Hooks",
                    "Creative writing ideas",
                  ].map((item) => (
                    <div
                      key={item}
                      className="mb-2 truncate rounded-lg px-3 py-2 text-xs text-slate-400 hover:bg-white/5"
                    >
                      {item}
                    </div>
                  ))}
                </aside>

                <div className="flex flex-col justify-between p-5 md:p-8">
                  <div>
                    <div className="mb-7 flex justify-end">
                      <div className="max-w-sm rounded-2xl rounded-br-sm bg-violet-600 px-4 py-3 text-sm leading-6 text-white">
                        Help me build a modern website using React.
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                        <Sparkles size={17} />
                      </div>

                      <div className="text-sm leading-7 text-slate-300">
                        Absolutely! Let's start by creating a clean,
                        responsive layout with reusable components,
                        a modern design system, and a smooth user
                        experience.
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs text-slate-500">
                      Ask anything...
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-md bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                        ChatGPT
                      </span>

                      <div className="rounded-lg bg-violet-600 p-2">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}