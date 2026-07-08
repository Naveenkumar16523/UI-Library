import { GradientMeshBackground } from "@/components/ui/gradient-mesh-background";

export default function GradientMeshDemo() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      <GradientMeshBackground>
        <div className="flex h-full flex-col items-center justify-center p-8 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Beautiful Design
          </h2>
          <p className="max-w-sm text-lg text-neutral-600 dark:text-neutral-300">
            Create stunning interfaces with organic, flowing background elements.
          </p>
        </div>
      </GradientMeshBackground>
    </div>
  );
}
