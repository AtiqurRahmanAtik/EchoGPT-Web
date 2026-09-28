"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Models", href: "#models" },
  { label: "Why EchoGPT", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08090d]/85 backdrop-blur-xl">
      <nav
        className="container-custom flex h-[76px] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="EchoGPT home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
            <Sparkles size={22} className="text-white" />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Echo<span className="text-violet-400">GPT</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Open App
          </Link>

          <Button href="/extension" showArrow>
            Explore Extension
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#11131a] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <Link
              href="/app"
              onClick={() => setIsOpen(false)}
              className="text-sm text-slate-300"
            >
              Open App
            </Link>

            <Button href="/extension">
              Explore Extension
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}