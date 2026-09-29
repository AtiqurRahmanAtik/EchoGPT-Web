"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button";

export default function CTA() {
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
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-950 via-[#17112b] to-[#101827] px-4 py-12 text-center sm:rounded-3xl sm:px-6 sm:py-14 md:px-12 md:py-20"
        >
          {/* Background Glow */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[80px] sm:h-56 sm:w-56 md:h-64 md:w-64 md:blur-[100px]"
          />

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto max-w-2xl"
          >
            {/* Icon */}
            <motion.div
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.08,
                      rotate: 5,
                    }
              }
              transition={{ duration: 0.25 }}
              className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl"
            >
              <Sparkles
                size={24}
                className="text-violet-300 sm:h-[27px] sm:w-[27px]"
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Ready to make your
              <br />
              ideas go further?
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-xl px-2 text-sm leading-7 text-slate-300 sm:mt-5 sm:px-0 sm:text-base"
            >
              Explore a smarter way to work with AI and bring your
              everyday conversations into one focused workspace.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col justify-center gap-3 px-2 sm:mt-8 sm:flex-row sm:px-0"
            >
              {/* Primary Button */}
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                className="w-full sm:w-auto"
              >
                <Button href="/dashboard" showArrow>
                  Open EchoGPT
                </Button>
              </motion.div>

              {/* Chrome Extension Button */}
              <motion.a
                href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                transition={{ duration: 0.2 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#17112b] sm:w-auto sm:px-6"
              >
                Install Extension
                <ArrowRight size={17} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}