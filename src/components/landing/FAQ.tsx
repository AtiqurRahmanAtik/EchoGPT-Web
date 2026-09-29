"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/data/faqsData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="faq"
      className="section-padding overflow-hidden bg-[#0c0d13]"
    >
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-2xl px-2 text-center sm:mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold text-violet-400 sm:text-sm"
          >
            FAQ
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className={`overflow-hidden rounded-xl border bg-white/[0.025] transition-colors duration-300 ${
                  isOpen
                    ? "border-violet-500/30"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* FAQ Question */}
                <motion.button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 0.99 }
                  }
                  className="flex min-h-[60px] w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-white/[0.025] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset sm:gap-4 sm:px-5 sm:py-5"
                >
                  <span className="min-w-0 text-sm font-medium leading-6 text-white sm:text-base">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.25,
                    }}
                    className="flex shrink-0 items-center justify-center"
                  >
                    <ChevronDown
                      size={19}
                      className="text-slate-400"
                    />
                  </motion.span>
                </motion.button>

                {/* FAQ Answer */}
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    height: {
                      duration: shouldReduceMotion ? 0 : 0.3,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: shouldReduceMotion ? 0 : 0.2,
                    },
                  }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="border-t border-white/5 px-4 py-4 text-sm leading-7 text-slate-400 sm:px-5 sm:py-5">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}