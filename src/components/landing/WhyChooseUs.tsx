import {
  CheckCircle2,
  Target,
  Workflow,
  Sparkles,
} from "lucide-react";

const benefits = [
  "A unified place for AI conversations",
  "A clean and intuitive user experience",
  "Easy access to different AI workflows",
  "Designed for everyday productivity",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-[#0c0d13]">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold text-violet-400">
            Why EchoGPT
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Less switching.
            <br />
            More creating.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 md:text-base">
            Your ideas deserve a workspace that keeps up. EchoGPT
            brings a focused experience to your AI-powered workflow.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-violet-400"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="relative grid grid-cols-2 gap-4">
            {[
              {
                icon: Target,
                title: "Focused",
                description: "Keep your attention on what matters.",
              },
              {
                icon: Workflow,
                title: "Organized",
                description: "Bring your work into one place.",
              },
              {
                icon: Sparkles,
                title: "Creative",
                description: "Explore ideas with AI assistance.",
              },
              {
                icon: CheckCircle2,
                title: "Simple",
                description: "A smooth and accessible experience.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#151720]/90 p-5 md:p-7"
                >
                  <Icon
                    size={25}
                    className="mb-5 text-violet-400"
                  />

                  <h3 className="mb-2 font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-6 text-slate-400 md:text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

