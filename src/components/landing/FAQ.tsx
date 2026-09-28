"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is EchoGPT?",
    answer:
      "EchoGPT is an AI-focused workspace designed to bring conversations and productivity workflows together.",
  },
  {
    question: "Can I use EchoGPT from my browser?",
    answer:
      "EchoGPT provides a browser extension concept that makes AI assistance accessible while you browse.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "Available models depend on the current EchoGPT integrations. Please check the official application for the latest supported options.",
  },
  {
    question: "Is EchoGPT free?",
    answer:
      "Please refer to the official EchoGPT website for current pricing and plan availability.",
  },
  {
    question: "How can I install the Chrome Extension?",
    answer:
      "Visit the EchoGPT Chrome Web Store listing and follow the installation instructions provided by Chrome.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#0c0d13]">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-violet-400">
            FAQ
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-sm font-medium text-white md:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 px-5 py-5 text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}