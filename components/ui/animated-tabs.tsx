"use client";

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
}

export function AnimatedTabs({ tabs, defaultValue, className }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.id);

  return (
    <Tabs.Root 
      defaultValue={defaultValue || tabs[0]?.id} 
      onValueChange={setActiveTab}
      className={cn("w-full max-w-xl", className)}
    >
      <Tabs.List className="relative flex w-full items-center justify-start rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 p-1 border border-neutral-200/50 dark:border-neutral-800/50 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.id}
            value={tab.id}
            className={cn(
              "relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 whitespace-nowrap",
              activeTab === tab.id
                ? "text-neutral-950 dark:text-neutral-50"
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 -z-10 rounded-lg bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      
      <div className="mt-4">
        {tabs.map((tab) => (
          <Tabs.Content 
            key={tab.id} 
            value={tab.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {tab.content}
            </motion.div>
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}
