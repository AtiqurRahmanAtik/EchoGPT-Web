
"use client";

import {
  ArrowRight,
  Sparkles,
  Zap,
  MessageSquare,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Button";

export default function Hero() {
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
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32">
     
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[350px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px] sm:h-[400px] sm:w-[500px] sm:blur-[120px] md:h-[500px] md:w-[700px] md:blur-[140px]" />

      <div className="container-custom relative">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
         
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-[10px] font-medium text-violet-300 sm:mb-7 sm:px-4 sm:text-xs"
          >
            <Sparkles size={14} className="shrink-0" />

            <span>The future of AI conversations</span>

            <ArrowRight size={14} className="shrink-0" />
          </motion.div>

        
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl xl:text-[80px]"
          >
            One Workspace.
            <br />

            <span className="gradient-text">
              Multiple AI Models.
            </span>

            <br />

            Infinite Possibilities.
          </motion.h1>

         
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-slate-400 sm:mt-6 sm:px-0 sm:text-base sm:leading-8 md:mt-7 md:text-lg"
          >
            Bring your AI conversations together. Explore multiple
            AI models, organize your ideas, and get more done with
            one simple and powerful workspace.
          </motion.p>

          
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col justify-center gap-3 px-4 sm:mt-9 sm:flex-row sm:px-0"
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.04, y: -2 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="w-full sm:w-auto"
            >
              <Button href="/app" showArrow>
                Start Exploring
              </Button>
            </motion.div>

            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.04, y: -2 }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="w-full sm:w-auto"
            >
              <Button href="#features" variant="secondary">
                Discover Features
              </Button>
            </motion.div>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 px-2 text-[11px] text-slate-500 sm:mt-8 sm:gap-x-6 sm:text-xs"
          >
            <span className="flex items-center gap-2">
              <Zap
                size={15}
                className="shrink-0 text-violet-400"
              />
              Productivity focused
            </span>

            <span className="flex items-center gap-2">
              <MessageSquare
                size={15}
                className="shrink-0 text-violet-400"
              />
              Smart conversations
            </span>
          </motion.div>
        </motion.div>

       
        <motion.div
          className="relative mx-auto mt-12 w-full max-w-5xl sm:mt-14 md:mt-16"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 50,
            scale: shouldReduceMotion ? 1 : 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
        >
          <div className="absolute -inset-2 rounded-3xl bg-violet-600/10 blur-2xl sm:-inset-4 sm:blur-3xl" />

          <motion.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -4 }
            }
            transition={{ duration: 0.3 }}
            className="glass relative overflow-hidden rounded-xl p-1.5 shadow-2xl shadow-violet-950/30 sm:rounded-2xl sm:p-2 md:p-4"
          >
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#11131a] sm:rounded-xl">
              {/* Browser Header */}
              <div className="flex h-10 items-center gap-1.5 border-b border-white/10 px-3 sm:h-12 sm:gap-2 sm:px-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />

                <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5" />

                <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5" />

                <div className="mx-auto max-w-[160px] truncate rounded-md bg-white/5 px-5 py-1 text-center text-[10px] text-slate-500 sm:max-w-[220px] sm:px-10 sm:text-xs">
                  echogpt.live
                </div>
              </div>

             
              <div className="grid min-h-[300px] grid-cols-1 sm:min-h-[340px] md:min-h-[380px] md:grid-cols-[190px_1fr] lg:grid-cols-[210px_1fr]">
               
                <aside className="hidden border-r border-white/10 p-4 md:block">
                  <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
                    <Sparkles
                      size={17}
                      className="text-violet-400"
                    />
                    EchoGPT
                  </div>

                  <div className="rounded-lg bg-violet-500/15 px-3 py-2 text-xs text-violet-300">
                    + New conversation
                  </div>

                  <p className="mb-3 mt-7 text-[10px] uppercase tracking-wider text-slate-500">
                    Recent
                  </p>

                  {[
                    "Building a website",
                    "Explain React Hooks",
                    "Creative writing ideas",
                  ].map((item) => (
                    <div
                      key={item}
                      className="mb-2 truncate rounded-lg px-3 py-2 text-xs text-slate-400 transition-colors hover:bg-white/5"
                    >
                      {item}
                    </div>
                  ))}
                </aside>

               
                <div className="flex min-w-0 flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-8">
                  <div>
                   
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: shouldReduceMotion ? 0 : 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.5,
                        delay: shouldReduceMotion ? 0 : 0.8,
                      }}
                      className="mb-5 flex justify-end sm:mb-7"
                    >
                      <div className="max-w-[90%] rounded-2xl rounded-br-sm bg-violet-600 px-3 py-2.5 text-xs leading-6 text-white sm:max-w-sm sm:px-4 sm:py-3 sm:text-sm">
                        Help me build a modern website using React.
                      </div>
                    </motion.div>

                    
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.5,
                        delay: shouldReduceMotion ? 0 : 1,
                      }}
                      className="flex gap-2.5 sm:gap-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 sm:h-8 sm:w-8">
                        <Sparkles size={16} />
                      </div>

                      <div className="min-w-0 text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
                        Absolutely! Let's start by creating a clean,
                        responsive layout with reusable components,
                        a modern design system, and a smooth user
                        experience.
                      </div>
                    </motion.div>
                  </div>

                  
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : 1.2,
                    }}
                    className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 sm:mt-10 sm:p-3"
                  >
                    <div className="text-xs text-slate-500">
                      Ask anything...
                    </div>

                    <div className="mt-3 flex items-center justify-between sm:mt-4">
                      <span className="rounded-md bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-400 sm:px-3 sm:text-xs">
                        ChatGPT
                      </span>

                      <div className="rounded-lg bg-violet-600 p-2 text-white">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}