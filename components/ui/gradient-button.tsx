"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends HTMLMotionProps<"button"> {
  text: string;
  gradient?: string;
  className?: string;
}

export function GradientButton({
  text,
  gradient = "from-purple-500 via-pink-500 to-red-500",
  className,
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[2px] overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r blur-sm",
          gradient
        )}
      />
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          gradient
        )}
      />
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900/90">
        {text}
      </span>
    </motion.button>
  );
}
