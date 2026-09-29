import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username", Icon: FaGithub },
  { label: "X (Twitter)", href: "https://x.com/your-handle", Icon: FaXTwitter },
  { label: "LinkedIn", href: "https://linkedin.com/company/your-page", Icon: FaLinkedinIn },
];

export const footerLinks = {
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