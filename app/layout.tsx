import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PathPilot AI — Turn Your Skills Into Your Next Career Move",
  description:
    "PathPilot AI turns your skills, projects, and career goals into a personalized roadmap for what to learn, build, and do next.",
  authors: [{ name: "PathPilot Team" }],
  keywords: [
    "AI Career Coach",
    "Skill Gap Analysis",
    "Software Engineering Roadmap",
    "Machine Learning Career",
    "Developer Career Path",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-950 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
