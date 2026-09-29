
"use client";

import { features } from "@/data/featresData";
import { motion, useReducedMotion } from "framer-motion";

export default function Features() {
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
      id="features"
      className="section-padding overflow-hidden"
    >
      <div className="container-custom">
       
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-2xl px-2 text-center sm:mb-12 md:mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold text-violet-400 sm:mb-4 sm:text-sm"
          >
            Powerful Features
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Everything you need,
            <br />
            <span className="gradient-text">
              all in one place.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base"
          >
            A thoughtful collection of tools designed to make your
            everyday AI experience simpler and more productive.
          </motion.p>
        </motion.div>

        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-violet-500/30 hover:bg-white/[0.045] sm:p-6"
              >
               
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
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white sm:mb-5 sm:h-12 sm:w-12"
                >
                  <Icon size={22} />
                </motion.div>

               
                <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
                  {feature.title}
                </h3>

                
                <p className="text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                
                <div className="mt-4 text-xs text-violet-400 sm:mt-5">
                  0{index + 1}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}