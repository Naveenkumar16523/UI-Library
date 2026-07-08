import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { QueryProvider } from "@/components/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UI Library - Beautiful animated React components",
    template: "%s | UI Library"
  },
  description: "A curated collection of production-grade UI components. Built with React, Tailwind CSS, and Framer Motion.",
  keywords: ["React", "Tailwind CSS", "Framer Motion", "Components", "UI Library", "Next.js"],
  authors: [{ name: "UI Library" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui-library.dev",
    title: "UI Library - Beautiful animated React components",
    description: "A curated collection of production-grade UI components. Built with React, Tailwind CSS, and Framer Motion.",
    siteName: "UI Library",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Library - Beautiful animated React components",
    description: "A curated collection of production-grade UI components. Built with React, Tailwind CSS, and Framer Motion.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <QueryProvider>
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
