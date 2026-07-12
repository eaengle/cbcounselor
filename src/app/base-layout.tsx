import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

// The site has one root layout per locale (route groups `(en)` and `(zh)`) so
// each can set the correct <html lang>; this component holds everything they share.

export const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://eaengle.github.io/cbcounselor"
    : "http://localhost:3000";

export const localeAlternates = {
  en: "/",
  zh: "/zh",
  "x-default": "/",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function BaseLayout({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
