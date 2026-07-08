import React from "react";
import { cn } from "@/lib/utils";

interface CodeWindowProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const CodeWindow = ({ children, className, title = "bash" }: CodeWindowProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black/80 shadow-2xl",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 px-4 py-3">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono font-medium">
          {title}
        </div>
        <div className="w-12"></div>
      </div>
      <div className="flex-1 overflow-auto p-4 text-sm font-mono leading-relaxed text-neutral-800 dark:text-neutral-300">
        {children}
      </div>
    </div>
  );
};
