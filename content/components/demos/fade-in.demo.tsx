import { FadeIn } from "@/components/ui/fade-in";

export default function FadeInDemo() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <FadeIn>
        <div className="p-8 rounded-xl bg-white dark:bg-neutral-800 shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Scroll Reveal</h3>
          <p className="text-neutral-500 dark:text-neutral-400">This content fades in smoothly.</p>
        </div>
      </FadeIn>
    </div>
  );
}
