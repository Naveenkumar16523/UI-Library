"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("w-full max-w-3xl", className)}>
      <div className="relative flex justify-between">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-neutral-200 dark:bg-neutral-800"
          aria-hidden="true"
        />
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-900 dark:bg-neutral-100"
          initial={false}
          animate={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {steps.map((step, index) => {
          const isCompleted = currentStep > index;
          const isCurrent = currentStep === index;
          const isUpcoming = currentStep < index;

          return (
            <div
              key={step.title}
              className="relative flex flex-col items-center group"
            >
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isCompleted || isCurrent ? "var(--color-bg-active, #171717)" : "var(--color-bg-inactive, #ffffff)",
                  borderColor: isCompleted || isCurrent ? "var(--color-border-active, #171717)" : "var(--color-border-inactive, #e5e5e5)",
                  color: isCompleted || isCurrent ? "#ffffff" : "#737373",
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 z-10 transition-colors",
                  isCompleted || isCurrent ? "dark:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-900" : "dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-500"
                )}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </motion.div>
              <div className="absolute top-10 flex w-32 flex-col items-center text-center">
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    isCurrent || isCompleted ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500 dark:text-neutral-400"
                  )}
                >
                  {step.title}
                </span>
                {step.description && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
