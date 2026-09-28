import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username", Icon: FaGithub },
  { label: "X (Twitter)", href: "https://x.com/your-handle", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://linkedin.com/company/your-page", Icon: FaLinkedinIn },
];

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "AI Models", href: "#models" },
    { label: "Web App", href: "/app" },
    { label: "Chrome Extension", href: "/extension" },
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "mailto:support@echogpt.live" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c12]">
      <div className="container-custom py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
                <Sparkles size={21} />
              </div>
              <span className="text-xl font-bold">
                Echo<span className="text-violet-400">GPT</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              One powerful workspace for smarter AI conversations,
              creative thinking, and everyday productivity.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                
               <a   key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg border border-white/10 p-2.5 text-slate-400 transition hover:border-violet-500/50 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} EchoGPT. All rights reserved.</p>
          <p>Designed for a smarter AI experience.</p>
        </div>
      </div>
    </footer>
  );
}