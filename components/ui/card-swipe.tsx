"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardSwipeProps {
  cards: React.ReactNode[];
  onSwipeLeft?: (index: number) => void;
  onSwipeRight?: (index: number) => void;
  className?: string;
}

export function CardSwipe({ cards, onSwipeLeft, onSwipeRight, className }: CardSwipeProps) {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      onSwipeRight?.(index);
      setIndex((prev) => Math.min(prev + 1, cards.length - 1));
    } else if (info.offset.x < -threshold) {
      onSwipeLeft?.(index);
      setIndex((prev) => Math.min(prev + 1, cards.length - 1));
    }
  };

  return (
    <div className={cn("relative h-[400px] w-[300px] flex items-center justify-center", className)}>
      <AnimatePresence>
        {cards.map((card, i) => {
          if (i < index) return null;
          const isTop = i === index;
          return (
            <motion.div
              key={i}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing origin-bottom"
              style={{
                x: isTop ? x : 0,
                rotate: isTop ? rotate : 0,
                opacity: isTop ? opacity : 1 - (i - index) * 0.2,
                scale: isTop ? scale : 1 - (i - index) * 0.05,
                y: (i - index) * 20,
                zIndex: cards.length - i,
              }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={isTop ? handleDragEnd : undefined}
              initial={{ scale: 0, y: 100, opacity: 0 }}
              animate={{ scale: isTop ? 1 : 1 - (i - index) * 0.05, y: (i - index) * 20, opacity: 1 - (i - index) * 0.2 }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-full h-full rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden pointer-events-none">
                {card}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      {index >= cards.length && (
        <div className="text-neutral-500 dark:text-neutral-400 font-medium">No more cards</div>
      )}
    </div>
  );
}
