import { SplitText } from "@/components/ui/split-text";

export default function SplitTextDemo() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center">
      <div className="text-4xl font-bold">
        <SplitText text="Beautiful animated text" />
      </div>
    </div>
  );
}
