"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PricingToggle = ({
  onToggle,
  className,
}: {
  onToggle?: (isAnnual: boolean) => void;
  className?: string;
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggle = () => {
    setIsAnnual(!isAnnual);
    onToggle?.(!isAnnual);
  };

  return (
    <div
      className={cn(
        "relative flex w-fit items-center rounded-full bg-neutral-200/50 p-1 dark:bg-neutral-800/50 backdrop-blur-sm",
        className
      )}
    >
      <button
        onClick={() => !isAnnual && toggle()}
        className={cn(
          "relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200",
          !isAnnual ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => isAnnual && toggle()}
        className={cn(
          "relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2",
          isAnnual ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        )}
      >
        Annually
        <span className={cn(
          "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-200",
          isAnnual ? "bg-brand-500 text-white" : "bg-neutral-200 text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400"
        )}>
          Save 20%
        </span>
      </button>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="absolute bottom-1 top-1 rounded-full bg-white shadow-sm dark:bg-neutral-700"
        initial={false}
        animate={{
          left: isAnnual ? "50%" : "4px",
          right: isAnnual ? "4px" : "50%",
        }}
      />
    </div>
  );
};
