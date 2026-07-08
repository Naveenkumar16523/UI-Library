import Link from "next/link";
import { GradientButton } from "@/components/ui/gradient-button";
import { GradientMeshBackground } from "@/components/ui/gradient-mesh-background";
import { SplitText } from "@/components/ui/split-text";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Marquee } from "@/components/ui/marquee";
import { CodeWindow } from "@/components/ui/code-window";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ScrollScrubSection } from "@/components/ui/scroll-scrub-section";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const logos = ["Vercel", "Next.js", "React", "Tailwind", "Framer", "TypeScript"];

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <GradientMeshBackground className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <Link href="/components" className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white/50 px-3 py-1 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/80 dark:border-white/10 dark:bg-black/50 dark:hover:bg-black/80">
            <TextShimmer>✨ View the latest components</TextShimmer>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
            <SplitText text="Ship beautiful products faster." />
          </h1>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A curated collection of production-grade UI components. 
            Built with React, Tailwind CSS, and Framer Motion.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/components">
              <GradientButton text="Browse Components" className="text-lg px-8 py-4" />
            </Link>
            <Link 
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-neutral-200 dark:border-neutral-800 bg-transparent px-8 font-medium text-neutral-900 dark:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Read Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center text-sm font-medium text-neutral-500 uppercase tracking-widest">
          Trusted by modern engineering teams
        </div>
        <Marquee pauseOnHover className="[--duration:30s]">
          {logos.map((logo) => (
            <div key={logo} className="flex h-12 w-32 items-center justify-center rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold shadow-sm border border-neutral-100 dark:border-neutral-800">
              {logo}
            </div>
          ))}
        </Marquee>
      </section>

      {/* Code Demo Section */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Copy, paste, and ship.</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              No complex npm installations or hidden dependencies. Our components are designed to be copied directly into your codebase, giving you full control over the source code.
            </p>
            <ul className="space-y-4">
              {[
                "TypeScript ready and fully typed",
                "Accessible by default (ARIA attributes)",
                "Seamless dark mode support",
                "Easily customizable with Tailwind v4"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <div className="h-6 w-6 rounded-full bg-brand-500/10 text-brand-600 flex items-center justify-center">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-500 to-purple-500 opacity-30 blur-xl filter dark:opacity-20" />
            <CodeWindow title="terminal" className="h-[400px]">
              <pre className="text-neutral-300">
                <span className="text-green-400">~/project</span>$ npx ui-library init<br/><br/>
                <span className="text-blue-400">✔</span> Initializing project...<br/>
                <span className="text-blue-400">✔</span> Adding globals.css<br/>
                <span className="text-blue-400">✔</span> Adding tailwind config<br/><br/>
                <span className="text-green-400">~/project</span>$ npx ui-library add gradient-button<br/><br/>
                <span className="text-blue-400">✔</span> Installing dependencies (framer-motion)<br/>
                <span className="text-blue-400">✔</span> Created components/ui/gradient-button.tsx<br/><br/>
                <span className="text-neutral-500">Done in 2.4s. Happy coding!</span>
              </pre>
            </CodeWindow>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need</h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg">A complete toolkit for modern React development.</p>
          </div>
          
          <BentoGrid>
            <BentoGridItem 
              title="Motion Primitives" 
              description="Complex animations simplified into reusable React components." 
              className="md:col-span-2"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/20 dark:to-brand-900/5" />}
            />
            <BentoGridItem 
              title="Form Elements" 
              description="Accessible inputs, selects, and toggles." 
              className="md:col-span-1"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-800 to-neutral-100 dark:to-neutral-900" />}
            />
            <BentoGridItem 
              title="Layout Patterns" 
              description="Bento grids, masonry, and fluid containers." 
              className="md:col-span-1"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-800 to-neutral-100 dark:to-neutral-900" />}
            />
            <BentoGridItem 
              title="Dark Mode Ready" 
              description="Perfectly tuned color palettes for both themes." 
              className="md:col-span-2"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/5" />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Cinematic Scroll */}
      <ScrollScrubSection className="bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-900">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-300 dark:from-white dark:to-neutral-600 mb-6">
            Build something incredible.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Stop reinventing the wheel. Start shipping faster with UI Library.
          </p>
        </div>
      </ScrollScrubSection>
    </div>
  );
}
