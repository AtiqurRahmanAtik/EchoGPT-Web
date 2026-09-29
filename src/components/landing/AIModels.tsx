
"use client";

import { models } from "@/data/aimodelData";
import { motion, useReducedMotion } from "framer-motion";

export default function AIModels() {
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
    <section
      id="models"
      className="section-padding overflow-hidden bg-[#0c0d13]"
    >
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-3 text-xs font-semibold text-violet-400 sm:text-sm"
            >
              AI Ecosystem
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Explore the world of
              <br />
              <span className="gradient-text">
                AI possibilities.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-sm leading-7 text-slate-400 sm:text-base"
          >
            Different models bring different strengths. Build a
            workflow that fits the way you think and create.
          </motion.p>
        </motion.div>

        {/* AI Model Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {models.map((model) => {
            const Icon = model.icon;

            return (
              <motion.article
                key={model.name}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className="group rounded-2xl border border-white/10 bg-[#13151d] p-5 transition-colors duration-300 hover:border-violet-500/30 sm:p-6"
              >
                {/* Model Icon */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 4,
                          transition: { duration: 0.25 },
                        }
                  }
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-shadow duration-300 group-hover:shadow-lg sm:mb-5 sm:h-12 sm:w-12 ${model.color}`}
                >
                  <Icon size={24} />
                </motion.div>

                {/* Provider */}
                <p className="mb-1 text-xs text-slate-500">
                  {model.provider}
                </p>

                {/* Model Name */}
                <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                  {model.name}
                </h3>

                {/* Model Description */}
                <p className="text-sm leading-6 text-slate-400">
                  {model.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}