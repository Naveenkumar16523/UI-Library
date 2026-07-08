import { ScrollScrubSection } from "@/components/ui/scroll-scrub-section";

export default function ScrollScrubSectionDemo() {
  return (
    <div className="h-[600px] w-full overflow-y-auto bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <div className="h-[400px] flex items-center justify-center">
        <p className="text-neutral-500">Scroll down to see the effect</p>
      </div>
      
      <ScrollScrubSection className="bg-white dark:bg-black">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 mb-6">
            Cinematic Scroll Experience
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Tie your animations directly to the user's scroll position for an interactive, fluid feel that keeps them engaged.
          </p>
        </div>
      </ScrollScrubSection>

      <div className="h-[400px] flex items-center justify-center">
        <p className="text-neutral-500">Keep scrolling...</p>
      </div>
    </div>
  );
}
