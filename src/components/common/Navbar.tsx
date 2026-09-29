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
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08090d]/90 backdrop-blur-xl">
      <nav
        className="container-custom flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6 md:h-[76px] lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 sm:gap-2.5"
          aria-label="EchoGPT home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 sm:h-10 sm:w-10 sm:rounded-xl">
            <Sparkles
              size={19}
              className="text-white sm:h-[22px] sm:w-[22px]"
            />
          </div>

          <span className="text-lg font-bold tracking-tight sm:text-xl">
            Echo<span className="text-violet-400">GPT</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:text-violet-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:gap-3 md:flex">
          <Link
            href="/dashboard"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 lg:px-4"
          >
            Open App
          </Link>

          <Button href="/extension" showArrow>
            Explore Extension
          </Button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#11131a] px-4 py-5 shadow-xl sm:px-6 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                {link.label}
              </a>
            ))}

            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              Open App
            </Link>

            <div className="mt-3 border-t border-white/10 pt-4">
              <Button
                href="/extension"
                className="w-full justify-center"
                showArrow
              >
                Explore Extension
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}