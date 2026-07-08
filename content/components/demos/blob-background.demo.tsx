import { BlobBackground } from "@/components/ui/blob-background";

export default function BlobBackgroundDemo() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <BlobBackground>
        <div className="z-10 p-8 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-2">Blob Background</h2>
          <p>A beautiful organic background animation.</p>
        </div>
      </BlobBackground>
    </div>
  );
}
