import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  shimmerWidth?: number;
}

export function TextShimmer({
  children,
  as: Component = "p",
  className,
  shimmerWidth = 100,
}: TextShimmerProps) {
  return (
    <Component
      className={cn(
        "mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
        className,
      )}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  );
}
