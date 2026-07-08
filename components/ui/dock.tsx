"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface DockProps {
  className?: string;
  children: React.ReactNode;
}

export const Dock = ({ className, children }: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-white/10 pb-3 px-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] backdrop-blur-md dark:bg-black/20 dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            mouseX,
          });
        }
        return child;
      })}
    </motion.div>
  );
};

export const DockIcon = ({
  className,
  children,
  mouseX,
}: {
  className?: string;
  children: React.ReactNode;
  mouseX?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
