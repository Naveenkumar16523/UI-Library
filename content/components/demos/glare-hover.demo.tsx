import { GlareHover } from "@/registry/magicui/glare-hover";

export default function GlareDemo() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center p-8">
      <GlareHover className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-neutral-900 border border-neutral-800">
        <h3 className="text-xl font-bold text-white mb-2">Glare Effect</h3>
        <p className="text-white/80 text-sm">Hover over me!</p>
      </GlareHover>
    </div>
  );
}
