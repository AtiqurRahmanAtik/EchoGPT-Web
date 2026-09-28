import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950 via-[#17112b] to-[#101827] px-6 py-16 text-center md:px-12 md:py-20">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Sparkles size={27} className="text-violet-300" />
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Ready to make your
              <br />
              ideas go further?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
              Explore a smarter way to work with AI and bring your
              everyday conversations into one focused workspace.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/app" showArrow>
                Open EchoGPT
              </Button>

              <a
                href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Install Extension
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}