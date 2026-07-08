"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

export function AccordionItem({ title, children, isOpen = false, onClick, className }: AccordionItemProps) {
  return (
    <div className={cn("border-b border-neutral-200 dark:border-neutral-800", className)}>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-50 text-neutral-700 dark:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} // ease-out-expo equivalent
            className="overflow-hidden"
          >
            <div className="pb-4 pt-0 text-sm text-neutral-600 dark:text-neutral-400">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(index);
      }
      return newOpenItems;
    });
  };

  return (
    <div className={cn("w-full max-w-2xl", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.has(index)}
          onClick={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
