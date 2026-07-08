"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ScrollScrubSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex h-[150vh] w-full items-center justify-center overflow-hidden", className)}
    >
      <div className="sticky top-1/2 flex -translate-y-1/2 items-center justify-center w-full">
        <motion.div style={{ y, opacity }} className="w-full max-w-4xl px-4">
          {children}
        </motion.div>
      </div>
    </div>
  );
};
