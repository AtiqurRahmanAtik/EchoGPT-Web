"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button";
import { plans } from "@/data/pricingData";

export default function Pricing() {
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
    <section
      id="pricing"
      className="section-padding overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-xl px-2 text-center sm:mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold text-violet-400 sm:text-sm"
          >
            Pricing
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl"
          >
            Simple plans for
            <span className="gradient-text"> every workflow.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm leading-7 text-slate-400 sm:text-base"
          >
            Conceptual pricing UI for the redesign assignment.
            Actual plan availability should be confirmed with the
            product.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
        >
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -7,
                      transition: {
                        duration: 0.25,
                      },
                    }
              }
              className={`group relative overflow-hidden rounded-2xl border p-5 transition-colors duration-300 sm:p-6 md:p-7 ${
                index === 1
                  ? "border-violet-500/40 bg-violet-500/[0.06] hover:border-violet-400/60"
                  : "border-white/10 bg-white/[0.025] hover:border-violet-500/30 hover:bg-white/[0.045]"
              }`}
            >
              {/* Popular Plan Glow */}
              {index === 1 && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
              )}

              <div className="relative">
                {/* Plan Name */}
                <h3 className="text-base font-semibold sm:text-lg">
                  {plan.name}
                </h3>

                {/* Plan Description */}
                <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                  {plan.description}
                </p>

                {/* Price */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    delay: shouldReduceMotion ? 0 : 0.2,
                  }}
                  className="my-5 text-2xl font-bold sm:my-6 sm:text-3xl"
                >
                  {plan.price}
                </motion.div>

                {/* Features */}
                <ul className="mb-6 space-y-3 sm:mb-7 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{
                        opacity: 0,
                        x: shouldReduceMotion ? 0 : -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.35,
                        delay: shouldReduceMotion
                          ? 0
                          : 0.1 + featureIndex * 0.05,
                      }}
                      className="flex items-start gap-3 text-xs leading-6 text-slate-300 sm:text-sm"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-violet-400"
                      />

                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.02,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    href="/app"
                    variant={
                      index === 1 ? "primary" : "secondary"
                    }
                    className="w-full"
                  >
                    {index === 0 ? "Get Started" : "Explore"}
                  </Button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}