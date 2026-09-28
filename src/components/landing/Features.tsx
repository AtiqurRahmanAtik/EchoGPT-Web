import {
  BrainCircuit,
  MessagesSquare,
  History,
  Zap,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Multiple AI Models",
    description:
      "Explore different AI models from one unified workspace and choose the right assistant for your task.",
  },
  {
    icon: MessagesSquare,
    title: "Smart Conversations",
    description:
      "Enjoy a clean and intuitive chat experience designed to make your interactions more productive.",
  },
  {
    icon: History,
    title: "Conversation History",
    description:
      "Keep your previous conversations organized and return to important ideas whenever you need them.",
  },
  {
    icon: Zap,
    title: "Faster Workflows",
    description:
      "Spend less time switching between tools and more time focusing on meaningful work.",
  },
  {
    icon: Layers3,
    title: "Organized Workspace",
    description:
      "Keep your AI interactions and creative projects structured in one accessible place.",
  },
  {
    icon: ShieldCheck,
    title: "User-Focused Design",
    description:
      "Experience a thoughtful interface built around usability, accessibility, and simplicity.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold text-violet-400">
            Powerful Features
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need,
            <br />
            <span className="gradient-text">all in one place.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            A thoughtful collection of tools designed to make your
            everyday AI experience simpler and more productive.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.045]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mb-3 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-5 text-xs text-violet-400">
                  0{index + 1}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}