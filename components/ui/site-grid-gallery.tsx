"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  href: string;
  children?: React.ReactNode;
}

export const SiteGridGallery = ({
  items,
  categories,
  className,
}: {
  items: GalleryItem[];
  categories: string[];
  className?: string;
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className={cn("flex flex-col gap-8 w-full", className)}>
      <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
        <button
          onClick={() => setActiveCategory("All")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === "All"
              ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <Link href={item.href} className="absolute inset-0 z-20" />
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-neutral-50 dark:bg-black/20">
                {/* Scale effect on hover */}
                <div className="transition-transform duration-500 group-hover:scale-105 flex items-center justify-center w-full h-full">
                  {item.children}
                </div>
              </div>
              <div className="flex flex-col gap-1 p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
