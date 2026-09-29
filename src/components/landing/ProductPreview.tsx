
"use client";

import { previews } from "@/data/productData";
import { motion, useReducedMotion } from "framer-motion";

export default function ProductPreview() {
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
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-2xl px-2 text-center sm:mb-12 md:mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold text-violet-400 sm:text-sm"
          >
            Product Preview
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Your AI workspace,
            <br />
            <span className="gradient-text">
              wherever you work.
            </span>
          </motion.h2>
        </motion.div>

        {/* Product Preview Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {previews.map((preview) => {
            const Icon = preview.icon;

            return (
              <motion.article
                key={preview.title}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.3 },
                      }
                }
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11131a] transition-colors duration-300 hover:border-violet-500/30"
              >
                {/* Preview Illustration */}
                <motion.div
                  className="flex h-40 items-center justify-center bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent sm:h-44 md:h-48"
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 },
                          }
                    }
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300 transition-colors duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 sm:h-18 sm:w-18 md:h-20 md:w-20"
                  >
                    <Icon size={32} className="sm:hidden" />
                    <Icon size={36} className="hidden sm:block" />
                  </motion.div>
                </motion.div>

                {/* Preview Content */}
                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-xs font-medium text-violet-400">
                    {preview.label}
                  </p>

                  <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                    {preview.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {preview.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}