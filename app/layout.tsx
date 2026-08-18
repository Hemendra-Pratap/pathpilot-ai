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
  title: "PathPilot — Turn Your Skills Into Your Next Career Move",
  description:
    "PathPilot helps early-career developers understand their strengths, identify skill gaps and build a practical roadmap toward their next career goal.",
  authors: [{ name: "PathPilot Team" }],
  keywords: [
    "Career Intelligence",
    "Career Readiness",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('pathpilot-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F1E8] dark:bg-[#11110F] text-[#111111] dark:text-[#F5F1E8] font-sans antialiased overflow-x-hidden transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
