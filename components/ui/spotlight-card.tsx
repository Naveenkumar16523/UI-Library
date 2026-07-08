"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/lib/use-mouse-position";

export const SpotlightCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 p-8 dark:border-neutral-800 dark:bg-neutral-900",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
