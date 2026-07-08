import { GlowingCard } from "@/components/ui/glowing-card";

export default function GlowingCardDemo() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center p-8">
      <GlowingCard>
        <h3 className="text-lg font-bold mb-2">Hover me</h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Move your mouse over this card to reveal the glowing effect.
        </p>
      </GlowingCard>
    </div>
  );
}
