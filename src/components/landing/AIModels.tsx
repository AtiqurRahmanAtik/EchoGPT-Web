import {
  Bot,
  Sparkles,
  BrainCircuit,
  Cpu,
} from "lucide-react";

const models = [
  {
    name: "ChatGPT",
    provider: "OpenAI",
    description:
      "A versatile AI assistant for writing, coding, research, and everyday tasks.",
    icon: Bot,
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    name: "Gemini",
    provider: "Google",
    description:
      "An AI assistant designed to help you explore ideas and work across different tasks.",
    icon: Sparkles,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    name: "Claude",
    provider: "Anthropic",
    description:
      "An AI assistant for thoughtful writing, analysis, and problem-solving.",
    icon: BrainCircuit,
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    name: "More Models",
    provider: "Explore",
    description:
      "Discover additional AI experiences as supported integrations become available.",
    icon: Cpu,
    color: "bg-violet-500/10 text-violet-400",
  },
];

export default function AIModels() {
  return (
    <section id="models" className="section-padding bg-[#0c0d13]">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-violet-400">
              AI Ecosystem
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore the world of
              <br />
              <span className="gradient-text">AI possibilities.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            Different models bring different strengths. Build a
            workflow that fits the way you think and create.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => {
            const Icon = model.icon;

            return (
              <article
                key={model.name}
                className="rounded-2xl border border-white/10 bg-[#13151d] p-6 transition hover:border-violet-500/30"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${model.color}`}
                >
                  <Icon size={24} />
                </div>

                <p className="mb-1 text-xs text-slate-500">
                  {model.provider}
                </p>

                <h3 className="mb-3 text-lg font-semibold">
                  {model.name}
                </h3>

                <p className="text-sm leading-6 text-slate-400">
                  {model.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}