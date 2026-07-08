import { Marquee } from "@/components/ui/marquee";

const logos = [
  "Microsoft",
  "Google",
  "Amazon",
  "Netflix",
  "Meta",
  "Apple",
  "Tesla",
];

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex h-16 w-32 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800/50 text-neutral-900 dark:text-white font-medium"
          >
            {logo}
          </div>
        ))}
      </Marquee>
      
      {/* Left/Right Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-neutral-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-neutral-950"></div>
    </div>
  );
}
