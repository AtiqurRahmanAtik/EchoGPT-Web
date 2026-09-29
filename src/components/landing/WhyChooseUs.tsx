
"use client";

import {
  CheckCircle2,
  Target,
  Workflow,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const benefits = [
  "A unified place for AI conversations",
  "A clean and intuitive user experience",
  "Easy access to different AI workflows",
  "Designed for everyday productivity",
];

export default function WhyChooseUs() {
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
      id="why-us"
      className="section-padding overflow-hidden bg-[#0c0d13]"
    >
      <div className="container-custom grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-semibold text-violet-400 sm:mb-4 sm:text-sm"
          >
            Why EchoGPT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Less switching.
            <br />
            More creating.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base"
          >
            Your ideas deserve a workspace that keeps up. EchoGPT
            brings a focused experience to your AI-powered workflow.
          </motion.p>

          {/* Benefits List */}
          <motion.ul
            variants={staggerContainer}
            className="mt-6 space-y-3 sm:mt-8 sm:space-y-4"
          >
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={fadeUp}
                className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:items-center"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-violet-400 sm:mt-0"
                />

                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Feature Cards */}
        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-violet-600/10 blur-[70px] sm:blur-[100px]" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid grid-cols-2 gap-3 sm:gap-4"
          >
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
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          transition: { duration: 0.25 },
                        }
                  }
                  className="group rounded-2xl border border-white/10 bg-[#151720]/90 p-4 transition-colors duration-300 hover:border-violet-500/30 hover:bg-[#191b27] sm:p-5 md:p-7"
                >
                  {/* Card Icon */}
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.12,
                            rotate: 5,
                            transition: { duration: 0.25 },
                          }
                    }
                    className="mb-4 inline-flex text-violet-400 transition-colors duration-300 group-hover:text-violet-300 sm:mb-5"
                  >
                    <Icon size={25} />
                  </motion.div>

                  {/* Card Title */}
                  <h3 className="mb-2 text-sm font-semibold sm:text-base">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs leading-5 text-slate-400 sm:leading-6 md:text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}