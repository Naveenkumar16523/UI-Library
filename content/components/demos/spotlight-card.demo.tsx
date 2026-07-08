import { SpotlightCard } from "@/components/ui/spotlight-card";

export default function SpotlightCardDemo() {
  return (
    <div className="flex w-full items-center justify-center p-10 bg-neutral-950">
      <SpotlightCard className="group w-full max-w-sm">
        <div className="relative z-10">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Super Fast</h3>
          <p className="text-neutral-400">Everything loads in a blink of an eye. We've optimized the delivery for maximum performance.</p>
        </div>
      </SpotlightCard>
    </div>
  );
}
