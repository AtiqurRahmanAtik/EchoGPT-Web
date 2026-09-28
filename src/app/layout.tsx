import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoGPT — One Workspace, Multiple AI Models",
  description:
    "Experience smarter AI conversations with EchoGPT. Access multiple AI models from one powerful workspace.",
  keywords: [
    "EchoGPT",
    "AI Chat",
    "AI Models",
    "AI Assistant",
    "Productivity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}