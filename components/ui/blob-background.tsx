"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlobBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function BlobBackground({ className, children }: BlobBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden w-full h-[400px] flex items-center justify-center bg-white dark:bg-neutral-950 rounded-xl", className)}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["40%", "30%", "50%", "30%", "40%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/30 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 270, 180, 90, 0],
          borderRadius: ["30%", "50%", "30%", "40%", "30%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400/30 blur-3xl rounded-full mix-blend-multiply dark:mix-blend-screen"
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
