import {
  Monitor,
  PanelRight,
  Smartphone,
} from "lucide-react";

const previews = [
  {
    icon: Monitor,
    title: "Web Application",
    description:
      "A focused workspace for longer conversations and organized projects.",
    label: "Desktop experience",
  },
  {
    icon: PanelRight,
    title: "Chrome Extension",
    description:
      "Access AI assistance directly from your browser without interrupting your workflow.",
    label: "Browser experience",
  },
  {
    icon: Smartphone,
    title: "Responsive Interface",
    description:
      "A flexible interface that adapts to smaller screens and mobile devices.",
    label: "Mobile experience",
  },
];

export default function ProductPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-violet-400">
            Product Preview
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Your AI workspace,
            <br />
            <span className="gradient-text">wherever you work.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {previews.map((preview) => {
            const Icon = preview.icon;

            return (
              <article
                key={preview.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#11131a]"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
                    <Icon size={36} />
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-medium text-violet-400">
                    {preview.label}
                  </p>

                  <h3 className="mb-3 text-lg font-semibold">
                    {preview.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {preview.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}