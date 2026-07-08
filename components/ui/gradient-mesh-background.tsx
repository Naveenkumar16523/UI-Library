import React from "react";
import { cn } from "@/lib/utils";

export const GradientMeshBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-500/10" />
        <div className="absolute -bottom-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-500/10" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-pink-500/20 blur-[100px] dark:bg-pink-500/10" />
      </div>
      
      {/* Optional subtle noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay dark:opacity-10" />
      
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
