import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LottieBackground } from "@/components/ui/lottie-background";

export const metadata: Metadata = {
  title: {
    default: "Zain ul Abideen | Next.js & AI Agent Developer",
    template: "%s | Zain ul Abideen"
  },
  description: "Premium portfolio of Zain ul Abideen, specializing in Next.js and AI Agent Orchestration. Expert in building autonomous AI systems and high-performance web applications.",
  keywords: ["Next.js", "AI Agents", "TypeScript", "Fullstack Developer", "Karachi", "Agentic AI", "MCP"],
  authors: [{ name: "Zain ul Abideen" }],
  creator: "Zain ul Abideen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zain.dev",
    siteName: "Zain ul Abideen Portfolio",
    description: "Premium portfolio of Zain ul Abideen, specializing in Next.js and AI Agent Orchestration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain ul Abideen | Next.js & AI Agent Developer",
    description: "Specializing in Next.js and AI Agent Orchestration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LottieBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
