import Link from "next/link";
import { Sparkles } from "lucide-react";
import { footerLinks, socialLinks } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c12]">
      <div className="container-custom px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-5 lg:gap-8 xl:gap-12">
          
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="EchoGPT Home"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 sm:h-10 sm:w-10">
                <Sparkles
                  size={19}
                  className="sm:h-[21px] sm:w-[21px]"
                />
              </div>

              <span className="text-lg font-bold sm:text-xl">
                Echo<span className="text-violet-400">GPT</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400 sm:mt-5 sm:leading-7">
              One powerful workspace for smarter AI conversations,
              creative thinking, and everyday productivity.
            </p>

           
            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors duration-200 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c12] sm:h-10 sm:w-10"
                >
                  <Icon size={17} className="sm:h-[18px] sm:w-[18px]" />
                </a>
              ))}
            </div>
          </div>

         
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold text-white sm:mb-5">
                {title}
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm leading-6 text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:text-violet-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-500 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6 sm:text-sm">
          <p className="leading-6">
            © {new Date().getFullYear()} EchoGPT. All rights reserved.
          </p>

          <p className="leading-6 sm:text-right">
            Designed for a smarter AI experience.
          </p>
        </div>
      </div>
    </footer>
  );
}