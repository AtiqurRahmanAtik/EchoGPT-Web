import type { Metadata } from "next";

import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";



export const metadata: Metadata = {
  title: "EchoGPT - AI Assistant",
  description:
    "A modern AI assistant experience built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}