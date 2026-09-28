import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
        {showArrow && <ArrowRight size={17} />}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
      {showArrow && <ArrowRight size={17} />}
    </button>
  );
}