import { TextShimmer } from "@/components/ui/text-shimmer";

export default function TextShimmerDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center p-8 bg-neutral-950">
      <div className="z-10 flex items-center justify-center">
        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-4 py-1">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>✨ Introducing AI Features</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"><path d="m9 18 6-6-6-6"/></svg>
          </TextShimmer>
        </div>
      </div>
    </div>
  );
}
