"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <div
      ref={ref}
      className={fullWidth ? "w-full" : "inline-block"}
    >
      <motion.div
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : directions[direction].x,
          y: isInView ? 0 : directions[direction].y,
        }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
